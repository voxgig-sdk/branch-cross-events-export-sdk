-- Typed models for the BranchCrossEventsExport SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Analytics
---@field aggregations? table
---@field code? number
---@field dimensions? table
---@field end_date string
---@field filter? table
---@field granularity? string
---@field job_id? string
---@field limit_sort_spec? table
---@field response_format? string
---@field response_format_compression? string
---@field start_date string
---@field status_url? string

---@class AnalyticsCreateData
---@field aggregations? table
---@field code? number
---@field dimensions? table
---@field end_date string
---@field filter? table
---@field granularity? string
---@field job_id? string
---@field limit_sort_spec? table
---@field response_format? string
---@field response_format_compression? string
---@field start_date string
---@field status_url? string

---@class Status
---@field code? number
---@field id? string
---@field job_id? string
---@field status_url? string

---@class StatusLoadMatch
---@field id string
---@field app_id string

local M = {}

return M
