import type { TotalSummary } from "./useMoneyTransfer";

interface Iprops {
  naqdySummary: TotalSummary[];
  notNaqdySummary: TotalSummary[];
  totalAllSummary: TotalSummary;
}
export default function SummaryTable({
  naqdySummary,
  notNaqdySummary,
  totalAllSummary,
}: Iprops) {
  return (
    <div className="border-1 w-full border-dotted border-slate-300 p-3">
      <div className="flex flex-row justify-end">
        <h3>ملخص</h3>
      </div>

      <table className="table-style w-full">
        <thead>
          <tr className="print-summary-row bg-primary-darker text-center text-white">
            <td>طريقة الدفع</td>
            <td>المنطقة</td>
            <td>العدد</td>
            <td>القيمة</td>
            <td>رسم تحصيل 1</td>
            <td>رسم تحصيل 2</td>
            <td>رسم تحصيل 3</td>
            <td>استقطاعات</td>
            <td>صافي الاجمالي</td>
          </tr>
        </thead>
        <tbody>
          <tr className="warning print-summary-row">
            <td
              colSpan={9}
              className="border-2 border-solid bg-primary-main text-center font-dinbold text-white"
            >
              النــقـــدي
            </td>
          </tr>

          {naqdySummary.map((naqdy, index) => (
            <tr
              key={`${index + 1}`}
              className={`text-center font-dinbold ${
                naqdy.BILLGROUP === "" ? "bg-yellow-400" : "bg-white"
              }`}
            >
              <td dir="ltr">{naqdy?.PAYMENT_METHOD}</td>
              <td dir="ltr">
                {naqdy.BILLGROUP ? naqdy.BILLGROUP : "الاجمالي"}
              </td>
              <td dir="ltr">{naqdy?.COLLECTED_COUNT || 0}</td>
              <td dir="ltr">{naqdy?.COLLECTED_AMOUNT?.toFixed(2) || 0}</td>
              <td dir="ltr">{naqdy?.RECEIPT_CHARGE1?.toFixed(2) || 0}</td>
              <td dir="ltr">{naqdy?.RECEIPT_CHARGE2?.toFixed(2) || 0}</td>
              <td dir="ltr">{naqdy?.RECEIPT_CHARGE3?.toFixed(2) || 0}</td>
              <td dir="ltr">{naqdy?.DISCOUNT?.toFixed(2) || 0}</td>
              <td dir="ltr">
                {(
                  (naqdy?.COLLECTED_AMOUNT || 0) +
                  (naqdy?.RECEIPT_CHARGE1 || 0) +
                  (naqdy?.RECEIPT_CHARGE2 || 0) +
                  (naqdy?.RECEIPT_CHARGE3 || 0)
                )?.toFixed(2)}
              </td>
            </tr>
          ))}

          <tr className="warning print-summary-row">
            <td
              colSpan={9}
              className=" bg-primary-main text-center font-dinbold text-white"
            >
              غير نقدي
            </td>
          </tr>
          {notNaqdySummary.map((notNaqdy, index) => (
            <tr
              key={`${index + 1}`}
              className={`text-center font-dinbold ${
                notNaqdy.BILLGROUP === "" ? "bg-yellow-400" : "bg-white"
              }`}
            >
              <td dir="ltr">{notNaqdy?.PAYMENT_METHOD}</td>
              <td dir="ltr">
                {notNaqdy.BILLGROUP ? notNaqdy?.BILLGROUP : "الاجمالي"}
              </td>
              <td dir="ltr">{notNaqdy?.COLLECTED_COUNT || 0}</td>
              <td dir="ltr">{notNaqdy?.COLLECTED_AMOUNT?.toFixed(2) || 0}</td>
              <td dir="ltr">{notNaqdy?.RECEIPT_CHARGE1?.toFixed(2) || 0}</td>
              <td dir="ltr">{notNaqdy?.RECEIPT_CHARGE2?.toFixed(2) || 0}</td>
              <td dir="ltr">{notNaqdy?.RECEIPT_CHARGE3?.toFixed(2) || 0}</td>
              <td dir="ltr">{notNaqdy?.DISCOUNT?.toFixed(2) || 0}</td>
              <td dir="ltr">
                {(
                  (notNaqdy?.COLLECTED_AMOUNT || 0) +
                  (notNaqdy?.RECEIPT_CHARGE1 || 0) +
                  (notNaqdy?.RECEIPT_CHARGE2 || 0) +
                  (notNaqdy?.RECEIPT_CHARGE3 || 0)
                )?.toFixed(2)}
              </td>
            </tr>
          ))}
          <tr className="bg-secondary-main text-center font-dinbold text-white">
            <td colSpan={2}>الاجمالي</td>
            <td dir="ltr">{totalAllSummary?.COLLECTED_COUNT || 0}</td>
            <td dir="ltr">
              {totalAllSummary?.COLLECTED_AMOUNT?.toFixed(2) || 0}
            </td>
            <td dir="ltr">
              {totalAllSummary?.RECEIPT_CHARGE1?.toFixed(2) || 0}
            </td>
            <td dir="ltr">
              {totalAllSummary?.RECEIPT_CHARGE2?.toFixed(2) || 0}
            </td>
            <td dir="ltr">
              {totalAllSummary?.RECEIPT_CHARGE3?.toFixed(2) || 0}
            </td>
            <td dir="ltr">{totalAllSummary?.DISCOUNT}</td>
            <td dir="ltr">
              {(
                (totalAllSummary?.COLLECTED_AMOUNT || 0) +
                (totalAllSummary?.RECEIPT_CHARGE1 || 0) +
                (totalAllSummary?.RECEIPT_CHARGE2 || 0) +
                (totalAllSummary?.RECEIPT_CHARGE3 || 0)
              )?.toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
