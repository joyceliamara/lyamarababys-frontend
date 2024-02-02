import env from "@/env";
import Sentry from "@/services/sentry";
import Token from "@/utils/token";
import axios from "axios";

const getBearer = () => {
  const token = Token.get();

  return token ? `Bearer ${token}` : undefined;
};

const request = axios.create({
  baseURL: env.baseUrl.origin,
  headers: {
    Authorization: getBearer(),
  },
});

request.interceptors.response.use((response) => {
  if (String(response.status).startsWith("5")) {
    Sentry.captureMessage(response.data);
  }

  return response;
});

export default request;
