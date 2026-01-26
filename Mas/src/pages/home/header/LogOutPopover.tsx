import { useNavigate } from "react-router-dom";
import PersonSVG from "./PersonSVG";
import SharedPopover from "../../../componenet/shared/SharedPopover";

export default function LogOutPopover() {
  const navigation = useNavigate();
  const handleNavigation = () => {
    navigation("/");
  };
  return (
    <SharedPopover
      onClick={handleNavigation}
      children={<PersonSVG />}
      btnname="تسجيل الخروج"
    />
  );
}