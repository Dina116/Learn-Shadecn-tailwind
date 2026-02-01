import type z from "zod";
import type { Schema } from "./Schema";

export type ConsumerTypes = z.infer<typeof Schema>;
export type ConsumerTableProps = {
  data: ConsumerTypes[];
};
