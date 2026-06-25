"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { authService } from "@/services/authService";
import { ITEM_ENDPOINT } from "@/constants/endpoint";

export const useSignUp = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const register = async (data) => {
    setIsLoading(true);
    try {
      const response = await authService.register(data);
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

  return { register, isLoading };
};
