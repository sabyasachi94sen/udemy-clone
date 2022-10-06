/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Account = {
    readonly id?: number;
    username: string;
    email: string;
    readonly date_joined?: string;
    readonly last_login?: string;
    last_seen?: string | null;
    readonly profile_image?: string | null;
    is_email_verified?: boolean;
    is_admin?: boolean;
    is_super_admin?: boolean;
    is_active?: boolean;
    is_staff?: boolean;
    is_superuser?: boolean;
    acc_showTour?: boolean;
    is_student?: boolean;
    is_account_manager?: boolean;
    password_verification?: boolean;
    last_update?: string | null;
}
