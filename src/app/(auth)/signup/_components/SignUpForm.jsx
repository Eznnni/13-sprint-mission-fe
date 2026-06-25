"use client";

import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema } from "@/schemas/authSchema";
import { useSignUpMutation } from "@/hooks/useSignUpMutation";

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(signUpSchema),
    mode: "onChange",
  });

  const { mutate: signUpMutate, isPending } = useSignUpMutation();

  function onSubmit(data) {
    signUpMutate(data);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex w-full flex-col items-start gap-6"
    >
      <div className="flex w-full flex-col items-start gap-6">
        <label
          htmlFor="email"
          className="text-cool-gray-800 text-2lg flex h-5.25 w-11.75 flex-col items-start gap-4 font-bold"
        >
          이메일
        </label>
        <Input
          {...register("email")}
          id="email"
          type="email"
          placeholder="이메일을 입력해주세요"
        />
        {errors.email && (
          <p className="text-error-red text-lg font-semibold">
            {errors.email.message}
          </p>
        )}
        <label
          htmlFor="nickname"
          className="text-cool-gray-800 text-2lg flex h-5.25 w-11.75 flex-col items-start gap-4 font-bold"
        >
          닉네임
        </label>
        <Input
          {...register("nickname")}
          id="nickname"
          type="text"
          placeholder="닉네임을 입력해주세요"
        />
        {errors.nickname && (
          <p className="text-error-red text-lg font-semibold">
            {errors.nickname.message}
          </p>
        )}
        <label
          htmlFor="password"
          className="text-cool-gray-800 text-2lg flex h-5.25 w-15.75 flex-col items-start gap-4 font-bold"
        >
          비밀번호
        </label>
        <Input
          {...register("password")}
          id="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
        />
        {errors.password && (
          <p className="text-error-red text-lg font-semibold">
            {errors.password.message}
          </p>
        )}
        <label
          htmlFor="passwordConfirmation"
          className="text-cool-gray-800 text-2lg flex h-5.25 w-24.5 flex-col items-start gap-4 font-bold"
        >
          비밀번호 확인
        </label>
        <Input
          {...register("passwordConfirmation")}
          id="passwordConfirmation"
          type="password"
          placeholder="비밀번호를 입력해주세요"
        />
        {errors.passwordConfirmation && (
          <p className="text-error-red text-lg font-semibold">
            {errors.passwordConfirmation.message}
          </p>
        )}
      </div>
      <Button
        size="large"
        variant={isValid ? "primary" : "gray"}
        rounded="round"
        type="submit"
        disabled={!isValid}
      >
        회원가입
      </Button>
    </form>
  );
}
