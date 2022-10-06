/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class AccountManagersService {

    /**
     * Account Manager Listing API
     * @returns any
     * @throws ApiError
     */
    public static accountManagersList(): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/account_managers/list/`,
        });
    }

     /**
             * Account Manager Registration APIView
             * API to Register Account Manager
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
                     * "email":"",
                     * "role": "superadmin" / "admin" / "accountmanager"
                     * }
                     * @returns Account
                     * @throws ApiError
                     */
      public static accountManagerCreate({
        data,
    }: {
        data: Account,
    }): CancelablePromise<Account> {
        return __request({
            method: 'POST',
            path: `/manager/register/`,
            body: data,
        });
    }


    public static accountManagerActivities(studentId): CancelablePromise<Account>{
        console.log("bb",studentId)
        return __request({
            method: "GET",
            path: `/account_manager/details/${studentId}/`,
        })
    }


    public static accountManagerUpdate({
        id,
        data,
    }: {
        /** A unique integer value identifying this account. **/
        id: number,
        data: Account,
    }): CancelablePromise<Account> {
        return __request({
            method: 'PUT',
            path: `/manager/ud/${id}/`,
            body: data,
        });
    }


    public static accountManagerDelete({
        id,
    }: {
        /** A unique integer value identifying this account. **/
        id: number,
    }): CancelablePromise<void> {
        return __request({
            method: 'DELETE',
            path: `/manager/ud/${id}/`,
        });
    }








}