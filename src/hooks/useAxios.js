import axios from "axios";

const BASE_URL = "https://fakestoreapi.com";

export const useAxios = axios.create({
    baseURL: BASE_URL,
});