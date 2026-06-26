import { cookieFetch, defaultFetch } from "./fetchClient";
import {
  AUTH_ENDPOINT,
  SIGNIN_ENDPOINT,
  SIGNUP_ENDPOINT,
} from "@/constants/endpoint";

export const authService = {
  register: (data) =>
    defaultFetch(`${AUTH_ENDPOINT}${SIGNUP_ENDPOINT}`, {
      method: "POST",
      body: JSON.stringify(data),
    }),
  login: (data) =>
    cookieFetch(`${AUTH_ENDPOINT}${SIGNIN_ENDPOINT}`, {
      method: "POST",
      body: JSON.stringify(data),
    }),
  logout: () =>
    cookieFetch(`${AUTH_ENDPOINT}${LOGOUT_ENDPOINT}`, {
      method: "DELETE",
    }),
};
