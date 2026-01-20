export interface Columns<T extends Record<string, any>> {
  key: string;
  label: string;
  className?: string;
  render?: (value: T[keyof T], row: T) => React.ReactNode;
}
export type TableProbs<T extends Record<string, any>> = {
  columns: Columns<T>[];
  data?: T[];
};
export interface selectItemData {
  name: string;
}
export type SelectProps = {
  label: string;
  selectItems?: string[];
};
export type LineProp = {
  lineName: string;
};
export type DialogProps = {
  btnName: string;
  title: string;
  children: React.ReactNode;
  className?:string
};