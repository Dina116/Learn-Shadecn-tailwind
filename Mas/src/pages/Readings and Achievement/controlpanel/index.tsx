import { useState } from "react";
import { Toaster } from "react-hot-toast";
import { OperationsCardItems } from "./operations/OperationsCardItems";
import { PrepareCardItems } from "./prepareOperations/PrepareCardItems";
import { DeviceCardItems } from "./hhDevices/DeviceCardItems";
import { ExternalCardItems } from "./externalOperations/ExternalCardItems";
import PanelTabs from "./PanelTabs";
import { IconButton, Typography } from "@mui/material";
import RefreshIcon from "@mui/icons-material/Refresh";
// import MultiLevelHeaderTable from "../../../componenet/shared/MultiLevelHeaderTable";
// import { newTableColumns } from "./newTableColumns";
import OutlinedCard from "../../../componenet/shared/OutlinedCard";
import MasPageHeader from "../../../componenet/header/MasPageHeader";
import { useNavigate } from "react-router-dom";
import MultiLevelHeaderTable from "../../../componenet/shared/MultiLevelHeaderTable";
import type { NewDataType } from "./types";
import { newTableColumns } from "./newTableColumns";

export default function ControlPanel() {
  // const [enable, setEnable] = useState<boolean>(true);
  const navigate = useNavigate();
  const [tab, setTab] = useState<0 | 1 | 2 | 3>(0);
  const tabsMap = [
    OperationsCardItems,
    PrepareCardItems,
    DeviceCardItems,
    ExternalCardItems,
  ];
  const currentCards = tabsMap[tab] || [];
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleCardClick = (cardItem: any) => {
    console.log(`Navigating to: ${cardItem.path}`);
    navigate(cardItem.path);
  };
  const fakeData: NewDataType[] = [];
  // const isLoading = false;
  return (
    <div className="w-full h-screen flex bg-gray-100">
      <div className="flex-1 ps-2 pe-2">
        <Toaster position="bottom-center" />
        <div className="flex flex-col gap-5">
          <MasPageHeader title="  لوحة التحكم الرئيسية" />
          <PanelTabs value={tab} onChange={setTab} />
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            style={{ direction: "rtl" }}
          >
            {currentCards.map((item) => (
              <div key={item.id} className="w-full mx-auto">
                <OutlinedCard
                  children={item.icon}
                  content={item.title}
                  subTitle={item.subTitle}
                  onClick={() => handleCardClick(item)}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-end gap-2">
            <div className="flex justify-end">
              <div
                className="inline-flex items-center justify-start gap-2 bg-white px-3 py-1.5 rounded-md shadow-sm w-1/6"
                dir="rtl"
              >
                <Typography
                  sx={{
                    fontSize: "0.99rem",
                    fontWeight: "bold",
                    direction: "rtl",
                  }}
                >
                  حالة المجموعات المفتوحة
                </Typography>
                <IconButton
                  //   onClick={() => setEnable(true)}
                  sx={{
                    width: 28,
                    height: 28,
                    backgroundColor: "#e5e7eb",
                    color: "#1565a9",
                    "&:hover": {
                      backgroundColor: "#d1d5db",
                    },
                  }}
                  size="small"
                >
                  <RefreshIcon sx={{ fontSize: 16 }} />
                </IconButton>
              </div>
            </div>
            <MultiLevelHeaderTable<NewDataType>
              columns={newTableColumns}
              data={fakeData || []}
              // isLoading={isDataLoading}
              keyField="group"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
