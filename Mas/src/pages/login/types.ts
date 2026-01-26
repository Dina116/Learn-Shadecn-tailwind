export type InputFormData = {
  username: string;
  password: string;
};
export interface LoginFormProps {
  onSubmit: (data: InputFormData) => void;
}
export type LoginState = {
  data: InputFormData | null;
  handleLogin: (formData: InputFormData) => void;
};