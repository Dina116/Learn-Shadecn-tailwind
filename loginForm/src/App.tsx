import { Route, Routes } from "react-router-dom";
import LoginScreen from "./pages/login/LoginScreen";
import HomeScreen from "./pages/home/HomeScreen";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginScreen />} />
      <Route path="/home" element={<HomeScreen />} />
    </Routes>
  );
}

export default App;
