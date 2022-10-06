/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ActivityService {

    /**
     * Activity Retrive Update Delete API View
     * Authentication Required : YES
     *
     * PUT Data : {
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
        public static activityRead({
            id,
        }: {
            id: string,
        }): CancelablePromise<any> {
            return __request({
                method: 'GET',
                path: `/activity/${id}/`,
            });
        }

        /**
         * Activity Retrive Update Delete API View
         * Authentication Required : YES
         *
         * PUT Data : {
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
            public static activityUpdate({
                id,
            }: {
                id: string,
            }): CancelablePromise<any> {
                return __request({
                    method: 'PUT',
                    path: `/activity/${id}/`,
                });
            }

            /**
             * Activity Retrive Update Delete API View
             * Authentication Required : YES
             *
             * PUT Data : {
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
                public static activityDelete({
                    id,
                }: {
                    id: string,
                }): CancelablePromise<void> {
                    return __request({
                        method: 'DELETE',
                        path: `/activity/${id}/`,
                    });
                }

            }