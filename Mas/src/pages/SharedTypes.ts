export interface Columns<T> {
  key: keyof T | (string & {});
  label: string | React.ReactNode;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render?: (value: any, row: T, rowIndex: number) => React.ReactNode;
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
