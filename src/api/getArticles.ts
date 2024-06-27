import { BASE_URL } from "@/utils/variable";
import axios from "axios";

export const getArticles = async (token: string, page: number) => {
  const response = await axios.get(`${BASE_URL}/articles?page=${page}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
