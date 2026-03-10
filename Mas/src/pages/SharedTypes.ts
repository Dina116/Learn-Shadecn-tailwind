import type { JSX, ReactNode } from "react";
import type { AUTH_ALL_PERMISSIONS, BILLER_PERMISSIONS, CASHBOX_PERMISSIONS, GOV_PERMISSIONS, MAS_PERMISSIONS } from "../domain/entities/_gen/GoAuth_pb";

export interface Columns<T> {
  key: keyof T | (string & {});
  label: string | React.ReactNode;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render?: (value: any, row: T, rowIndex: number) => React.ReactNode;
}
export interface MultiLevelHeaderTableColumn {
  field: string;
  header: string | (() => ReactNode);
  width?: string | number;
  children?: MultiLevelHeaderTableColumn[];
  render?: (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    row: any,
    rowIndex: number,
    isUpdating: boolean,
  ) => React.ReactNode;
}

export interface Identifiable {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}
export interface MultiLevelHeaderTableProps<T extends Identifiable> {
  columns: MultiLevelHeaderTableColumn[];
  data?: T[] | null;
  isLoading?: boolean;
  keyField?: keyof T;
  updatingRowKey?: string | number | null;
}

export type TableProbs<T> = {
  columns: Columns<T>[];
  data?: T[];
};

export type CellRenderResult =
  | React.ReactNode
  | {
      content: React.ReactNode;
      cellStyle?: React.CSSProperties;
    };

export const IcardGroupEnum = {
  docFiles: 1,
  collection: 2,
  reports: 3,
  lockups: 4,
  central: 5,
  other: 6,
} as const;

export type IcardGroupEnum =
  (typeof IcardGroupEnum)[keyof typeof IcardGroupEnum];

export type CardList = {
  title: string;
  subTitle?: string;
  icon: JSX.Element;
  onCardClick?: () => void;
  // oldpermission?: PerEnum;
  permission?:
    | keyof MAS_PERMISSIONS
    | keyof BILLER_PERMISSIONS
    | keyof GOV_PERMISSIONS
    | keyof CASHBOX_PERMISSIONS;
  permissionParent?: keyof AUTH_ALL_PERMISSIONS;
  cardGroup?: IcardGroupEnum;
  visitNumber?: number;
};
export const KeySearchEnum = {
  groupBy_Browsing: 1,
  groupBy_Alph: 2,
  groupBy_Group: 3,
} as const;

export type KeySearchEnum =
  (typeof KeySearchEnum)[keyof typeof KeySearchEnum];