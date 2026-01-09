"use client";

import { LogIn, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { tokenManager } from "@/lib/auth";
import { logout } from "@/lib/api/auth";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/LoadingSpinner";
import Link from "next/link";

const HeaderAuthBtn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    // 먼저 동기적으로 빠르게 체크 (sessionStorage 확인)
    const quickCheck = tokenManager.isAuthenticated();
    setIsLoggedIn(quickCheck);

    // 그 다음 비동기로 refreshToken까지 확인
    tokenManager
      .initializeAuth()
      .then((isAuth) => {
        setIsLoggedIn(isAuth);
      })
      .catch((error) => {
        console.error("토큰 초기화 에러:", error);
        setIsLoggedIn(false);
      });
  }, []);

  // 로그아웃 함수
  const handleLogout = async () => {
    try {
      await logout();
      tokenManager.removeToken();
      updateLoginStatus();
      alert("로그아웃되었습니다.");
      router.push("/");
    } catch (error: any) {
      console.error("로그아웃 에러:", error);
      // 로그아웃 API 실패해도 로컬 토큰은 제거
      tokenManager.removeToken();
      updateLoginStatus();
      alert("로그아웃되었습니다.");
      router.push("/");
    }
  };

  // 로그인 상태를 실시간으로 업데이트하는 함수
  const updateLoginStatus = () => {
    setIsLoggedIn(tokenManager.isAuthenticated());
  };

  // 로딩 중이면 스피너 표시
  if (isLoggedIn === null) {
    return (
      <div className="flex items-center space-x-2">
        <LoadingSpinner size="sm" />
      </div>
    );
  }

  if (isLoggedIn) {
    return (
      <Button
        variant="ghost"
        size="sm"
        className="flex items-center space-x-2"
        onClick={handleLogout}
      >
        <LogOut className="h-4 w-4" />
        <span>로그아웃</span>
      </Button>
    );
  }
  return (
    <Link href="/login">
      <Button variant="ghost" size="sm" className="flex items-center space-x-2">
        <LogIn className="h-4 w-4" />
        <span>로그인</span>
      </Button>
    </Link>
  );
};

export default HeaderAuthBtn;
