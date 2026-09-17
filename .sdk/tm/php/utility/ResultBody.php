<?php
declare(strict_types=1);

// BranchCrossEventsExport SDK utility: result_body

class BranchCrossEventsExportResultBody
{
    public static function call(BranchCrossEventsExportContext $ctx): ?BranchCrossEventsExportResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
