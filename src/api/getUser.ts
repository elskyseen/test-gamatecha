import { BASE_URL } from "@/utils/variable";
import axios from "axios";

export const getUser = async (token: string) => {
  const response = await axios.get(`${BASE_URL}/auth/me`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};
