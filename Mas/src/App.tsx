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

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <Toaster position="top-center" />
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route element={<Layout />}>
            <Route path="/home" element={<HomeScreen />} />
            <Route path="/search" element={<InquiriesScreen />} />
            <Route path="/support" element={<CustomerServiceScreen />} />
            <Route path="/treasury" element={<TreasuryScreen />} />
            <Route path="/readings" element={<ReadingScreen />}></Route>
            <Route
              path="/systemManagement"
              element={<SystemManagementScreen />}
            >
              <Route path="scouts" element={<ScoutsScreen />} />
              <Route path="users" element={<UsersScreen />} />
              <Route path="portalphones" element={<PortalPhonesScreen />} />
              <Route
                path="consumeractivities"
                element={<ConsumerActivitiesScreen />}
              />
              <Route
                path="accountinggroups"
                element={<AccountingGroupsScreen />}
              />
              <Route path="bellingsystem" element={<BellingSystemScreen />} />
              <Route path="readingpaths" element={<ReadingPathsScreen />} />
              <Route
                path="deviceprocedures"
                element={<DeviceProceduresScreen />}
              />
              <Route path="treasuryinside" element={<TreasuryInsideScreen />} />
            </Route>
            <Route
              path="/systemMaintanance"
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
            <Route path="/dataProcessing" element={<DataProcessingScreen />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
