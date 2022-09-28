/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Account } from '../models/Account';
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class SuperAdminService {

    /**
     * Super Admin Registration APIView
     * API to Register Super Admin
     *
     * Authentication Required : YES
     *
     * Data :
     * {
         * "name" : "User X",
         * "email" : "email@domain.com"
         * }
         *
         * PUT Data : {
             * "is_active" : false,
             * "username": "",
             * "email":""
             * }
             * @returns any
             * @throws ApiError
             */
            public static superAdminList({
                page,
            }: {
                /** A page number within the paginated result set. **/
                page?: number,
            }): CancelablePromise<{
                count: number;
                next?: string | null;
                previous?: string | null;
                results: Array<Account>;
            }> {
                return __request({
                    method: 'GET',
                    path: `/super_admin/`,
                    query: {
                        'page': page,
                    },
                });
            }

            /**
             * Super Admin Registration APIView
             * API to Register Super Admin
             *
             * Authentication Required : YES
             *
             * Data :
             * {
                 * "name" : "User X",
                 * "email" : "email@domain.com"
                 * }
                 *
                 * PUT Data : {
                     * "is_active" : false,
                     * "username": "",
                     * "email":""
                     * }
                     * @returns Account
                     * @throws ApiError
                     */
                    public static superAdminCreate({
                        data,
                    }: {
                        data: Account,
                    }): CancelablePromise<Account> {
                        return __request({
                            method: 'POST',
                            path: `/super_admin/`,
                            body: data,
                        });
                    }

                    /**
                     * Super Admin Registration APIView
                     * API to Register Super Admin
                     *
                     * Authentication Required : YES
                     *
                     * Data :
                     * {
                         * "name" : "User X",
                         * "email" : "email@domain.com"
                         * }
                         *
                         * PUT Data : {
                             * "is_active" : false,
                             * "username": "",
                             * "email":""
                             * }
                             * @returns Account
                             * @throws ApiError
                             */
                            public static superAdminRead({
                                id,
                            }: {
                                /** A unique integer value identifying this account. **/
                                id: number,
                            }): CancelablePromise<Account> {
                                return __request({
                                    method: 'GET',
                                    path: `/super_admin/${id}/`,
                                });
                            }

                            /**
                             * Super Admin Registration APIView
                             * API to Register Super Admin
                             *
                             * Authentication Required : YES
                             *
                             * Data :
                             * {
                                 * "name" : "User X",
                                 * "email" : "email@domain.com"
                                 * }
                                 *
                                 * PUT Data : {
                                     * "is_active" : false,
                                     * "username": "",
                                     * "email":""
                                     * }
                                     * @returns Account
                                     * @throws ApiError
                                     */
                                    public static superAdminUpdate({
                                        id,
                                        data,
                                    }: {
                                        /** A unique integer value identifying this account. **/
                                        id: number,
                                        data: Account,
                                    }): CancelablePromise<Account> {
                                        return __request({
                                            method: 'PUT',
                                            path: `/super_admin/${id}/`,
                                            body: data,
                                        });
                                    }

                                    /**
                                     * Super Admin Registration APIView
                                     * API to Register Super Admin
                                     *
                                     * Authentication Required : YES
                                     *
                                     * Data :
                                     * {
                                         * "name" : "User X",
                                         * "email" : "email@domain.com"
                                         * }
                                         *
                                         * PUT Data : {
                                             * "is_active" : false,
                                             * "username": "",
                                             * "email":""
                                             * }
                                             * @returns Account
                                             * @throws ApiError
                                             */
                                            public static superAdminPartialUpdate({
                                                id,
                                                data,
                                            }: {
                                                /** A unique integer value identifying this account. **/
                                                id: number,
                                                data: Account,
                                            }): CancelablePromise<Account> {
                                                return __request({
                                                    method: 'PATCH',
                                                    path: `/super_admin/${id}/`,
                                                    body: data,
                                                });
                                            }

                                            /**
                                             * Super Admin Registration APIView
                                             * API to Register Super Admin
                                             *
                                             * Authentication Required : YES
                                             *
                                             * Data :
                                             * {
                                                 * "name" : "User X",
                                                 * "email" : "email@domain.com"
                                                 * }
                                                 *
                                                 * PUT Data : {
                                                     * "is_active" : false,
                                                     * "username": "",
                                                     * "email":""
                                                     * }
                                                     * @returns void
                                                     * @throws ApiError
                                                     */
                                                    public static superAdminDelete({
                                                        id,
                                                    }: {
                                                        /** A unique integer value identifying this account. **/
                                                        id: number,
                                                    }): CancelablePromise<void> {
                                                        return __request({
                                                            method: 'DELETE',
                                                            path: `/super_admin/${id}/`,
                                                        });
                                                    }

                                                }