import type z from "zod";
import { portalSchema } from "./portalSchema";

export type PortalPhonesTypes = z.infer<typeof portalSchema>;
export type PortalTableProps = {
  data: PortalPhonesTypes[];
  onEdit?: (row: PortalPhonesTypes, rowIndex: number) => void;
  onDelete?: (row: PortalPhonesTypes, rowIndex: number) => void;
};
export type EditPortalDialogProps = {
  rowdata: PortalPhonesTypes;
  onSubmit: (data: PortalPhonesTypes) => void;
};
