"use client";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema } from "@/schemas/authSchema";
import { useState } from "react";
import Modal from "@/components/common/Modal";
import { useSignIn } from "@/hooks/useSignIn";

export default function SignInForm() {
  const {
    register,
    handleSubmit,
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

  async function onSubmit(data) {
    try {
      await login(data);
    } catch (error) {
      if (error.message.includes("이메일")) {
        setError("email", {
          type: "manual",
          message: "등록되지 않은 이메일입니다.",
        });
      } else if (error.message.includes("비밀번호")) {
        setError("password", {
          type: "manual",
          message: "비밀번호를 확인해 주세요.",
        });
      } else {
        setModalStatus({
          modalOpen: true,
          modalMessage: error.message || "로그인에 실패했습니다.",
        });
      }
    }
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full flex-col items-start gap-6"
      >
        <div className="flex w-full flex-col items-start gap-6">
          <div className="flex w-full flex-col items-start gap-4">
            <label
              htmlFor="email"
              className="text-secondary-800 text-2lg font-bold"
            >
              이메일
            </label>
            <Input
              {...register("email")}
              id="email"
              type="email"
              placeholder="이메일을 입력해주세요"
              autoComplete="email"
            />
            {errors.email && (
              <p className="text-error-red text-lg font-semibold">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="flex w-full flex-col items-start gap-4">
            <label
              htmlFor="password"
              className="text-secondary-800 text-2lg font-bold"
            >
              비밀번호
            </label>
            <Input
              {...register("password")}
              id="password"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              autoComplete="current-password"
            />
            {errors.password && (
              <p className="text-error-red text-lg font-semibold">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>
        <Button
          size="large"
          variant={isValid ? "primary" : "gray"}
          rounded="round"
          type="submit"
          disabled={!isValid || isLoading}
        >
          로그인
        </Button>
      </form>

      <Modal
        isOpen={modalStatus.modalOpen}
        message={modalStatus.modalMessage}
        onClose={() =>
          setModalStatus((prev) => ({ ...prev, modalOpen: false }))
        }
      />
    </>
  );
}
