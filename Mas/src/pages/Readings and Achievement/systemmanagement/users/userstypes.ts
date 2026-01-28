import type z from "zod";
import type { UsersSchema } from "./UsersSchema";
export type userFormTypes = z.infer<typeof UsersSchema>;
export type usersTableProps = {
  data: userFormTypes[];
  onEdit?: (row: userFormTypes, rowIndex: number) => void;
  onDelete?: (row: userFormTypes, rowIndex: number) => void;
};
