import type { ReactNode } from "react";

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
  data: T[] | null;
  isLoading?: boolean;
  keyField: keyof T;
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
