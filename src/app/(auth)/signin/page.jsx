import Image from "next/image";
import Logo from "@/assets/logo/logo.svg";
import googleIcon from "@/assets/icons/social/ic_google.png";
import kakaoIcon from "@/assets/icons/social/ic_kakao.png";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Link from "next/link";

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
