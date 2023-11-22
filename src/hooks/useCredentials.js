import { authContext } from "@/security/fb.login";
import { useContext } from "react";

export const useCredentials = () => {
  return useContext(authContext);
};
