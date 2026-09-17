# Typed models for the BranchCrossEventsExport SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class AnalyticsRequired(TypedDict):
    end_date: str
    start_date: str


class Analytics(AnalyticsRequired, total=False):
    aggregations: list
    code: int
    dimensions: list
    filter: dict
    granularity: str
    job_id: str
    limit_sort_spec: dict
    response_format: str
    response_format_compression: str
    status_url: str


class AnalyticsCreateDataRequired(TypedDict):
    end_date: str
    start_date: str


class AnalyticsCreateData(AnalyticsCreateDataRequired, total=False):
    aggregations: list
    code: int
    dimensions: list
    filter: dict
    granularity: str
    job_id: str
    limit_sort_spec: dict
    response_format: str
    response_format_compression: str
    status_url: str


class Status(TypedDict, total=False):
    code: int
    id: str
    job_id: str
    status_url: str


class StatusLoadMatch(TypedDict):
    id: str
    app_id: str
