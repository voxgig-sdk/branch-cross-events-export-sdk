<?php
declare(strict_types=1);

// Typed models for the BranchCrossEventsExport SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Analytics entity data model. */
class Analytics
{
    public ?array $aggregations = null;
    public ?int $code = null;
    public ?array $dimensions = null;
    public string $end_date;
    public ?array $filter = null;
    public ?string $granularity = null;
    public ?string $job_id = null;
    public ?array $limit_sort_spec = null;
    public ?string $response_format = null;
    public ?string $response_format_compression = null;
    public string $start_date;
    public ?string $status_url = null;
}

/** Request payload for Analytics#create. */
class AnalyticsCreateData
{
    public ?array $aggregations = null;
    public ?int $code = null;
    public ?array $dimensions = null;
    public string $end_date;
    public ?array $filter = null;
    public ?string $granularity = null;
    public ?string $job_id = null;
    public ?array $limit_sort_spec = null;
    public ?string $response_format = null;
    public ?string $response_format_compression = null;
    public string $start_date;
    public ?string $status_url = null;
}

/** Status entity data model. */
class Status
{
    public ?int $code = null;
    public ?string $id = null;
    public ?string $job_id = null;
    public ?string $status_url = null;
}

/** Request payload for Status#load. */
class StatusLoadMatch
{
    public string $id;
    public string $app_id;
}

