import { Route, Routes } from "react-router-dom";
import LoginScreen from "./pages/login/LoginScreen";
import HomeScreen from "./pages/home/HomeScreen";
import UserScreen from "./pages/users/UserScreen";
import JobsScreen from "./pages/jobs/JobsScreen";
import Navbar from "./pages/home/header/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/home" element={<HomeScreen />} />
        <Route path="/jobs" element={<JobsScreen />} />
        <Route path="/users" element={<UserScreen />} />
      </Routes>
    </>
  );
}

export default App;
