import { Context } from './Context';
declare class BranchCrossEventsExportError extends Error {
    isBranchCrossEventsExportError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { BranchCrossEventsExportError };
