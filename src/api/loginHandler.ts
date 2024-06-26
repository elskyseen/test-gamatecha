import { BASE_URL } from "@/utils/variable";
import axios from "axios";

export const loginHandler = async (username: string, password: string) => {
  const response = await axios.post(`${BASE_URL}/auth/login`, {
    username,
    password,
  });

  return {
    refresh: response.data.refresh,
    access: response.data.access,
  };
};
