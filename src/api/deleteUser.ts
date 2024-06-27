import { BASE_URL } from "@/utils/variable";
import axios from "axios";

export const deleteUser = async (token: string, id: number) => {
  const response = await axios.delete(`${BASE_URL}/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return true;
};
