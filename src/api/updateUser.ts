import { BASE_URL } from "@/utils/variable";
import axios from "axios";

export const updateUser = async (
  token: string,
  id: number,
  updateData: any
) => {
  const response = await axios.patch(`${BASE_URL}/users/${id}`, updateData, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return true;
};
