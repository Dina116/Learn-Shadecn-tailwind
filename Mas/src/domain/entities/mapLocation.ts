import { LocationSource } from '@/app/repositories-impl/contracts/locationSource';

export interface MAPLOCATION {
  BookNo: string;
  WalkNo: string;
  Surname: string;
  ReachDate: string | null;
  Lat: number;
  Lng: number;
  IsReached: boolean | null;
  Source: LocationSource;
  Accurecy: number | null;
  DeviceId: string;
  EmpId: number | null;
  StampUser: string;
  StampDate: string;
  Key: string;
  Notes: string;
  LocationDiff: number | null;
  Distance: number;
  LastActivity: string | null;
}
