import { BASE_URL } from "@/utils/variable";
import axios from "axios";

export const getAllUser = async (token: string) => {
  const response = await axios.get(`${BASE_URL}/users`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
