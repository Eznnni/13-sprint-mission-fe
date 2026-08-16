"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useAuth } from "./AuthProvider";
import { SIGNIN_ENDPOINT, SIGNUP_ENDPOINT } from "@/constants/endpoint";
import { ROUTES } from "@/constants/navigation";

const publicPaths = [
  `${ROUTES.HOME}`,
  `${SIGNIN_ENDPOINT}`,
  `${SIGNUP_ENDPOINT}`,
  `${ROUTES.ITEM.BASE}`,
  `${ROUTES.COMMUNITY}`,
];

export default function RouteGuard({ children }) {
  const { user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleGuard = () => {
      const path = pathname.split("?")[0];

      //정규식을 활용한 동적 상세 페이지 및 편집 페이지 감지
      const isItemDetail = /^\/items\/[^/]+$/.test(path);
      const isCommunityEdit = /^\/community\/[^/]+$/.test(path);

      const isProtectedRoute = isItemDetail || isCommunityEdit;

      const isPublicRoute = publicPaths.includes(path);

      if (isProtectedRoute && !user) {
        router.replace(`${SIGNIN_ENDPOINT}`);
      } else if (
        isPublicRoute &&
        user &&
        (path === `${SIGNIN_ENDPOINT}` || path === `${SIGNUP_ENDPOINT}`)
      ) {
        router.replace(`${ROUTES.ITEM.BASE}`);
      } else {
        setIsLoading(false);
      }
    };

    handleGuard();
  }, [user, pathname, router]);

  if (isLoading) {
    return null;
  }

  return children;
}
