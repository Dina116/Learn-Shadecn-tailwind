/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomerServiceScreen from "./pages/customerservices/CustomerServiceScreen";
import Layout from "./pages/Layout";
import HomeScreen from "./pages/home/HomeScreen";
import InquiriesScreen from "./pages/inquiries/InquiriesScreen";
import LoginScreen from "./pages/login/LoginScreen";
import { Route, Routes } from "react-router-dom";
import ReadingScreen from "./pages/Readings and Achievement/ReadingScreen";
import TreasuryScreen from "./pages/treasury/TreasuryScreen";
import SystemManagementScreen from "./pages/Readings and Achievement/systemmanagement/SystemManagementScreen";
import ScoutsScreen from "./pages/Readings and Achievement/systemmanagement/scouts/ScoutsScreen";
import UsersScreen from "./pages/Readings and Achievement/systemmanagement/users/UsersScreen";
import PortalPhonesScreen from "./pages/Readings and Achievement/systemmanagement/portalphones/PortalPhonesScreen";
import ConsumerActivitiesScreen from "./pages/Readings and Achievement/systemmanagement/consumeractivities/ConsumerActivitiesScreen";
import AccountingGroupsScreen from "./pages/Readings and Achievement/systemmanagement/accountinggroups/AccountingGroupsScreen";
import BellingSystemScreen from "./pages/Readings and Achievement/systemmanagement/bellingsystem/BellingSystemScreen";
import ReadingPathsScreen from "./pages/Readings and Achievement/systemmanagement/readingpaths/ReadingPathsScreen";
import DeviceProceduresScreen from "./pages/Readings and Achievement/systemmanagement/deviceprocedures/DeviceProceduresScreen";
import TreasuryInsideScreen from "./pages/Readings and Achievement/systemmanagement/treasuryinside/TreasuryInsideScreen";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import SystemMaintananceScreen from "./pages/Readings and Achievement/systemmaintanance/SystemMaintananceScreen";
import { Toaster } from "react-hot-toast";
import AddRemovePathsScreen from "./pages/Readings and Achievement/systemmaintanance/billscollection/addremovepaths/AddRemovePathsScreen";
import SwitchReadersPathsScreen from "./pages/Readings and Achievement/systemmaintanance/readings/switchreaderspaths/SwitchReadersPathsScreen";
import SwitchCollectorsPathScreen from "./pages/Readings and Achievement/systemmaintanance/billscollection/switchcollectorspath/SwitchCollectorsPathScreen";
import DataProcessingScreen from "./pages/Readings and Achievement/dataprocessing/DataProcessingScreen";
import CollectBills from "./pages/Readings and Achievement/dataprocessing/collecting/collectbills/CollectBills";
import ChangePaymentType from "./pages/Readings and Achievement/dataprocessing/collecting/changepaymentmethod/ChangePaymentMethod";
import PrintReadings from "./pages/Readings and Achievement/dataprocessing/readings/printreadings/PrintReadings";
import RearrangementPaths from "./pages/Readings and Achievement/dataprocessing/readings/rearrangementpaths/RearrangementPaths";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import CollectionsActivationScreen from "./pages/Readings and Achievement/collectionsactivationmanagement/CollectionsActivationScreen";
import MarketingPlanExecution from "./pages/Readings and Achievement/collectionsactivationmanagement/marketingplanexecution";
import ControlPanel from "./pages/Readings and Achievement/controlpanel";
import CollectedPulledPerGroup from "./pages/Readings and Achievement/controlpanel/operations/collectedPulledPerGroup";
import ReadingsPulled from "./pages/Readings and Achievement/controlpanel/operations/readingsPulled";
import CollectionPosting from "./pages/Readings and Achievement/controlpanel/operations/collectionPosting";
import ReadingsPosting from "./pages/Readings and Achievement/controlpanel/operations/readingPosting";
import CloseRWalk from "./pages/Readings and Achievement/controlpanel/operations/closeRWalk";
import CloseCWalk from "./pages/Readings and Achievement/controlpanel/operations/closeCWalk";
import PulledHistory from "./pages/Readings and Achievement/controlpanel/operations/pulledHistory";
import MoneyTransfeer from "./pages/Readings and Achievement/controlpanel/moneyTransfeer";
import PendingPosts from "./pages/Readings and Achievement/controlpanel/moneyTransfeer/pendingPosts/PendingPosts";
import PostHistory from "./pages/Readings and Achievement/controlpanel/moneyTransfeer/postHistory";
import { Tafqeet } from "./utils/tafqeet";
import { useHeaderTemplateApi } from "./api/Templates";
import Handlebars from "handlebars";
import { useEffect } from "react";
import HhPrepear from "./pages/Readings and Achievement/controlpanel/hhPrepear";

const queryClient = new QueryClient();

Handlebars.registerHelper("inc", (value) => parseInt(value, 10) + 1);
Handlebars.registerHelper(
  "sub",
  (value1, value2) => Number(value1 || 0) - Number(value2 || 0),
);
Handlebars.registerHelper("addAndFormat", (decimal: number, ...values) => {
  if (values && decimal) {
    values.pop();
    const sum: number = values.reduce((acc, val) => acc + (val || 0), 0);
    return Number(sum || 0).toFixed(decimal || 0);
  }
  return 0;
});

Handlebars.registerHelper("sum", (...values) => {
  values.pop();
  const sum: number = values.reduce((acc, val) => acc + (val || 0), 0);
  return Number(sum || 0);
});
Handlebars.registerHelper("times", function (n, block) {
  let accum = "";
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < n; ++i) accum += block.fn(this);
  return accum;
});
// Handlebars.registerHelper("loud", (str: any) => {
//   if (!str) return "";
//   return String(str).toUpperCase();
// });
Handlebars.registerHelper("loud", (key) => {
  if (key === "curDate") return new Date().toLocaleString();
});

Handlebars.registerHelper("CAN", (num) => {
  const arabicNumbers =
    "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669";
  const input = num == null ? "0" : String(num);
  return input.replace(/[0-9]/g, (d) => arabicNumbers[d]);
});

Handlebars.registerHelper("ArabicDateFunc", (date: string | undefined) => {
  if (date) {
    const dateAfterConvert = new Date(date || "").toLocaleDateString("ar-EG");
    const arabicNumbers =
      "\u0660\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669";
    // eslint-disable-next-line no-new-wrappers
    return new String(dateAfterConvert || 0).replace(
      /[0123456789]/g,
      (d) => arabicNumbers[Number(d)],
    );
  }
  return "";
});

Handlebars.registerHelper("greaterThan", (num1, num2) => !!Number(num1 > num2));

Handlebars.registerHelper("isEqualTo", (value, number) => value === number);

Handlebars.registerHelper("or", (op1, op2, op3?) => op1 || op2 || op3 || 0);

Handlebars.registerHelper("tafqeet", (number) => Tafqeet(number));

Handlebars.registerHelper("toFixed", (value, decimals) => {
  if (typeof value === "number" && value) {
    return value.toFixed(decimals);
  }
  return Number(value).toFixed(decimals);
});

Handlebars.registerHelper("subtract", (a, b) => {
  const numA = parseFloat(a);
  const numB = parseFloat(b);
  if (Number.isNaN(numA) || Number.isNaN(numB)) {
    return "";
  }
  return numA - numB;
});

function AppContent() {
  const { data: header } = useHeaderTemplateApi(true);
  useEffect(() => {
    if (header) {
      Handlebars.registerPartial("headerTemplate", header);
    }
  }, [header]);

  if (!header) return <div>Loading...</div>;
  console.log("header from AppContent", header);
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route element={<Layout />}>
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/search" element={<InquiriesScreen />} />
        <Route path="/support" element={<CustomerServiceScreen />} />
        <Route path="/treasury" element={<TreasuryScreen />} />
        <Route path="/readings" element={<ReadingScreen />}></Route>
        <Route path="/systemManagement" element={<SystemManagementScreen />}>
          <Route path="scouts" element={<ScoutsScreen />} />
          <Route path="users" element={<UsersScreen />} />
          <Route path="portalphones" element={<PortalPhonesScreen />} />
          <Route
            path="consumeractivities"
            element={<ConsumerActivitiesScreen />}
          />
          <Route path="accountinggroups" element={<AccountingGroupsScreen />} />
          <Route path="bellingsystem" element={<BellingSystemScreen />} />
          <Route path="readingpaths" element={<ReadingPathsScreen />} />
          <Route path="deviceprocedures" element={<DeviceProceduresScreen />} />
          <Route path="treasuryinside" element={<TreasuryInsideScreen />} />
        </Route>
        <Route
          path="/readings/systemMaintanance"
          element={<SystemMaintananceScreen />}
        />
        <Route
          path="/systemMaintanance/switchcollectorspath"
          element={<SwitchCollectorsPathScreen />}
        />
        <Route
          path="/systemMaintanance/addremovepaths"
          element={<AddRemovePathsScreen />}
        />
        <Route
          path="/systemMaintanance/switchReadersPathsScreen"
          element={<SwitchReadersPathsScreen />}
        />
        <Route
          path="/readings/dataProcessing"
          element={<DataProcessingScreen />}
        />
        <Route path="/collectbills" element={<CollectBills />} />
        <Route path="/changepaymenttype" element={<ChangePaymentType />} />
        <Route path="/printreadings" element={<PrintReadings />} />
        <Route path="/rearrangementpaths" element={<RearrangementPaths />} />
        <Route
          path="/readings/collectionsactivation"
          element={<CollectionsActivationScreen />}
        />
        <Route
          path="/readings/collectionsactivation/MarketingPlanExecution"
          element={<MarketingPlanExecution />}
        />
        <Route path="/readings/controlpanel" element={<ControlPanel />} />
        <Route
          path="/readings/controlpanel/collectedPulledPerGroup"
          element={<CollectedPulledPerGroup />}
        />
        <Route
          path="/readings/controlpanel/readingsPulled"
          element={<ReadingsPulled />}
        />
        <Route
          path="/readings/controlpanel/collectionPosting"
          element={<CollectionPosting />}
        />
        <Route
          path="/readings/controlpanel/readingsPosting"
          element={<ReadingsPosting />}
        />
        <Route
          path="/readings/controlpanel/closeRWalk"
          element={<CloseRWalk />}
        />
        <Route
          path="/readings/controlpanel/closeCWalk"
          element={<CloseCWalk />}
        />
        <Route
          path="/readings/controlpanel/pulledHistory"
          element={<PulledHistory />}
        />
        <Route
          path="/readings/controlpanel/moneyTransfeer"
          element={<MoneyTransfeer />}
        />
        <Route
          path="/readings/controlpanel/moneyTransfeer/pendingPosts"
          element={<PendingPosts />}
        />
        <Route
          path="/readings/controlpanel/moneyTransfeer/postHistory/:empId"
          element={<PostHistory />}
        />
        <Route
          path="/readings/controlpanel/hhPrepear"
          element={<HhPrepear />}
        />
      </Route>
    </Routes>
  );
}
function App() {
  console.log(import.meta.env);
  return (
    <>
      <Toaster position="top-center" />
      <QueryClientProvider client={queryClient}>
        <AppContent />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </>
  );
}

export default App;
