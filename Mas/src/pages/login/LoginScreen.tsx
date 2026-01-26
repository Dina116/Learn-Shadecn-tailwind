import { Box, Typography } from "@mui/material";
import LoginForm from "./LoginForm";
import { useLoginStore } from "./useLoginStore";

export default function LoginScreen() {
  const handleLogin = useLoginStore((state) => state.handleLogin);
  return (
    <Box className="min-h-screen w-full flex items-center justify-center bg-[radial-gradient(circle,_#0086cf_0%,_#005a8e_100%)] p-4">
      <div className="flex flex-col md:flex-row-reverse items-center gap-20 max-w-5xl w-full justify-center">
        <div className="text-white text-center md:text-right">
          <div className="relative inline-block mb-2">
            <Typography
              variant="h4"
              fontWeight="bold"
              className="tracking-wide"
            >
              (MAS) ماس
            </Typography>
            <div className="absolute -bottom-2 right-0 h-[4px] w-full bg-gradient-to-l from-[#f05a28] via-[#f05a28] to-transparent rounded-full shadow-lg"></div>
          </div>
          <Typography variant="h6" className="mt-4 opacity-90 text-sm">
            منظومة إدارة القراء والمحصلين
          </Typography>
        </div>
        <LoginForm onSubmit={handleLogin} />
      </div>

      <div
        className="absolute bottom-4 right-4 text-white/70 text-xs text-right"
        dir="rtl"
      >
        جميع الحقوق محفوظة لشركة مصر للنظم المتطورة © V2.76.4
      </div>
    </Box>
  );
}
