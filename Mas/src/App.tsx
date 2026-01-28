import CustomerServiceScreen from "./pages/customerservices/CustomerServiceScreen";
import Layout from "./pages/home/header/Layout";
import HomeScreen from "./pages/home/HomeScreen";
import InquiriesScreen from "./pages/inquiries/InquiriesScreen";
import LoginScreen from "./pages/login/LoginScreen";
import { Route, Routes } from "react-router-dom";
import ReadingScreen from "./pages/Readings and Achievement/ReadingScreen";
import TreasuryScreen from "./pages/treasury/TreasuryScreen";
import SystemManagementScreen from "./pages/Readings and Achievement/systemmanagement/SystemManagementScreen";
import ScoutsScreen from "./pages/Readings and Achievement/systemmanagement/scouts/ScoutsScreen";
import UsersScreen from "./pages/Readings and Achievement/systemmanagement/users/UsersScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route element={<Layout />}>
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/search" element={<InquiriesScreen />} />
        <Route path="/support" element={<CustomerServiceScreen />} />
        <Route path="/readings" element={<ReadingScreen />}></Route>
        <Route path="/treasury" element={<TreasuryScreen />} />
        <Route path="/systemManagement" element={<SystemManagementScreen />} />
        <Route path="/scouts" element={<ScoutsScreen />} />
        <Route path="/users" element={<UsersScreen />} />
      </Route>
    </Routes>
  );
}

export default App;
