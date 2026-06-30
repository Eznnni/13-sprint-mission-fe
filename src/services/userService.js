import { defaultFetch } from "./fetchClient";

export const userService = {
  getMe: () => {
    const token =
      typeof window !== "undefined"
        ? localStorage.getItem("accessToken")
        : null;

    return defaultFetch("/users/me", {
      method: "GET",
      headers: {
        ...(token && { Authorization: `Bearer ${token}` }),
      },
      cache: "no-store",
    });
  },
};
