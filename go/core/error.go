package core

type BranchCrossEventsExportError struct {
	IsBranchCrossEventsExportError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewBranchCrossEventsExportError(code string, msg string, ctx *Context) *BranchCrossEventsExportError {
	return &BranchCrossEventsExportError{
		IsBranchCrossEventsExportError: true,
		Sdk:              "BranchCrossEventsExport",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *BranchCrossEventsExportError) Error() string {
	return e.Msg
}
