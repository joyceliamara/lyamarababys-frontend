import axios from "axios";
import { redirect } from "next/navigation";
// @ts-ignore
import http from "axios/unsafe/adapters/http.js";

const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
});

request.defaults.adapter = http;

request.interceptors.request.use((config) => {
  if (isServer) {
    const { cookies } = require("next/headers");

    const token = cookies().get("token");

    if (token) {
      config.headers.Authorization = token.value;
    }

    return config;
  }

  return config;
});

request.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 403) {
      return redirect("/login");
    }

    return Promise.reject(error);
  }
);

const isServer = typeof window === "undefined";

export default request;
