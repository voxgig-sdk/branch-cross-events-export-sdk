<?php
declare(strict_types=1);

// BranchCrossEventsExport SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class BranchCrossEventsExportMakeContext
{
    public static function call(array $ctxmap, ?BranchCrossEventsExportContext $basectx): BranchCrossEventsExportContext
    {
        return new BranchCrossEventsExportContext($ctxmap, $basectx);
    }
}
