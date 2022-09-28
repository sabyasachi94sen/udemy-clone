/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { request as __request } from '../core/request';

export class AepService {

    /**
     * @returns any
     * @throws ApiError
     */
    public static aepListList(): CancelablePromise<any> {
        return __request({
            method: 'GET',
            path: `/aep/list/`,
        });
    }

}