import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigation = useNavigate();
  const handleUserNavigation = () => {
    navigation("/users");
  };
  const handleJobsNavigation = () => {
    navigation("/jobs");
  };
  return { handleUserNavigation, handleJobsNavigation };
}
