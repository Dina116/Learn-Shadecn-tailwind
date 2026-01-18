import LoginForm from "./LoginForm";
import { useLogin } from "./useLogin";


export default function LoginScreen() {
      const { handleLogin } = useLogin();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 via-blue-400 to-blue-500">
      <LoginForm onSubmit={handleLogin} />
    </div>
  )
}
