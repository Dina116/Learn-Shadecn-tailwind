import { useState } from "react";
import type { InputFormData } from "./types";

export const useLogin = () => {
    const [data,setData] = useState<InputFormData | null>(null);
    const handleLogin = (formData: InputFormData) => {
        setData(formData);
        console.log("Login data submitted:", formData);
    };
    return { data, handleLogin };
}