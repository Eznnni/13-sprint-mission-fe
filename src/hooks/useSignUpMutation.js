"use client";

import { useMutation } from "@tanstack/react-query";
import { authService } from "@/services/authService";
import { useRouter } from "next/navigation";

export const useSignUpMutation = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: (data) => authService.register(data),

    onSuccess: (data) => {
      if (data?.accessToken) {
        localStorage.setItem("accessToken", data.accessToken);
      }

      router.push("/items");
    },

    //TODO 실패 메시지 모달
    onError: (error) => {
      console.error("회원가입에 실패했습니다.", error.message);
      alert("회원가입에 실패했습니다.", error.message);
    },
  });
};
