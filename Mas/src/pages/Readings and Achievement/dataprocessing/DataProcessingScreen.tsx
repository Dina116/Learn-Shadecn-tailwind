import { useState, useMemo } from "react";
import SystemMaintenanceTabs from "../SystemMaintenanceTabs";
import { CollectingCardItems } from "./collecting/CollectingCardItems";
import { ReadingCardItems } from "./readings/ReadingCardItems";
import CardWithButton from "../systemmaintanance/readings/CardWithButton";
import Dialog from "./Dialog";
import useDialog from "../../../hooks/dataprocessing/useDialog";
import { FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export default function DataProcessingScreen() {
  const [tab, setTab] = useState(0);
  const collectingCards = useMemo(() => CollectingCardItems, []);
  const readingCards = useMemo(() => ReadingCardItems, []);

  const currentCards = tab === 0 ? collectingCards : readingCards;
  const navigate = useNavigate();
  const {
    openDialogId,
    dialogTitle,
    isDialogOpen,
    handleOpenDialog,
    handleCloseDialog,
    methods,
    handleFormSubmit,
    disabledFields,
    onFetchComplete,
    tableData,
    selectedRows,
    setSelectedRows,
  } = useDialog();

  const handleCardClick = (id: string, title: string) => {
    console.log(`Card clicked! ID: "${id}", Title: "${title}"`);

    const cardExists =
      readingCards.some((item) => item.id === id) ||
      collectingCards.some((item) => item.id === id);

    if (!cardExists) {
      console.error(`No card found for id: ${id}`);
      return;
    }
    switch (id) {
      case "edit_customer_reading":
      case "change_meter_status":
      case "request_previous_reading":
      case "edit_sir_notes":
      case "update_customer_invoices":
      case "add_invoice_collection":
      case "cancel_invoice_collection":
      case "cancel_supplier_invoice_collection":
      case "disable_receipt_posting":
        handleOpenDialog(id, title);
        break;
      case "add_group_invoice_collection":
        navigate("/collectbills");
        break;
      case "change_payment_method":
        navigate("/changepaymenttype");
        break;
      case "print_reading_reports":
        navigate("/printreadings");
        break;
      case "rearrange_routes":
        navigate("/rearrangementpaths");
        break;
      default:
        console.error(`No action defined for ${id}`);
    }
  };
  return (
    <div className="w-full h-screen flex bg-gray-100">
      <div className="flex-1">
        <div className="flex flex-col gap-5">
          <div className=" text-right pe-12 ">
            <h6
              className="text-2xl text-black font-extrabold mt-1
       inline-block                          
       bg-gradient-to-r from-orange-600 to-orange-400  
       bg-no-repeat          
       bg-[length:100%_3px]  
       bg-bottom"
            >
              معالجة البيانات
            </h6>
          </div>
          <SystemMaintenanceTabs value={tab} onChange={setTab} />
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            style={{ direction: "rtl" }}
          >
            {currentCards.map((item) => (
              <div key={item.id} className="w-full mx-auto">
                <CardWithButton
                  children={item.icon}
                  content={item.title}
                  onClick={() => handleCardClick(item.id, item.title)}
                />
              </div>
            ))}
          </div>
          {openDialogId && (
            <FormProvider {...methods}>
              <Dialog
                isDialogOpen={isDialogOpen}
                onSuccessfulSubmit={handleFormSubmit}
                handleCloseDialog={handleCloseDialog}
                onFetchComplete={onFetchComplete}
                disabledFields={disabledFields}
                id={openDialogId ?? ""}
                title={dialogTitle}
                tableData={tableData}
                selectedRows={selectedRows}
                setSelectedRows={setSelectedRows}
              />
            </FormProvider>
          )}
        </div>
      </div>
    </div>
  );
}
