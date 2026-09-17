# BranchCrossEventsExport SDK feature factory

from branchcrosseventsexport_sdk.feature.base_feature import BranchCrossEventsExportBaseFeature
from branchcrosseventsexport_sdk.feature.debug_feature import BranchCrossEventsExportDebugFeature
from branchcrosseventsexport_sdk.feature.idempotency_feature import BranchCrossEventsExportIdempotencyFeature
from branchcrosseventsexport_sdk.feature.metrics_feature import BranchCrossEventsExportMetricsFeature
from branchcrosseventsexport_sdk.feature.paging_feature import BranchCrossEventsExportPagingFeature
from branchcrosseventsexport_sdk.feature.ratelimit_feature import BranchCrossEventsExportRatelimitFeature
from branchcrosseventsexport_sdk.feature.retry_feature import BranchCrossEventsExportRetryFeature
from branchcrosseventsexport_sdk.feature.test_feature import BranchCrossEventsExportTestFeature
from branchcrosseventsexport_sdk.feature.timeout_feature import BranchCrossEventsExportTimeoutFeature


_FEATURES = {
    "base": lambda: BranchCrossEventsExportBaseFeature(),
    "debug": lambda: BranchCrossEventsExportDebugFeature(),
    "idempotency": lambda: BranchCrossEventsExportIdempotencyFeature(),
    "metrics": lambda: BranchCrossEventsExportMetricsFeature(),
    "paging": lambda: BranchCrossEventsExportPagingFeature(),
    "ratelimit": lambda: BranchCrossEventsExportRatelimitFeature(),
    "retry": lambda: BranchCrossEventsExportRetryFeature(),
    "test": lambda: BranchCrossEventsExportTestFeature(),
    "timeout": lambda: BranchCrossEventsExportTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
