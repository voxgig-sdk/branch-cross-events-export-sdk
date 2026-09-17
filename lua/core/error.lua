-- BranchCrossEventsExport SDK error

local BranchCrossEventsExportError = {}
BranchCrossEventsExportError.__index = BranchCrossEventsExportError


function BranchCrossEventsExportError.new(code, msg, ctx)
  local self = setmetatable({}, BranchCrossEventsExportError)
  self.is_sdk_error = true
  self.sdk = "BranchCrossEventsExport"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function BranchCrossEventsExportError:error()
  return self.msg
end


function BranchCrossEventsExportError:__tostring()
  return self.msg
end


return BranchCrossEventsExportError
