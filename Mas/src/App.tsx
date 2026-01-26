import Layout from "./pages/home/header/Layout";
import HomeScreen from "./pages/home/HomeScreen";
import LoginScreen from "./pages/login/LoginScreen";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route element={<Layout />}>
        <Route path="/home" element={<HomeScreen />} />
        {/* <Route path="/users" element={<UserScreen />} />
        <Route path="/jobs" element={<JobsScreen />} />
        <Route path="/assignreports" element={<AssignReportsScreen />} />
        <Route path="/managedepartment" element={<ManageDepartmentScreen />} />
        <Route path="/companyinfo" element={<CompanyInfoScreen />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
