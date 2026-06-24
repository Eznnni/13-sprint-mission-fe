import Image from "next/image";
import Logo from "@/assets/logo/logo.svg";
import Button from "@/components/ui/Button";
import Link from "next/link";
import Input from "@/components/ui/Input";
import googleIcon from "@/assets/icons/social/ic_google.png";
import kakaoIcon from "@/assets/icons/social/ic_kakao.png";

export default function SignUp() {
  return (
    <div className="flex w-full max-w-480 items-center justify-center px-160 pt-15 pb-44.5">
      <div className="flex w-full shrink-0 flex-col items-center gap-10">
        <Link href="/">
          <Image src={Logo} alt="로고" width={396} height={132} />
        </Link>

        <section className="flex w-full flex-col items-center gap-6 self-stretch">
          <form className="flex w-full flex-col items-start gap-6">
            <div className="flex w-full flex-col items-start gap-6">
              <label
                htmlFor="email"
                className="text-cool-gray-800 text-2lg flex h-5.25 w-11.75 flex-col items-start gap-4 font-bold"
              >
                이메일
              </label>
              <Input
                id="email"
                type="email"
                placeholder="이메일을 입력해주세요"
              />
              <label
                htmlFor="nickname"
                className="text-cool-gray-800 text-2lg flex h-5.25 w-11.75 flex-col items-start gap-4 font-bold"
              >
                닉네임
              </label>
              <Input
                id="nickname"
                type="text"
                placeholder="닉네임을 입력해주세요"
              />
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
                id="password"
                type="password"
                placeholder="비밀번호를 입력해주세요"
              />
            </div>
            <Button size="large" variant="gray" rounded="round">
              회원가입
            </Button>
          </form>
          <div className="flex h-18.5 w-full flex-col items-start gap-2.5 rounded-lg bg-[#E6F2FF] px-5.75 py-4">
            <div className="flex w-full items-center justify-between">
              <div className="text-secondary-800 text-lg font-medium">
                간편 로그인하기
              </div>
              <div className="flex items-start gap-4">
                <a>
                  <Image
                    src={googleIcon}
                    alt="구글 아이콘"
                    className="cursor-pointer"
                  />
                </a>
                <a>
                  <Image
                    src={kakaoIcon}
                    alt="카카오 아이콘"
                    className="cursor-pointer"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-1">
            <span className="text-md text-secondary-800 font-medium">
              이미 회원이신가요?
            </span>
            <Link
              href="/signin"
              className="text-primary-100 text-md font-medium underline"
            >
              로그인
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
