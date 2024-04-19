import { useContext } from "react";
import { IsMobileContext } from "../MobileContext/IsMobileContext";

 
export const useMobile = () => {
    const isMobile=useContext(IsMobileContext);
  return isMobile;
}
