import SharedTable from "../../../../componenet/shared/SharedTable";
import { useCustomerWalks } from "../../../../hooks/systemmanagement/bellingsystem/customerwalks/useCustomerWalks";
import { useUnassignedWalks } from "../../../../hooks/systemmanagement/bellingsystem/customerwalks/useUnassignedWalks";
import { createColumns } from "./ColumnNames";

import type { BellingTableProps, BellingTypes } from "./types";

export default function BellingTable({ loadType, groupId }: BellingTableProps) {
  console.log(
    "4. BellingTable received -> loadType:",
    loadType,
    "groupId:",
    groupId,
  );

  const {
    walks: groupWalks,
    collectors,
    isLoading: isGroupLoading,
  } = useCustomerWalks(groupId, loadType === "byGroup");

  const { data: unassignedWalksData, isLoading: isUnassignedLoading } =
    useUnassignedWalks(loadType === "unassigned");
  const col = createColumns(collectors);

  const walks = loadType === "byGroup" ? groupWalks : unassignedWalksData;
  const isLoading =
    (loadType === "byGroup" && isGroupLoading) ||
    (loadType === "unassigned" && isUnassignedLoading);

  if (isLoading) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        ...جاري تحميل البيانات
      </div>
    );
  }
  return <SharedTable<BellingTypes> columns={col} data={walks || []} />;
}
