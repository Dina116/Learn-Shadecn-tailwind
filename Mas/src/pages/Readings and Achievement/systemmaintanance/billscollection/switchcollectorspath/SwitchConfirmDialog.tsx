import SharedDialog from "../../../../../componenet/shared/SharedDialog";
import SwitchInfoContent from "./SwitchInfoContent";
import type { WalkPath } from "./types";

type Props = {
  open: boolean;
  onClose: () => void;
  row: WalkPath | null;
  from: string;
  to: string;
};

export default function SwitchConfirmDialog({
  open,
  onClose,
  row,
  from,
  to,
}: Props) {
  if (!row) return null;

  return (
    <SharedDialog
      open={open}
      onClose={onClose}
      title="تأكيد"
      maxWidth="sm"
      secondaryAction={{
        text: "إلغاء",
        onClick: onClose,
      }}
      primaryAction={{
        text: "حفظ",
        onClick: () => {
          console.log("confirmed switch", row);
          onClose();
        },
      }}
    >
      <SwitchInfoContent
        title="هل أنت متأكد من نقل العهدة"
        bookNo={row.BOOK_NO}
        billGroup={row.BILLGROUP}
        walkNo={row.WALK_NO}
        labelFrom={from}
        labelTo={to}
      />
    </SharedDialog>
  );
}
