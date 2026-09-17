"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FEATURE_PLUGINS = exports.config = void 0;
const DebugFeature_1 = require("./feature/debug/DebugFeature");
const IdempotencyFeature_1 = require("./feature/idempotency/IdempotencyFeature");
const MetricsFeature_1 = require("./feature/metrics/MetricsFeature");
const PagingFeature_1 = require("./feature/paging/PagingFeature");
const RatelimitFeature_1 = require("./feature/ratelimit/RatelimitFeature");
const RetryFeature_1 = require("./feature/retry/RetryFeature");
const TestFeature_1 = require("./feature/test/TestFeature");
const TimeoutFeature_1 = require("./feature/timeout/TimeoutFeature");
const FEATURE_CLASS = {
    debug: DebugFeature_1.DebugFeature,
    idempotency: IdempotencyFeature_1.IdempotencyFeature,
    metrics: MetricsFeature_1.MetricsFeature,
    paging: PagingFeature_1.PagingFeature,
    ratelimit: RatelimitFeature_1.RatelimitFeature,
    retry: RetryFeature_1.RetryFeature,
    test: TestFeature_1.TestFeature,
    timeout: TimeoutFeature_1.TimeoutFeature,
};
// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS = {};
exports.FEATURE_PLUGINS = FEATURE_PLUGINS;
class Config {
    makeFeature(fn) {
        const fc = FEATURE_CLASS[fn];
        const fi = new fc();
        // TODO: errors etc
        return fi;
    }
    // False for a feature added at runtime via options.extend (station's
    // adopt path) - the constructor uses this to skip makeFeature for names
    // no generated class backs.
    hasFeature(fn) {
        return null != FEATURE_CLASS[fn];
    }
    main = {
        name: 'BranchCrossEventsExport',
        slug: "branch-cross-events-export",
        version: "0.0.1",
        target: "ts",
    };
    feature = {
        debug: {
            "options": {
                "active": false,
                "max": 100,
                "redact": [
                    "authorization",
                    "cookie",
                    "set-cookie",
                    "api-key",
                    "apikey",
                    "x-api-key",
                    "idempotency-key"
                ]
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "onEntry": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "none"
        },
        idempotency: {
            "options": {
                "active": false,
                "header": "Idempotency-Key",
                "methods": [
                    "POST",
                    "PUT",
                    "PATCH",
                    "DELETE"
                ],
                "ops": [
                    "create",
                    "update",
                    "remove"
                ]
            },
            "optspec": {
                "keygen": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "none"
        },
        metrics: {
            "options": {
                "active": false
            },
            "optspec": {
                "now": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "none"
        },
        paging: {
            "options": {
                "active": false,
                "afterVar": "after",
                "cursorParam": "cursor",
                "firstVar": "first",
                "limitParam": "limit",
                "pageParam": "page",
                "startPage": 1
            },
            "optspec": {
                "limit": "`$NUMBER`",
                "ops": "`$LIST`"
            },
            "strict": false,
            "transport": "none"
        },
        ratelimit: {
            "options": {
                "active": false,
                "burst": 5,
                "rate": 5
            },
            "optspec": {
                "now": "`$FUNCTION`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        retry: {
            "options": {
                "active": false,
                "factor": 2,
                "maxDelay": 2000,
                "minDelay": 50,
                "retries": 2,
                "statuses": [
                    408,
                    425,
                    429,
                    500,
                    502,
                    503,
                    504
                ]
            },
            "optspec": {
                "jitter": "`$BOOLEAN`",
                "sleep": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
        test: {
            "options": {
                "active": false
            },
            "optspec": {
                "entity": "`$MAP`",
                "net": "`$MAP`"
            },
            "strict": false,
            "transport": "base"
        },
        timeout: {
            "options": {
                "active": false,
                "ms": 30000
            },
            "optspec": {
                "clearTimer": "`$FUNCTION`",
                "setTimer": "`$FUNCTION`"
            },
            "strict": false,
            "transport": "wrap"
        },
    };
    options = {
        base: "https://api2.branch.io/v1",
        headers: {
            "content-type": "application/json"
        },
        entity: {
            analytics: {},
            status: {},
        }
    };
    entity = {
        "analytics": {
            "fields": [
                {
                    "name": "aggregations",
                    "short": "An array where each element is an aggregation object.",
                    "type": "`$ARRAY`"
                },
                {
                    "name": "code",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "dimensions",
                    "short": "An array representing dimension(s) to group by.",
                    "type": "`$ARRAY`"
                },
                {
                    "format": "date",
                    "name": "end_date",
                    "req": true,
                    "short": "The end of the interval time range represented as an ISO-8601 complete date.",
                    "type": "`$STRING`"
                },
                {
                    "name": "filter",
                    "short": "An object representing a filter, or multiple filters.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "granularity",
                    "short": "The time granularity that each band value will represent.",
                    "type": "`$STRING`"
                },
                {
                    "name": "job_id",
                    "short": "The unique ID of the request.",
                    "type": "`$STRING`"
                },
                {
                    "name": "limit_sort_spec",
                    "short": "An object describing column/row ordering and limiting.",
                    "type": "`$OBJECT`"
                },
                {
                    "name": "response_format",
                    "short": "Compression format to use for data file.",
                    "type": "`$STRING`"
                },
                {
                    "name": "response_format_compression",
                    "short": "Compression method to use for data file.",
                    "type": "`$STRING`"
                },
                {
                    "format": "date",
                    "name": "start_date",
                    "req": true,
                    "short": "The start of the interval time range represented as an ISO-8601 complete date.",
                    "type": "`$STRING`"
                },
                {
                    "name": "status_url",
                    "short": "The URL of the export request.",
                    "type": "`$STRING`"
                }
            ],
            "name": "analytics",
            "op": {
                "create": {
                    "input": "data",
                    "name": "create",
                    "points": [
                        {
                            "args": {},
                            "kind": "http",
                            "method": "POST",
                            "orig": "/branch_aggregate/async/analytics",
                            "segments": [
                                {
                                    "lit": "branch_aggregate"
                                },
                                {
                                    "lit": "async"
                                },
                                {
                                    "lit": "analytics"
                                }
                            ],
                            "select": {},
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "branch_aggregate",
                                "async",
                                "analytics"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        },
        "status": {
            "fields": [
                {
                    "name": "code",
                    "short": "Response code",
                    "type": "`$INTEGER`"
                },
                {
                    "name": "id",
                    "type": "`$STRING`"
                },
                {
                    "name": "job_id",
                    "short": "The unique ID of the request.",
                    "type": "`$STRING`"
                },
                {
                    "name": "status_url",
                    "short": "The URL of the export request.",
                    "type": "`$STRING`"
                }
            ],
            "id": {
                "field": "id",
                "name": "id"
            },
            "name": "status",
            "op": {
                "load": {
                    "input": "data",
                    "name": "load",
                    "points": [
                        {
                            "args": {
                                "params": [
                                    {
                                        "kind": "param",
                                        "name": "id",
                                        "orig": "job_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ],
                                "query": [
                                    {
                                        "kind": "query",
                                        "name": "app_id",
                                        "orig": "app_id",
                                        "reqd": true,
                                        "type": "`$STRING`"
                                    }
                                ]
                            },
                            "kind": "http",
                            "method": "GET",
                            "orig": "/branch_aggregate/async/status/{job_id}",
                            "rename": {
                                "param": {
                                    "job_id": "id"
                                }
                            },
                            "segments": [
                                {
                                    "lit": "branch_aggregate"
                                },
                                {
                                    "lit": "async"
                                },
                                {
                                    "lit": "status"
                                },
                                {
                                    "var": "id"
                                }
                            ],
                            "select": {
                                "exist": [
                                    "app_id",
                                    "id"
                                ]
                            },
                            "transform": {
                                "req": "`reqdata`",
                                "res": "`body`"
                            },
                            "parts": [
                                "branch_aggregate",
                                "async",
                                "status",
                                "{id}"
                            ]
                        }
                    ]
                }
            },
            "relations": {
                "ancestors": []
            }
        }
    };
}
const config = new Config();
exports.config = config;
//# sourceMappingURL=Config.js.map