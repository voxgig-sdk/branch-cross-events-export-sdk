# BranchCrossEventsExport SDK utility: make_context

from branchcrosseventsexport_sdk.core.context import BranchCrossEventsExportContext


def make_context_util(ctxmap, basectx):
    return BranchCrossEventsExportContext(ctxmap, basectx)
