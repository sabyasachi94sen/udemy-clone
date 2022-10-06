/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Account } from './Account';

export type ActivityRetrieve = {
    readonly id?: number;
    created_by: Account;
    readonly action_maps?: string;
    activity_name?: string | null;
    activity_type?: string | null;
    subject?: string | null;
    location_type?: string | null;
    country_activity?: string | null;
    country_residence?: string | null;
    country_citizenship?: string | null;
    grade_range?: Array<number> | null;
    age_range?: Array<number> | null;
    application_requirement?: string | null;
    registration_open?: string | null;
    application_deadline?: string | null;
    activity_start_date?: string | null;
    activity_end_date?: string | null;
    remarks?: string | null;
    url?: string | null;
    is_active?: boolean;
    is_deleted?: boolean;
    readonly created_at?: string;
    readonly updated_at?: string;
}
