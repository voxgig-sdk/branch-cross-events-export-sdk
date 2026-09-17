<?php
declare(strict_types=1);

// BranchCrossEventsExport SDK utility: result_headers

class BranchCrossEventsExportResultHeaders
{
    public static function call(BranchCrossEventsExportContext $ctx): ?BranchCrossEventsExportResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
