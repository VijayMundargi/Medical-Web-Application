import axios from "axios";

const API_URL = "http://localhost:8080/api/auth"; // gateway route

export const loginRequest = async (email, password) => {
  return await axios.post(`${API_URL}/login`, {
    email,
    password,
  });
};
