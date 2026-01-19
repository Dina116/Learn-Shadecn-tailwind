export type InputFormData = {
  username: string;
  password: string;
};
export interface LoginFormProps {
  onSubmit: (data: InputFormData) => void;
}