/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ActionMapStepCreate } from '../models/ActionMapStepCreate';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class ActionMapApiService {

    /**
     * ActionMapStep CRUD API View
     * Authentication Required : YES
     *
     * GET Params : {
         * "activity_id" : 1
         * }
         *
         * POST Data :
         * {
             * "task" : "task name",
             * "activity" : 1,
             * "remainder_type" : "Remainder type",
             * "days_before_or_after" : "Before",
             * "deadline_days" : 10
             * }
             * @returns any
             * @throws ApiError
             */
            public static actionMapApiList({
                page,
            }: {
                /** A page number within the paginated result set. **/
                page?: number,
            }): CancelablePromise<{
                count: number;
                next?: string | null;
                previous?: string | null;
                results: Array<ActionMapStepCreate>;
            }> {
                return __request({
                    method: 'GET',
                    path: `/action_map_api/`,
                    query: {
                        'page': page,
                    },
                });
            }

            /**
             * ActionMapStep CRUD API View
             * Authentication Required : YES
             *
             * GET Params : {
                 * "activity_id" : 1
                 * }
                 *
                 * POST Data :
                 * {
                     * "task" : "task name",
                     * "activity" : 1,
                     * "remainder_type" : "Remainder type",
                     * "days_before_or_after" : "Before",
                     * "deadline_days" : 10
                     * }
                     * @returns ActionMapStepCreate
                     * @throws ApiError
                     */
                    public static actionMapApiCreate({
                        data,
                    }: {
                        data: ActionMapStepCreate,
                    }): CancelablePromise<ActionMapStepCreate> {
                        return __request({
                            method: 'POST',
                            path: `/action_map_api/`,
                            body: data,
                        });
                    }

                    /**
                     * ActionMapStep CRUD API View
                     * Authentication Required : YES
                     *
                     * GET Params : {
                         * "activity_id" : 1
                         * }
                         *
                         * POST Data :
                         * {
                             * "task" : "task name",
                             * "activity" : 1,
                             * "remainder_type" : "Remainder type",
                             * "days_before_or_after" : "Before",
                             * "deadline_days" : 10
                             * }
                             * @returns ActionMapStepCreate
                             * @throws ApiError
                             */
                            public static actionMapApiRead({
                                id,
                            }: {
                                /** A unique integer value identifying this Action Map Step. **/
                                id: number,
                            }): CancelablePromise<ActionMapStepCreate> {
                                return __request({
                                    method: 'GET',
                                    path: `/action_map_api/${id}/`,
                                });
                            }

                            /**
                             * ActionMapStep CRUD API View
                             * Authentication Required : YES
                             *
                             * GET Params : {
                                 * "activity_id" : 1
                                 * }
                                 *
                                 * POST Data :
                                 * {
                                     * "task" : "task name",
                                     * "activity" : 1,
                                     * "remainder_type" : "Remainder type",
                                     * "days_before_or_after" : "Before",
                                     * "deadline_days" : 10
                                     * }
                                     * @returns ActionMapStepCreate
                                     * @throws ApiError
                                     */
                                    public static actionMapApiUpdate({
                                        id,
                                        data,
                                    }: {
                                        /** A unique integer value identifying this Action Map Step. **/
                                        id: number,
                                        data: ActionMapStepCreate,
                                    }): CancelablePromise<ActionMapStepCreate> {
                                        return __request({
                                            method: 'PUT',
                                            path: `/action_map_api/${id}/`,
                                            body: data,
                                        });
                                    }

                                    /**
                                     * ActionMapStep CRUD API View
                                     * Authentication Required : YES
                                     *
                                     * GET Params : {
                                         * "activity_id" : 1
                                         * }
                                         *
                                         * POST Data :
                                         * {
                                             * "task" : "task name",
                                             * "activity" : 1,
                                             * "remainder_type" : "Remainder type",
                                             * "days_before_or_after" : "Before",
                                             * "deadline_days" : 10
                                             * }
                                             * @returns ActionMapStepCreate
                                             * @throws ApiError
                                             */
                                            public static actionMapApiPartialUpdate({
                                                id,
                                                data,
                                            }: {
                                                /** A unique integer value identifying this Action Map Step. **/
                                                id: number,
                                                data: ActionMapStepCreate,
                                            }): CancelablePromise<ActionMapStepCreate> {
                                                return __request({
                                                    method: 'PATCH',
                                                    path: `/action_map_api/${id}/`,
                                                    body: data,
                                                });
                                            }

                                            /**
                                             * ActionMapStep CRUD API View
                                             * Authentication Required : YES
                                             *
                                             * GET Params : {
                                                 * "activity_id" : 1
                                                 * }
                                                 *
                                                 * POST Data :
                                                 * {
                                                     * "task" : "task name",
                                                     * "activity" : 1,
                                                     * "remainder_type" : "Remainder type",
                                                     * "days_before_or_after" : "Before",
                                                     * "deadline_days" : 10
                                                     * }
                                                     * @returns void
                                                     * @throws ApiError
                                                     */
                                                    public static actionMapApiDelete({
                                                        id,
                                                    }: {
                                                        /** A unique integer value identifying this Action Map Step. **/
                                                        id: number,
                                                    }): CancelablePromise<void> {
                                                        return __request({
                                                            method: 'DELETE',
                                                            path: `/action_map_api/${id}/`,
                                                        });
                                                    }

                                                }