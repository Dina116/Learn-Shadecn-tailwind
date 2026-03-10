export interface ACTIONS {
  id: number;
  fullName: string;
}

export interface UPDATEACTIONDEVICEREQ {
  data: ACTIONS;
  id: number;
}

export interface DELETEACTIONDEVICEREQ {
  id: string;
}
