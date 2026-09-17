export interface Analytics {
    aggregations?: any[];
    code?: number;
    dimensions?: any[];
    end_date: string;
    filter?: Record<string, any>;
    granularity?: string;
    job_id?: string;
    limit_sort_spec?: Record<string, any>;
    response_format?: string;
    response_format_compression?: string;
    start_date: string;
    status_url?: string;
}
export interface AnalyticsCreateData {
    aggregations?: any[];
    code?: number;
    dimensions?: any[];
    end_date: string;
    filter?: Record<string, any>;
    granularity?: string;
    job_id?: string;
    limit_sort_spec?: Record<string, any>;
    response_format?: string;
    response_format_compression?: string;
    start_date: string;
    status_url?: string;
}
export interface Status {
    code?: number;
    id?: string;
    job_id?: string;
    status_url?: string;
}
export interface StatusLoadMatch {
    id: string;
    app_id: string;
}
