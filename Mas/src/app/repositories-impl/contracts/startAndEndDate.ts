export interface StartEndDate {
  startDate?: Date | string;
  endDate?: Date | string;
}

export interface StartEndDateBilng extends StartEndDate {
  bilng_date?: Date | string;
}
