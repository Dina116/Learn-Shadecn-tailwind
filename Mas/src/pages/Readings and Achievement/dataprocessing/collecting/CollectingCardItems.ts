import {
  cancelIcon,
  highlightOffIcon,
  receiptIcon,
  signalCellularOffIcon,
  syncIcon,
  tableViewIcon,
} from "../../../../componenet/CardsIcons";

export const CollectingCardItems = [
  {
    id: "update_customer_invoices",
    title: "تحديث فواتير من قاعدة بيانات الفواتير لعميل",
    icon: syncIcon,
  },
  {
    id: "add_group_invoice_collection",
    title: "ادخال تحصيل مجموعة فواتير",
    icon: tableViewIcon,
  },
  {
    id: "add_invoice_collection",
    title: "ادخال تحصيل فاتورة",
    icon: receiptIcon,
  },
  {
    id: "cancel_invoice_collection",
    title: "الغاء تحصيل فاتورة",
    icon: highlightOffIcon,
  },
  {
    id: "change_payment_method",
    title: "تغيير طريقة الدفع",
    icon: syncIcon,
  },
  {
    id: "cancel_supplier_invoice_collection",
    title: "الغاء تحصيل فاتورة موردة",
    icon: cancelIcon,
  },
  {
    id: "disable_receipt_posting",
    title: "تعطيل ترحيل إيصال",
    icon: signalCellularOffIcon,
  },
];
