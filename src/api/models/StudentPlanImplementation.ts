/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Account } from './Account';
import type { ActionMapStepAEP } from './ActionMapStepAEP';

export type StudentPlanImplementation = {
    readonly id?: number;
    action_map: ActionMapStepAEP;
    completed_by: Account;
    remarks?: string | null;
    is_completed?: boolean;
    last_active?: string | null;
    completed_on?: string | null;
    readonly created_at?: string;
    readonly updated_at?: string;
}
