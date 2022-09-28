/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ActionMapStepCreate = {
    readonly id?: number;
    task?: string | null;
    remainder_type?: string | null;
    days_before_or_after?: 'Before' | 'After';
    deadline_days?: number | null;
    readonly created_at?: string;
    readonly updated_at?: string;
    activity?: number | null;
}
