import { useState, useMemo } from "react";
import SystemMaintenanceTabs from "../SystemMaintenanceTabs";
import { CollectingCardItems } from "./collecting/CollectingCardItems";
import { ReadingCardItems } from "./readings/ReadingCardItems";
import CardWithButton from "../systemmaintanance/readings/CardWithButton";
import Dialog from "./Dialog";
import useDialog from "../../../hooks/dataprocessing/useDialog";
import { useForm } from "react-hook-form";
import type { formInputDataType } from "./types";
import { zodResolver } from "@hookform/resolvers/zod";
import { formSchema } from "./form/formSchema";
import { useNavigate } from "react-router-dom";

function toInputDateString(date: Date): string {
  return date.toISOString().split("T")[0];
}
export default function DataProcessingScreen() {
  const [openDialogId, setOpenDialogId] = useState<string | null>(null);
  const [dialogTitle, setDialogTitle] = useState<string>("");
  const { formRef, handleFormSubmit, handleSave } = useDialog();
  const {
    control,
    formState: { errors },
    watch,
    handleSubmit,
    reset,
  } = useForm<formInputDataType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      custkey: "",
      comment: "",
      payment_no: "",
      chequeBank: "",
      chequeNo: "",
      discount: "",
      discountDocumentNo: "",
      collection_id: "",
      MODIFIED_AVRG_CONSUMP: "",
      reading_id: "",
      name: "",
      operationCode: "",
      invoiceAmount: "",
      collectedAmount: "",
      paymentMethod: "",
      paymentType: "",
      collector: "",
      collectionType: "",
      current_balance: "",
      sub_number: "",
      avarege: "",
      consumption: "",
      note: "",
      book: "",
      walk: "",
      new_meter_type: "",
      meter_no: "",
      description: "",
      x_coordinate: "",
      y_coordinate: "",
      oldcustkey: 0,
      oldreading: 0,
      currentreading: 0,
      startDate: toInputDateString(new Date()),
      endDate: toInputDateString(new Date()),
      date: toInputDateString(new Date()),
      collectionDate: toInputDateString(new Date()),
      cycleDate: toInputDateString(new Date()),
      oldreadingdate: toInputDateString(new Date()),
      includeInvoice: false,
      networkCollection: false,
      enableInstallment: false,
      preventStatusEdit: false,
      searchByInvoice: false,
      is_invoiced: false,
      disable_mobile_edit: false,
      enableDiscount: false,
    },
  });
  const [tab, setTab] = useState(0);
  const collectingCards = useMemo(() => CollectingCardItems, []);
  const readingCards = useMemo(() => ReadingCardItems, []);
  const navigate = useNavigate();
  const handleCardClick = (id: string, title: string) => {
    console.log(`Card clicked! ID: "${id}", Title: "${title}"`);

    const clickedreadingItem = readingCards.find((item) => item.id === id);

    const clickedcollectingItem = collectingCards.find(
      (item) => item.id === id,
    );

    if (!clickedreadingItem && !clickedcollectingItem) {
      console.error(`No card found for id: ${id}`);
      return;
    }
    switch (id) {
      case "edit_customer_reading":
      case "change_meter_status":
      case "request_previous_reading":
      case "edit_sir_notes":
        setOpenDialogId(id);
        setDialogTitle(clickedreadingItem?.title ?? "");
        break;
      case "update_customer_invoices":
      case "add_invoice_collection":
      case "cancel_invoice_collection":
      case "cancel_supplier_invoice_collection":
      case "disable_receipt_posting":
        setOpenDialogId(id);
        setDialogTitle(clickedcollectingItem?.title ?? "");
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
  const handleCloseDialog = () => {
    setOpenDialogId(null);
    reset();
  };
  const currentCards = tab === 0 ? collectingCards : readingCards;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onFormError = (errors: any) => {
    console.error("ZOD VALIDATION FAILED! Here are the errors:", errors);
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
            <Dialog
              isDialogOpen={openDialogId !== null}
              formRef={formRef}
              handleFormSubmit={handleSubmit(
                (data) => handleFormSubmit(data, openDialogId),
                onFormError,
              )}
              handleSave={handleSave}
              id={openDialogId ?? ""}
              title={dialogTitle}
              handleCloseDialog={handleCloseDialog}
              control={control}
              errors={errors}
              watch={watch}
            />
          )}
        </div>
      </div>
    </div>
  );
}
