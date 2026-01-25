import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";
import {useLoginStore } from "./useLoginStore";
import LoginImage from "./LoginImage";

export default function LoginScreen() {
 const handleLogin = useLoginStore((state) => state.handleLogin);
  return (
    <div className="flex flex-row min-h-screen bg-white">
      <LoginImage />
      <LoginForm onSubmit={handleLogin} />
      <Link to="/home" className="absolute top-4 right-4 text-white underline">
        Go to Home
      </Link>
    </div>
  );
}
