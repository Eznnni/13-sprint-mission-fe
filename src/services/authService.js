import { defaultFetch } from "./fetchClient";
import { AUTH_ENDPOINT, SIGNUP_ENDPOINT } from "@/constants/endpoint";

export const authService = {
  register: (data) =>
    defaultFetch(`${AUTH_ENDPOINT}${SIGNUP_ENDPOINT}`, {
      method: "POST",
      body: JSON.stringify(data),
    }),
};
