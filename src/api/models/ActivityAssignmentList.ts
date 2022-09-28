/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Account } from './Account';
import type { ActivityRetrieve } from './ActivityRetrieve';
import type { StudentPlanImplementation } from './StudentPlanImplementation';

export type ActivityAssignmentList = {
    readonly id?: number;
    activity: ActivityRetrieve;
    assigned_by: Account;
    activity_plan_assigned: Array<StudentPlanImplementation>;
    is_completed?: boolean;
    remarks?: string | null;
    completed_on?: string | null;
    is_deleted?: boolean;
    readonly assigned_on?: string;
    readonly updated_at?: string;
}
