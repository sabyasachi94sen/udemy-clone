/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActivityRetrieve } from '../models/ActivityRetrieve';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ActivityApiService {

    /**
     * Activity ModelViewSet
     * Authentication Required : YES
     *
     * POST Data : {
         * "activity_name" : "Activity name",
         * "activity_type" : "Activity Type",
         * "subject" : "Subject name",
         * "location_type":"location type",
         * "country_activity":"country activity",
         * "country_residence":"country residence",
         * "country_citizenship":"country citizenship",
         * "grade_range":[9.0,10.0],
         * "age_range":[19,22],
         * "application_requirement":"application requirement",
         * "registration_open":"yyyy-mm-dd",
         * "application_deadline":"yyyy-mm-dd",
         * "activity_start_date":"yyyy-mm-dd",
         * "activity_end_date":"yyyy-mm-dd",
         * "remarks":"Text"
         * }
         * @returns any
         * @throws ApiError
         */
        public static activityApiList({
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
            results: Array<ActivityRetrieve>;
        }> {
            return __request({
                method: 'GET',
                path: `/activity_api/`,
                query: {
                    'page': page,
                    'page_size': pageSize,
                },
            });
        }

        /**
         * Activity ModelViewSet
         * Authentication Required : YES
         *
         * POST Data : {
             * "activity_name" : "Activity name",
             * "activity_type" : "Activity Type",
             * "subject" : "Subject name",
             * "location_type":"location type",
             * "country_activity":"country activity",
             * "country_residence":"country residence",
             * "country_citizenship":"country citizenship",
             * "grade_range":[9.0,10.0],
             * "age_range":[19,22],
             * "application_requirement":"application requirement",
             * "registration_open":"yyyy-mm-dd",
             * "application_deadline":"yyyy-mm-dd",
             * "activity_start_date":"yyyy-mm-dd",
             * "activity_end_date":"yyyy-mm-dd",
             * "remarks":"Text"
             * }
             * @returns ActivityRetrieve
             * @throws ApiError
             */
            public static activityApiCreate({
                data,
            }: {
                data: ActivityRetrieve,
            }): CancelablePromise<ActivityRetrieve> {
                return __request({
                    method: 'POST',
                    path: `/activity_api/`,
                    body: data,
                });
            }

            /**
             * Activity ModelViewSet
             * Authentication Required : YES
             *
             * POST Data : {
                 * "activity_name" : "Activity name",
                 * "activity_type" : "Activity Type",
                 * "subject" : "Subject name",
                 * "location_type":"location type",
                 * "country_activity":"country activity",
                 * "country_residence":"country residence",
                 * "country_citizenship":"country citizenship",
                 * "grade_range":[9.0,10.0],
                 * "age_range":[19,22],
                 * "application_requirement":"application requirement",
                 * "registration_open":"yyyy-mm-dd",
                 * "application_deadline":"yyyy-mm-dd",
                 * "activity_start_date":"yyyy-mm-dd",
                 * "activity_end_date":"yyyy-mm-dd",
                 * "remarks":"Text"
                 * }
                 * @returns ActivityRetrieve
                 * @throws ApiError
                 */
                public static activityApiRead({
                    id,
                }: {
                    /** A unique integer value identifying this Activity. **/
                    id: number,
                }): CancelablePromise<ActivityRetrieve> {
                    return __request({
                        method: 'GET',
                        path: `/activity_api/${id}/`,
                    });
                }

                /**
                 * Activity ModelViewSet
                 * Authentication Required : YES
                 *
                 * POST Data : {
                     * "activity_name" : "Activity name",
                     * "activity_type" : "Activity Type",
                     * "subject" : "Subject name",
                     * "location_type":"location type",
                     * "country_activity":"country activity",
                     * "country_residence":"country residence",
                     * "country_citizenship":"country citizenship",
                     * "grade_range":[9.0,10.0],
                     * "age_range":[19,22],
                     * "application_requirement":"application requirement",
                     * "registration_open":"yyyy-mm-dd",
                     * "application_deadline":"yyyy-mm-dd",
                     * "activity_start_date":"yyyy-mm-dd",
                     * "activity_end_date":"yyyy-mm-dd",
                     * "remarks":"Text"
                     * }
                     * @returns ActivityRetrieve
                     * @throws ApiError
                     */
                    public static activityApiUpdate({
                        id,
                        data,
                    }: {
                        /** A unique integer value identifying this Activity. **/
                        id: number,
                        data: ActivityRetrieve,
                    }): CancelablePromise<ActivityRetrieve> {
                        return __request({
                            method: 'PUT',
                            path: `/activity_api/${id}/`,
                            body: data,
                        });
                    }

                    /**
                     * Activity ModelViewSet
                     * Authentication Required : YES
                     *
                     * POST Data : {
                         * "activity_name" : "Activity name",
                         * "activity_type" : "Activity Type",
                         * "subject" : "Subject name",
                         * "location_type":"location type",
                         * "country_activity":"country activity",
                         * "country_residence":"country residence",
                         * "country_citizenship":"country citizenship",
                         * "grade_range":[9.0,10.0],
                         * "age_range":[19,22],
                         * "application_requirement":"application requirement",
                         * "registration_open":"yyyy-mm-dd",
                         * "application_deadline":"yyyy-mm-dd",
                         * "activity_start_date":"yyyy-mm-dd",
                         * "activity_end_date":"yyyy-mm-dd",
                         * "remarks":"Text"
                         * }
                         * @returns ActivityRetrieve
                         * @throws ApiError
                         */
                        public static activityApiPartialUpdate({
                            id,
                            data,
                        }: {
                            /** A unique integer value identifying this Activity. **/
                            id: number,
                            data: ActivityRetrieve,
                        }): CancelablePromise<ActivityRetrieve> {
                            return __request({
                                method: 'PATCH',
                                path: `/activity_api/${id}/`,
                                body: data,
                            });
                        }

                        /**
                         * Activity ModelViewSet
                         * Authentication Required : YES
                         *
                         * POST Data : {
                             * "activity_name" : "Activity name",
                             * "activity_type" : "Activity Type",
                             * "subject" : "Subject name",
                             * "location_type":"location type",
                             * "country_activity":"country activity",
                             * "country_residence":"country residence",
                             * "country_citizenship":"country citizenship",
                             * "grade_range":[9.0,10.0],
                             * "age_range":[19,22],
                             * "application_requirement":"application requirement",
                             * "registration_open":"yyyy-mm-dd",
                             * "application_deadline":"yyyy-mm-dd",
                             * "activity_start_date":"yyyy-mm-dd",
                             * "activity_end_date":"yyyy-mm-dd",
                             * "remarks":"Text"
                             * }
                             * @returns void
                             * @throws ApiError
                             */
                            public static activityApiDelete({
                                id,
                            }: {
                                /** A unique integer value identifying this Activity. **/
                                id: number,
                            }): CancelablePromise<void> {
                                return __request({
                                    method: 'DELETE',
                                    path: `/activity_api/${id}/`,
                                });
                            }

                        }