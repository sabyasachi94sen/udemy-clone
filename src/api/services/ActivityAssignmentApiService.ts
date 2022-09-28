/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityAssignmentList } from '../models/ActivityAssignmentList';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ActivityAssignmentApiService {

    /**
     * Activity Assignment ModelViewSet
     * Authentication Required : YES
     *
     * POST Data : {
         * "activity_id": 1,
         * "student_id" : 39
         * }
         * @returns any
         * @throws ApiError
         */
        public static activityAssignmentApiList({
            page,
            pageSize,
        }: {
            /** A page number within the paginated result set. **/
            page?: number,
            /** Number of results to return per page. **/
            pageSize?: number,
        }): CancelablePromise<{
            count: number;
            next?: string | null;
            previous?: string | null;
            results: Array<ActivityAssignmentList>;
        }> {
            return __request({
                method: 'GET',
                path: `/activity_assignment_api/`,
                query: {
                    'page': page,
                    'page_size': pageSize,
                },
            });
        }

        /**
         * Activity Assignment ModelViewSet
         * Authentication Required : YES
         *
         * POST Data : {
             * "activity_id": 1,
             * "student_id" : 39
             * }
             * @returns ActivityAssignmentList
             * @throws ApiError
             */
            public static activityAssignmentApiCreate({
                data,
            }: {
                data: ActivityAssignmentList,
            }): CancelablePromise<ActivityAssignmentList> {
                return __request({
                    method: 'POST',
                    path: `/activity_assignment_api/`,
                    body: data,
                });
            }

            /**
             * Activity Assignment ModelViewSet
             * Authentication Required : YES
             *
             * POST Data : {
                 * "activity_id": 1,
                 * "student_id" : 39
                 * }
                 * @returns ActivityAssignmentList
                 * @throws ApiError
                 */
                public static activityAssignmentApiRead({
                    id,
                }: {
                    /** A unique integer value identifying this Activity Assignment. **/
                    id: number,
                }): CancelablePromise<ActivityAssignmentList> {
                    return __request({
                        method: 'GET',
                        path: `/activity_assignment_api/${id}/`,
                    });
                }

                /**
                 * Activity Assignment ModelViewSet
                 * Authentication Required : YES
                 *
                 * POST Data : {
                     * "activity_id": 1,
                     * "student_id" : 39
                     * }
                     * @returns ActivityAssignmentList
                     * @throws ApiError
                     */
                    public static activityAssignmentApiUpdate({
                        id,
                        data,
                    }: {
                        /** A unique integer value identifying this Activity Assignment. **/
                        id: number,
                        data: ActivityAssignmentList,
                    }): CancelablePromise<ActivityAssignmentList> {
                        return __request({
                            method: 'PUT',
                            path: `/activity_assignment_api/${id}/`,
                            body: data,
                        });
                    }

                    /**
                     * Activity Assignment ModelViewSet
                     * Authentication Required : YES
                     *
                     * POST Data : {
                         * "activity_id": 1,
                         * "student_id" : 39
                         * }
                         * @returns ActivityAssignmentList
                         * @throws ApiError
                         */
                        public static activityAssignmentApiPartialUpdate({
                            id,
                            data,
                        }: {
                            /** A unique integer value identifying this Activity Assignment. **/
                            id: number,
                            data: ActivityAssignmentList,
                        }): CancelablePromise<ActivityAssignmentList> {
                            return __request({
                                method: 'PATCH',
                                path: `/activity_assignment_api/${id}/`,
                                body: data,
                            });
                        }

                        /**
                         * Activity Assignment ModelViewSet
                         * Authentication Required : YES
                         *
                         * POST Data : {
                             * "activity_id": 1,
                             * "student_id" : 39
                             * }
                             * @returns void
                             * @throws ApiError
                             */
                            public static activityAssignmentApiDelete({
                                id,
                            }: {
                                /** A unique integer value identifying this Activity Assignment. **/
                                id: number,
                            }): CancelablePromise<void> {
                                return __request({
                                    method: 'DELETE',
                                    path: `/activity_assignment_api/${id}/`,
                                });
                            }

                        }