import { BILL } from './bill';

export interface ISEARCHITEM {
  custkey?: string;
  surname?: string;
  oldKey?: string;
  propRef?: string;
  address?: string;
  meterRef?: string;
  billgroup?: string;
  bookNo?: string;
  walkNo?: string;
  amountCollected?: number;
  clBlnce?: number;
  billsList?: BILL[];
  bilingDate?: string | null;
  crReading?: number;
  readingDate?: string | null;
  readingNoteDesc?: string;
  readingDesc?:string
  readBy?: string;
  readingNote?: number;
  modifiedAvgConsump?: number;
}
