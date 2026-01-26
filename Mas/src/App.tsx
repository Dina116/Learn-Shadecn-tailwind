import CustomerServiceScreen from "./pages/customerservices/CustomerServiceScreen";
import Layout from "./pages/home/header/Layout";
import HomeScreen from "./pages/home/HomeScreen";
import InquiriesScreen from "./pages/inquiries/InquiriesScreen";
import LoginScreen from "./pages/login/LoginScreen";
import { Route, Routes } from "react-router-dom";
import ReadingScreen from "./pages/Readings and Achievement/ReadingScreen";
import TreasuryScreen from "./pages/treasury/TreasuryScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route element={<Layout />}>
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/search" element={<InquiriesScreen />} />
        <Route path="/support" element={<CustomerServiceScreen />} />
        <Route path="/readings" element={<ReadingScreen />} />
        <Route path="/treasury" element={<TreasuryScreen />} />
      </Route>
    </Routes>
  );
}

export default App;
