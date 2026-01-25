import { Route, Routes } from "react-router-dom";
import LoginScreen from "./pages/login/LoginScreen";
import HomeScreen from "./pages/home/HomeScreen";
import UserScreen from "./pages/users/UserScreen";
import AssignReportsScreen from "./pages/assignreports/AssignReportsScreen";
import ManageDepartmentScreen from "./pages/managedepartment/ManageDepartmentScreen";
import CompanyInfoScreen from "./pages/CompanyInfo/CompanyInfoScreen";
import Layout from "./pages/sidebar/Layout";

function App() {
  return (
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route element={<Layout />}>
          <Route path="/home" element={<HomeScreen />} />
          <Route path="/users" element={<UserScreen />} />
          <Route path="/assignreports" element={<AssignReportsScreen />} />
          <Route
            path="/managedepartment"
            element={<ManageDepartmentScreen />}
          />
          <Route path="/companyinfo" element={<CompanyInfoScreen />} />
        </Route>
      </Routes>
  );
}

export default App;
