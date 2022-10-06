export interface UserResponse {
  id: number;
  username: string;
  email: string;
  date_joined: Date;
  last_login: Date;
  last_seen: Date;
  profile_image: null;
  is_email_verified: boolean;
  is_admin: boolean;
  is_super_admin: boolean;
  is_active: boolean;
  is_staff: boolean;
  is_superuser: boolean;
  acc_showTour: boolean;
  is_student: boolean;
  is_account_manager: boolean;
  password_verification: boolean;
  last_update: null;
}
