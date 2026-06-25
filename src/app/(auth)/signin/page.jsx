import Image from "next/image";
import Logo from "@/assets/logo/logo.svg";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Link from "next/link";
import SocialLoginBox from "../_components/SocialLoginBox";

export default function SignIn() {
  return (
    <div className="flex w-full max-w-480 px-160 pt-57.75 pb-71">
      <div className="flex w-full max-w-160 shrink-0 flex-col items-center gap-10">
        <Link href="/">
          <Image src={Logo} alt="로고" width={396} height={132} />
        </Link>

        <section className="flex w-full flex-col items-center gap-6 self-stretch">
          <form className="flex w-full flex-col items-start gap-6">
            <div className="flex w-full flex-col items-start gap-6">
              <div className="flex w-full flex-col items-start gap-4">
                <label
                  htmlFor="email"
                  className="text-secondary-800 text-2lg font-bold"
                >
                  이메일
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="이메일을 입력해주세요"
                />
              </div>
              <div className="flex w-full flex-col items-start gap-4">
                <label
                  htmlFor="password"
                  className="text-secondary-800 text-2lg font-bold"
                >
                  비밀번호
                </label>
                <Input
                  id="password"
                  type="password"
                  placeholder="비밀번호를 입력해주세요"
                />
              </div>
            </div>
            <Button size="large" variant="gray" rounded="round">
              로그인
            </Button>
          </form>
          <SocialLoginBox />
          <div className="flex items-center justify-center gap-1">
            <span className="text-md text-secondary-800 font-medium">
              판다마켓이 처음이신가요?
            </span>
            <Link
              href="/signup"
              className="text-primary-100 text-md font-medium underline"
            >
              회원가입
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
