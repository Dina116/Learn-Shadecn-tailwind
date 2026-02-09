import SharedTable from "../../../../componenet/shared/SharedTable";
import { useReadingWalks } from "../../../../hooks/systemmanagement/readingpaths/readingwalks/useReadingWalks";
import { useUnassignedMeterWalks } from "../../../../hooks/systemmanagement/readingpaths/readingwalks/useunassignedMeterWalks";
import { createColumns } from "./ColumnNames";

import type { ReadingTableProps, ReadingTypes } from "./types";

export default function ReadingTable({ loadType, groupId }: ReadingTableProps) {
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
  } = useReadingWalks(groupId, loadType === "byGroup");

  const { data: unassignedWalksData, isLoading: isUnassignedLoading } =
    useUnassignedMeterWalks(loadType === "unassigned");
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
  return <SharedTable<ReadingTypes> columns={col} data={walks || []} />;
}
