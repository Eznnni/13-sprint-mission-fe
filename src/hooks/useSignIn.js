"use client";

import { ITEM_ENDPOINT } from "@/constants/endpoint";
import { authService } from "@/services/authService";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function useSignIn() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const login = async (data) => {
    setIsLoading(true);
    try {
      const response = await authService.login(data);
      if (response?.accessToken) {
        localStorage.setItem("accessToken", response.accessToken);
        router.push(`${ITEM_ENDPOINT}`);
      }
      return response;
    } catch (error) {
      throw error;
    } finally {
      setIsLoading(false);
    }
  };
  return { login, isLoading };
}
