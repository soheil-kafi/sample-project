import axios from "axios";

export const BASE_URL = "https://685c58a0769de2bf085c7d9a.mockapi.io/users";
export const deleteUserById = async (id) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);
  return response;
};
export const editUserById = async (id, content) => {
  const response = await axios.put(`${BASE_URL}/${id}`, content);
  return response;
};
