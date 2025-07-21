import axios, { AxiosRequestConfig } from "axios";
const RAWG_API_KEY = import.meta.env.VITE_RAWG_API_KEY;

export interface FetchResponse<T> {
  count: number;
  results: T[];
}

//------------------------- APIClient Class -------------------------
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: RAWG_API_KEY,
  },
});

class APIClient<T> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = (config: AxiosRequestConfig) =>{
    return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then((res) => res.data);
  }
}

export default APIClient;
