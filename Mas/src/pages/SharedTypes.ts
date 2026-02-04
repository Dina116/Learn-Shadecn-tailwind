export interface Columns<T> {
  key: keyof T;
  label: string;
  className?: string;
  render?: (value: any, row: T, rowIndex: number) => React.ReactNode;
}
export type TableProbs<T> = {
  columns: Columns<T>[];
  data?: T[];
};
