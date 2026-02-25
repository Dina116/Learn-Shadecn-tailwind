import CardWithButton from "../systemmaintanance/readings/CardWithButton";
import { CardItems } from "./CardItems";
import { useCollectionsActivation } from "./api/useCollectionsActivation";
import { FormProvider } from "react-hook-form";
import Dialog from "./form/Dialog";

export default function CollectionsActivationScreen() {
  const {
    openDialogId,
    dialogTitle,
    handleCloseDialog,
    isDialogOpen,
    methods,
    handleFormSubmit,
    handleCardClick,
  } = useCollectionsActivation();
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
              تنشيط التحصيل
            </h6>
          </div>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            style={{ direction: "rtl" }}
          >
            {CardItems.map((item) => (
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
                id={openDialogId ?? ""}
                title={dialogTitle}
              />
            </FormProvider>
          )}
        </div>
      </div>
    </div>
  );
}
