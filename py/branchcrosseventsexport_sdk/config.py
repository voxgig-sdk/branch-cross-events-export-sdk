# BranchCrossEventsExport SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "BranchCrossEventsExport",
            "slug": "branch-cross-events-export",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "debug": {
        "options": {
          "active": False,
          "max": 100,
          "redact": [
            "authorization",
            "cookie",
            "set-cookie",
            "api-key",
            "apikey",
            "x-api-key",
            "idempotency-key",
          ],
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "onEntry": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "none",
      },
            "idempotency": {
        "options": {
          "active": False,
          "header": "Idempotency-Key",
          "methods": [
            "POST",
            "PUT",
            "PATCH",
            "DELETE",
          ],
          "ops": [
            "create",
            "update",
            "remove",
          ],
        },
        "optspec": {
          "keygen": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "none",
      },
            "metrics": {
        "options": {
          "active": False,
        },
        "optspec": {
          "now": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "none",
      },
            "paging": {
        "options": {
          "active": False,
          "afterVar": "after",
          "cursorParam": "cursor",
          "firstVar": "first",
          "limitParam": "limit",
          "pageParam": "page",
          "startPage": 1,
        },
        "optspec": {
          "limit": "`$NUMBER`",
          "ops": "`$LIST`",
        },
        "strict": False,
        "transport": "none",
      },
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
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
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
        },
        "options": {
            "base": "https://api2.branch.io/v1",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "analytics": {},
                "status": {},
            },
        },
        "entity": {
      "analytics": {
        "fields": [
          {
            "name": "aggregations",
            "short": "An array where each element is an aggregation object.",
            "type": "`$ARRAY`",
          },
          {
            "name": "code",
            "type": "`$INTEGER`",
          },
          {
            "name": "dimensions",
            "short": "An array representing dimension(s) to group by.",
            "type": "`$ARRAY`",
          },
          {
            "format": "date",
            "name": "end_date",
            "req": True,
            "short": "The end of the interval time range represented as an ISO-8601 complete date.",
            "type": "`$STRING`",
          },
          {
            "name": "filter",
            "short": "An object representing a filter, or multiple filters.",
            "type": "`$OBJECT`",
          },
          {
            "name": "granularity",
            "short": "The time granularity that each band value will represent.",
            "type": "`$STRING`",
          },
          {
            "name": "job_id",
            "short": "The unique ID of the request.",
            "type": "`$STRING`",
          },
          {
            "name": "limit_sort_spec",
            "short": "An object describing column/row ordering and limiting.",
            "type": "`$OBJECT`",
          },
          {
            "name": "response_format",
            "short": "Compression format to use for data file.",
            "type": "`$STRING`",
          },
          {
            "name": "response_format_compression",
            "short": "Compression method to use for data file.",
            "type": "`$STRING`",
          },
          {
            "format": "date",
            "name": "start_date",
            "req": True,
            "short": "The start of the interval time range represented as an ISO-8601 complete date.",
            "type": "`$STRING`",
          },
          {
            "name": "status_url",
            "short": "The URL of the export request.",
            "type": "`$STRING`",
          },
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
                    "lit": "branch_aggregate",
                  },
                  {
                    "lit": "async",
                  },
                  {
                    "lit": "analytics",
                  },
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "branch_aggregate",
                  "async",
                  "analytics",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "status": {
        "fields": [
          {
            "name": "code",
            "short": "Response code",
            "type": "`$INTEGER`",
          },
          {
            "name": "id",
            "type": "`$STRING`",
          },
          {
            "name": "job_id",
            "short": "The unique ID of the request.",
            "type": "`$STRING`",
          },
          {
            "name": "status_url",
            "short": "The URL of the export request.",
            "type": "`$STRING`",
          },
        ],
        "id": {
          "field": "id",
          "name": "id",
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                  "query": [
                    {
                      "kind": "query",
                      "name": "app_id",
                      "orig": "app_id",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
                "method": "GET",
                "orig": "/branch_aggregate/async/status/{job_id}",
                "rename": {
                  "param": {
                    "job_id": "id",
                  },
                },
                "segments": [
                  {
                    "lit": "branch_aggregate",
                  },
                  {
                    "lit": "async",
                  },
                  {
                    "lit": "status",
                  },
                  {
                    "var": "id",
                  },
                ],
                "select": {
                  "exist": [
                    "app_id",
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "parts": [
                  "branch_aggregate",
                  "async",
                  "status",
                  "{id}",
                ],
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
