"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "@/schemas/authSchema";
import { useSignIn } from "@/hooks/useSignIn";

export function useSignInForm() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(signInSchema),
    mode: "onChange",
  });

  const { login, isLoading } = useSignIn();

  const [modalStatus, setModalStatus] = useState({
    modalOpen: false,
    modalMessage: "",
  });

  const closeModal = () =>
    setModalStatus((prev) => ({ ...prev, modalOpen: false }));

  async function onSubmit(data) {
    try {
      await login(data);
    } catch (error) {
      if (error.message.includes("이메일")) {
        setError("email", {
          type: "manual",
          message: "등록되지 않은 이메일입니다.",
        });
        setModalStatus({
          modalOpen: true,
          modalMessage: "등록되지 않은 이메일입니다.",
        });
      } else if (error.message.includes("비밀번호")) {
        setError("password", {
          type: "manual",
          message: "비밀번호를 확인해 주세요.",
        });
        setModalStatus({
          modalOpen: true,
          modalMessage: "비밀번호를 확인해 주세요.",
        });
      } else {
        setModalStatus({
          modalOpen: true,
          modalMessage: error.message || "로그인에 실패했습니다.",
        });
      }
    }
  }

  return {
    register,
    onSubmit: handleSubmit(onSubmit),
    errors,
    isValid,
    isLoading,
    modalStatus,
    closeModal,
  };
}
