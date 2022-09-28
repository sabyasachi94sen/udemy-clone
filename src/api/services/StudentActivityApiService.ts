/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityAssignmentCreate } from '../models/ActivityAssignmentCreate';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class StudentActivityApiService {

    /**
     * Student Activity CRUD API View
     * Authentication Required : YES
     *
     * GET Params : {
         * "activity_id":1 (Optional),
         * "student_id":1 (Optional),
         * }
         *
         * POST Data :
         * {
             * "activity_type" : "Activity Type",
             * "activity_subject" : "Activity Subject",
             * "country" : "India",
             * "city" : "city X",
             * "student": 1,
             * "activity" : 1
             * }
             * @returns any
             * @throws ApiError
             */
            public static studentActivityApiList({
                page,
            }: {
                /** A page number within the paginated result set. **/
                page?: number,
            }): CancelablePromise<{
                count: number;
                next?: string | null;
                previous?: string | null;
                results: Array<ActivityAssignmentCreate>;
            }> {
                return __request({
                    method: 'GET',
                    path: `/student_activity_api/`,
                    query: {
                        'page': page,
                    },
                });
            }

            /**
             * Student Activity CRUD API View
             * Authentication Required : YES
             *
             * GET Params : {
                 * "activity_id":1 (Optional),
                 * "student_id":1 (Optional),
                 * }
                 *
                 * POST Data :
                 * {
                     * "activity_type" : "Activity Type",
                     * "activity_subject" : "Activity Subject",
                     * "country" : "India",
                     * "city" : "city X",
                     * "student": 1,
                     * "activity" : 1
                     * }
                     * @returns ActivityAssignmentCreate
                     * @throws ApiError
                     */
                    public static studentActivityApiCreate({
                        data,
                    }: {
                        data: ActivityAssignmentCreate,
                    }): CancelablePromise<ActivityAssignmentCreate> {
                        return __request({
                            method: 'POST',
                            path: `/student_activity_api/`,
                            body: data,
                        });
                    }

                    /**
                     * Student Activity CRUD API View
                     * Authentication Required : YES
                     *
                     * GET Params : {
                         * "activity_id":1 (Optional),
                         * "student_id":1 (Optional),
                         * }
                         *
                         * POST Data :
                         * {
                             * "activity_type" : "Activity Type",
                             * "activity_subject" : "Activity Subject",
                             * "country" : "India",
                             * "city" : "city X",
                             * "student": 1,
                             * "activity" : 1
                             * }
                             * @returns ActivityAssignmentCreate
                             * @throws ApiError
                             */
                            public static studentActivityApiRead({
                                id,
                            }: {
                                /** A unique integer value identifying this Activity Assignment. **/
                                id: number,
                            }): CancelablePromise<ActivityAssignmentCreate> {
                                return __request({
                                    method: 'GET',
                                    path: `/student_activity_api/${id}/`,
                                });
                            }

                            /**
                             * Student Activity CRUD API View
                             * Authentication Required : YES
                             *
                             * GET Params : {
                                 * "activity_id":1 (Optional),
                                 * "student_id":1 (Optional),
                                 * }
                                 *
                                 * POST Data :
                                 * {
                                     * "activity_type" : "Activity Type",
                                     * "activity_subject" : "Activity Subject",
                                     * "country" : "India",
                                     * "city" : "city X",
                                     * "student": 1,
                                     * "activity" : 1
                                     * }
                                     * @returns ActivityAssignmentCreate
                                     * @throws ApiError
                                     */
                                    public static studentActivityApiUpdate({
                                        id,
                                        data,
                                    }: {
                                        /** A unique integer value identifying this Activity Assignment. **/
                                        id: number,
                                        data: ActivityAssignmentCreate,
                                    }): CancelablePromise<ActivityAssignmentCreate> {
                                        return __request({
                                            method: 'PUT',
                                            path: `/student_activity_api/${id}/`,
                                            body: data,
                                        });
                                    }

                                    /**
                                     * Student Activity CRUD API View
                                     * Authentication Required : YES
                                     *
                                     * GET Params : {
                                         * "activity_id":1 (Optional),
                                         * "student_id":1 (Optional),
                                         * }
                                         *
                                         * POST Data :
                                         * {
                                             * "activity_type" : "Activity Type",
                                             * "activity_subject" : "Activity Subject",
                                             * "country" : "India",
                                             * "city" : "city X",
                                             * "student": 1,
                                             * "activity" : 1
                                             * }
                                             * @returns ActivityAssignmentCreate
                                             * @throws ApiError
                                             */
                                            public static studentActivityApiPartialUpdate({
                                                id,
                                                data,
                                            }: {
                                                /** A unique integer value identifying this Activity Assignment. **/
                                                id: number,
                                                data: ActivityAssignmentCreate,
                                            }): CancelablePromise<ActivityAssignmentCreate> {
                                                return __request({
                                                    method: 'PATCH',
                                                    path: `/student_activity_api/${id}/`,
                                                    body: data,
                                                });
                                            }

                                            /**
                                             * Student Activity CRUD API View
                                             * Authentication Required : YES
                                             *
                                             * GET Params : {
                                                 * "activity_id":1 (Optional),
                                                 * "student_id":1 (Optional),
                                                 * }
                                                 *
                                                 * POST Data :
                                                 * {
                                                     * "activity_type" : "Activity Type",
                                                     * "activity_subject" : "Activity Subject",
                                                     * "country" : "India",
                                                     * "city" : "city X",
                                                     * "student": 1,
                                                     * "activity" : 1
                                                     * }
                                                     * @returns void
                                                     * @throws ApiError
                                                     */
                                                    public static studentActivityApiDelete({
                                                        id,
                                                    }: {
                                                        /** A unique integer value identifying this Activity Assignment. **/
                                                        id: number,
                                                    }): CancelablePromise<void> {
                                                        return __request({
                                                            method: 'DELETE',
                                                            path: `/student_activity_api/${id}/`,
                                                        });
                                                    }

                                                }