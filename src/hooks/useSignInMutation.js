"use client";

import { authService } from "@/services/authService";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export const useSignInMutation = () => {
  const router = useRouter();

  return useMutation({
    mutationFn: (data) => authService.login(data),

    onSuccess: (data) => {
      if (data?.accessToken) {
        localStorage.setItem("accessToken", data.accessToken);
      }

      router.push("/items");
    },

    onError: (error) => {
      console.error(error.message || "로그인에 실패했습니다.");
    },
  });
};
