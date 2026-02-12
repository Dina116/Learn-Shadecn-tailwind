import { useState } from "react";
import SystemMaintenanceTabs from "../SystemMaintenanceTabs";
import ReadingCards from "./readings/ReadingCards";
import { useQuery } from "@tanstack/react-query";
import { getBillGroups } from "./api/SystemApi";
import UploadCards from "./billscollection/UploadCards";
import ReadingDialog from "./readings/ReadingDialog";
import { cardReadingsItems } from "./readings/CardReadingsItems";
import { useNavigate } from "react-router-dom";

export default function SystemMaintananceScreen() {
  const [openDialogId, setOpenDialogId] = useState<string | null>(null);
  const [dialogTitle, setDialogTitle] = useState<string>("");

  const [tab, setTab] = useState(0);
  const navigate = useNavigate();

  const { data } = useQuery({
    queryKey: ["billgroups"],
    queryFn: getBillGroups,
  });

  const handleCardClick = (id: string) => {
    const clickedItem = cardReadingsItems.find((item) => item.id === id);

    if (!clickedItem) {
      console.error(`No card found for id: ${id}`);
      return;
    }
    switch (id) {
      case "reverse_readings":
      case "cancel_readings_preparation":
      case "lock_reading_collection_unit":
      case "reprepare_readind_closed_path":
      case "reopen_reading_group_collection":
      case "reopen_reading_closed_paths":
        setOpenDialogId(id);
        setDialogTitle(clickedItem.content);
        break;
      case "switch_scouts_path":
        navigate("/systemMaintanance/switchReadersPathsScreen");
        break;
      default:
        console.error(`No action defined for ${id}`);
    }
  };
  const handleCloseDialog = () => setOpenDialogId(null);

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
              صيانة النظام
            </h6>
          </div>
          <SystemMaintenanceTabs value={tab} onChange={setTab} />
          {tab === 0 && <UploadCards data={data ?? []} />}
          
          {tab === 1 && (
            <>
              <ReadingCards
                items={cardReadingsItems}
                onCardClick={handleCardClick}
              />
              {openDialogId && (
                <ReadingDialog
                  data={data ?? []}
                  id={openDialogId}
                  isDialogOpen={true}
                  handleCloseDialog={handleCloseDialog}
                  title={dialogTitle}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
