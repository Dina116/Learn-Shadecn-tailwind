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
export interface selectItemData {
  name: string;
}
export type SelectProps = {
  label: string;
  selectItems?: { label: string; value: string }[];
  value?: string;
  onChange?: (value: string) => void;
};
export type LineProp = {
  lineName: string;
};
export type DialogProps = {
  btnName: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};
