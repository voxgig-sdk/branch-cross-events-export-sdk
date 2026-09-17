import { BranchCrossEventsExportEntityBase } from '../BranchCrossEventsExportEntityBase';
import type { BranchCrossEventsExportSDK } from '../BranchCrossEventsExportSDK';
import type { Control } from '../types';
import type { Status, StatusLoadMatch } from '../BranchCrossEventsExportTypes';
declare class StatusEntity extends BranchCrossEventsExportEntityBase<Status> {
    constructor(client: BranchCrossEventsExportSDK, entopts: any);
    make(this: StatusEntity): StatusEntity;
    load(this: any, reqmatch?: StatusLoadMatch, ctrl?: Control): Promise<StatusEntity>;
}
export { StatusEntity };
