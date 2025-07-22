import axios, { AxiosResponse } from "axios";

export const BASE_URL = "https://685c58a0769de2bf085c7d9a.mockapi.io/users";
export const deleteUserById = async (id: number) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response;
};
export const editUserById = async (id: number, content: any) => {
  const response = await axios.put(`${BASE_URL}/${id}`, content);
  return response;
};
export const addUser = async (content: any): Promise<AxiosResponse> => {
  const response = await axios.post(BASE_URL, content);
  return response;
};
