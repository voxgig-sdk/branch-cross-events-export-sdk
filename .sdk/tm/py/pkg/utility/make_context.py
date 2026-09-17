# BranchCrossEventsExport SDK utility: make_context

from projectname_sdk.core.context import BranchCrossEventsExportContext


def make_context_util(ctxmap, basectx):
    return BranchCrossEventsExportContext(ctxmap, basectx)
