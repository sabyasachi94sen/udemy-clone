/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ActivityAssignmentService {

    /**
     * Update AEP Activity Student Filter
     * Authentication Required : YES
     *
     * GET params : {
         * "student_id" : 1,
         * "activity_status": "Exam",
         * "activity_subject" : "Maths"
         * }
         * @returns any
         * @throws ApiError
         */
        public static activityAssignmentAepFilterList(): CancelablePromise<any> {
            return __request({
                method: 'GET',
                path: `/activity_assignment/aep/filter/`,
            });
        }

    }