// Typed models for the BranchCrossEventsExport SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/branch-cross-events-export-sdk/go/core"
)

// Analytics is the typed data model for the analytics entity.
type Analytics struct {
	Aggregations *[]any `json:"aggregations,omitempty"`
	Code *int `json:"code,omitempty"`
	Dimensions *[]any `json:"dimensions,omitempty"`
	EndDate string `json:"end_date"`
	Filter *map[string]any `json:"filter,omitempty"`
	Granularity *string `json:"granularity,omitempty"`
	JobId *string `json:"job_id,omitempty"`
	LimitSortSpec *map[string]any `json:"limit_sort_spec,omitempty"`
	ResponseFormat *string `json:"response_format,omitempty"`
	ResponseFormatCompression *string `json:"response_format_compression,omitempty"`
	StartDate string `json:"start_date"`
	StatusUrl *string `json:"status_url,omitempty"`
}

// AnalyticsCreateData is the typed request payload for Analytics.CreateTyped.
type AnalyticsCreateData struct {
	Aggregations *[]any `json:"aggregations,omitempty"`
	Code *int `json:"code,omitempty"`
	Dimensions *[]any `json:"dimensions,omitempty"`
	EndDate string `json:"end_date"`
	Filter *map[string]any `json:"filter,omitempty"`
	Granularity *string `json:"granularity,omitempty"`
	JobId *string `json:"job_id,omitempty"`
	LimitSortSpec *map[string]any `json:"limit_sort_spec,omitempty"`
	ResponseFormat *string `json:"response_format,omitempty"`
	ResponseFormatCompression *string `json:"response_format_compression,omitempty"`
	StartDate string `json:"start_date"`
	StatusUrl *string `json:"status_url,omitempty"`
}

// Status is the typed data model for the status entity.
type Status struct {
	Code *int `json:"code,omitempty"`
	Id *string `json:"id,omitempty"`
	JobId *string `json:"job_id,omitempty"`
	StatusUrl *string `json:"status_url,omitempty"`
}

// StatusLoadMatch is the typed request payload for Status.LoadTyped.
type StatusLoadMatch struct {
	Id string `json:"id"`
	AppId string `json:"app_id"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
