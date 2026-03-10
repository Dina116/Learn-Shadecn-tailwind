import { CASHBOX_PERMISSIONS, CRM_PERMISSIONS, AUTH_PERMISSIONS, PAYMENTGETWAY_PERMISSIONS, CDU_PERMISSIONS, BI_PERMISSIONS, BPM_PERMISSIONS, PORTAL_PERMISSIONS, GENERAL_PERMISSIONS, BILLER_PERMISSIONS, BILLING_PERMISSIONS, TAX_PERMISSIONS, MAS_PERMISSIONS, GOV_PERMISSIONS } from '../_gen/GoAuth_pb';
import { USERS } from '../systemMangement/users';

export interface UserToken extends USERS {
  userID: number;
  username: string;
  userStationNo?: number;
  hq?: boolean;
  superUser?: boolean;
  isactive: boolean;
  IsPortal: boolean;
  SITE_CODE: number;
  FullName?: string;
  exp?: number;
  isSuccess: boolean;
}

export type PermissionsType = keyof CASHBOX_PERMISSIONS
| keyof CRM_PERMISSIONS
| keyof AUTH_PERMISSIONS
| keyof PAYMENTGETWAY_PERMISSIONS
| keyof CDU_PERMISSIONS
| keyof BI_PERMISSIONS
| keyof BPM_PERMISSIONS
| keyof PORTAL_PERMISSIONS
| keyof GENERAL_PERMISSIONS
| keyof BILLER_PERMISSIONS
| keyof BILLING_PERMISSIONS
| keyof TAX_PERMISSIONS
| keyof MAS_PERMISSIONS
| keyof GOV_PERMISSIONS;
