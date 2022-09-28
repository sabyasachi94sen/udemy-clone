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
    public static accountManagersListList(): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/account_managers/list/`,
        });
    }

}