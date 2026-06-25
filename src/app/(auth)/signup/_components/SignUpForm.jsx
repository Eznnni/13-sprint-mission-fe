import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

export default function SignUpForm() {
  return (
    <form className="flex w-full flex-col items-start gap-6">
      <div className="flex w-full flex-col items-start gap-6">
        <label
          htmlFor="email"
          className="text-cool-gray-800 text-2lg flex h-5.25 w-11.75 flex-col items-start gap-4 font-bold"
        >
          이메일
        </label>
        <Input id="email" type="email" placeholder="이메일을 입력해주세요" />
        <label
          htmlFor="nickname"
          className="text-cool-gray-800 text-2lg flex h-5.25 w-11.75 flex-col items-start gap-4 font-bold"
        >
          닉네임
        </label>
        <Input id="nickname" type="text" placeholder="닉네임을 입력해주세요" />
        <label
          htmlFor="password"
          className="text-cool-gray-800 text-2lg flex h-5.25 w-15.75 flex-col items-start gap-4 font-bold"
        >
          비밀번호
        </label>
        <Input
          id="password"
          type="password"
          placeholder="비밀번호를 입력해주세요"
        />
        <label
          htmlFor="passwordConfirmation"
          className="text-cool-gray-800 text-2lg flex h-5.25 w-24.5 flex-col items-start gap-4 font-bold"
        >
          비밀번호 확인
        </label>
        <Input
          id="passwordConfirmation"
          type="password"
          placeholder="비밀번호를 입력해주세요"
        />
      </div>
      <Button size="large" variant="gray" rounded="round">
        회원가입
      </Button>
    </form>
  );
}
