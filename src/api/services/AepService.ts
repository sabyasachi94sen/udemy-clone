/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class AepService {

    /**
     * @returns void
     * @throws ApiError
     */
    public static aepDelete(data): CancelablePromise<void> {
        return __request({
            method: 'DELETE',
            path: `/student/aep/list/?student_id=${data.student_id}&&activity_id=${data.activity_id}`,
           
        });
    }

    public static aepActivityAssignment(data): CancelablePromise<void> {
        return __request({
            method: 'POST',
            path: "/activity_assignment_api/",
            body: data
        });
    }

    /**
     * @returns any
     * @throws ApiError
     */
    public static aepList(): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/aep/list/`,
        });
    }

    public static aepActivityAssignmentFilter({student_id,status,subject}): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/activity_assignment/aep/filter/?student_id=${student_id}&&activity_status=${status}&&activity_subject=${subject}`,
        });
    }




    public static aepActivity(id): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/aep/activity/student/?student_id=${id}`,
        });
    }

    public static aepActivityFilter(id): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/activity_assignment/aep/filter/?student_id=${id}`,
        });
    }

    





}