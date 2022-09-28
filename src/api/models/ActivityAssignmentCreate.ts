/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ActivityAssignmentCreate = {
    readonly id?: number;
    is_completed?: boolean;
    remarks?: string | null;
    completed_on?: string | null;
    is_deleted?: boolean;
    readonly assigned_on?: string;
    readonly updated_at?: string;
    activity: number | null;
    student: number | null;
    assigned_by?: number | null;
}
