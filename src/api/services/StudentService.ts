/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class StudentService {

    /**
     * Student Activity Tracking and Updating API View
     * Authentication Required : YES
     *
     * PUT Data:
     * {
         * "plan_id" : 1,
         * "is_completed" : true,
         * "remarks" : ""
         * }
         * @returns any
         * @throws ApiError
         */
        public static studentActivityTrackList(): CancelablePromise<any> {
            return __request({
                method: 'GET',
                path: `/student/activity/track/`,
            });
        }

        /**
         * Student Activity Tracking and Updating API View
         * Authentication Required : YES
         *
         * PUT Data:
         * {
             * "plan_id" : 1,
             * "is_completed" : true,
             * "remarks" : ""
             * }
             * @returns any
             * @throws ApiError
             */
            public static studentActivityTrackUpdate(): CancelablePromise<any> {
                return __request({
                    method: 'PUT',
                    path: `/student/activity/track/`,
                });
            }

            /**
             * AEP Enrichment Plan (Student)
             * Authentication Required : YES
             *
             * GET params : {
                 * "student_id" : 1
                 * }
                 * @returns any
                 * @throws ApiError
                 */
                public static studentAepListList(): CancelablePromise<any> {
                    return __request({
                        method: 'GET',
                        path: `/student/aep/list/`,
                    });
                }

                /**
                 * @returns any
                 * @throws ApiError
                 */
                public static studentListList({
                    id,
                }: {
                    /** Student ID **/
                    id?: string,
                }): CancelablePromise<any> {
                    return __request({
                        method: 'GET',
                        path: `/student/list/`,
                        query: {
                            'id': id,
                        },
                    });
                }

                /**
                 * Student Registration APIView
                 * API to Register Student
                 *
                 * Authentication Required : YES
                 *
                 * Data :{
                     * "student_details":{
                         * "student_name" : "User X",
                         * "email" : "email@domain.com",
                         * "phone_number" : "+91 xxxxxxxxxx"
                         * "date_of_birth" : "2000-06-01",
                         * "current_grade" : "9.0",
                         * "country_of_boarding_school" : "country X",
                         * "country_of_citizenship" : "country Y",
                         * "is_active" : true,
                         * "residence" : {
                             * "city_of_residence" : "city",
                             * "country_of_residence" : "country"
                             * }
                             * },
                             * "account_manager" : 1
                             * }
                             * @returns any
                             * @throws ApiError
                             */
                            public static studentRegisterCreate(): CancelablePromise<any> {
                                return __request({
                                    method: 'POST',
                                    path: `/student/register/`,
                                });
                            }

                            /**
                             * Student Update and Delete APIView
                             * API to Update and Delete Student
                             *
                             * Authentication Required : YES
                             *
                             * Data :
                             * {
                                 * "student_details":{
                                     * "student_name" : "User X",
                                     * "email" : "email@domain.com",
                                     * "phone_number" : "+91 xxxxxxxxxx"
                                     * "date_of_birth" : "2000-06-01",
                                     * "current_grade" : "9.0",
                                     * "country_of_boarding_school" : "country X"
                                     * "country_of_citizenship" : "country Y",
                                     * "is_active" : true,
                                     * "residence" : {
                                         * "city_of_residence" : "city",
                                         * "country_of_residence" : "country"
                                         * }
                                         * }
                                         * "account_manager" : 1
                                         * }
                                         * @returns any
                                         * @throws ApiError
                                         */
                                        public static studentUdUpdate({
                                            id,
                                        }: {
                                            id: string,
                                        }): CancelablePromise<any> {
                                            return __request({
                                                method: 'PUT',
                                                path: `/student/ud/${id}/`,
                                            });
                                        }

                                        /**
                                         * Student Update and Delete APIView
                                         * API to Update and Delete Student
                                         *
                                         * Authentication Required : YES
                                         *
                                         * Data :
                                         * {
                                             * "student_details":{
                                                 * "student_name" : "User X",
                                                 * "email" : "email@domain.com",
                                                 * "phone_number" : "+91 xxxxxxxxxx"
                                                 * "date_of_birth" : "2000-06-01",
                                                 * "current_grade" : "9.0",
                                                 * "country_of_boarding_school" : "country X"
                                                 * "country_of_citizenship" : "country Y",
                                                 * "is_active" : true,
                                                 * "residence" : {
                                                     * "city_of_residence" : "city",
                                                     * "country_of_residence" : "country"
                                                     * }
                                                     * }
                                                     * "account_manager" : 1
                                                     * }
                                                     * @returns void
                                                     * @throws ApiError
                                                     */
                                                    public static studentUdDelete({
                                                        id,
                                                    }: {
                                                        id: string,
                                                    }): CancelablePromise<void> {
                                                        return __request({
                                                            method: 'DELETE',
                                                            path: `/student/ud/${id}/`,
                                                        });
                                                    }

                                                }