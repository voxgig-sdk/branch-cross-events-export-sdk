import { BranchCrossEventsExportEntityBase } from '../BranchCrossEventsExportEntityBase';
import type { BranchCrossEventsExportSDK } from '../BranchCrossEventsExportSDK';
import type { Control } from '../types';
import type { Analytics, AnalyticsCreateData } from '../BranchCrossEventsExportTypes';
declare class AnalyticsEntity extends BranchCrossEventsExportEntityBase<Analytics> {
    constructor(client: BranchCrossEventsExportSDK, entopts: any);
    make(this: AnalyticsEntity): AnalyticsEntity;
    create(this: any, reqdata?: AnalyticsCreateData, ctrl?: Control): Promise<AnalyticsEntity>;
}
export { AnalyticsEntity };
