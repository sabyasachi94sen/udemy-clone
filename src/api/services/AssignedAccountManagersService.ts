/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class AssignedAccountManagersService {

    /**
     * @returns any
     * @throws ApiError
     */
    public static assignedAccountManagersListList(): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/assigned_account_managers/list/`,
        });
    }

}