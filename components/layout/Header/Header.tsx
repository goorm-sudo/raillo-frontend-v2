"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X, CreditCard, Ticket, Search, MapPin } from "lucide-react";
import { tokenManager } from "@/lib/auth";
import HeaderBrand from "./HeaderBrand";
import HeaderActions from "./HeaderActions";

export default function Header() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-40">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center">
          {/* 왼쪽: 로고와 브레드크럼 */}
          <HeaderBrand />

          {/* 오른쪽: 네비게이션과 카테고리 버튼 */}
          <HeaderActions />
        </div>
      </div>
      {/* 사이드바 오버레이 */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[9999]"
          onClick={() => setShowSidebar(false)}
        >
          <div
            className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out z-[10000] border-l border-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Sidebar Header */}
            <div className="bg-blue-600 text-white p-4 flex items-center justify-between border-b border-blue-700">
              <h2 className="text-lg font-semibold">카테고리</h2>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setShowSidebar(false)}
                className="text-white hover:bg-blue-700"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
            {/* Sidebar Content */}
            <div className="p-4 overflow-y-auto h-[calc(100vh-80px)] bg-white">
              <nav className="space-y-2">
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-3">
                    승차권 서비스
                  </h3>
                  <Link
                    href="/ticket/purchased"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors bg-white"
                    onClick={() => setShowSidebar(false)}
                  >
                    <CreditCard className="h-5 w-5 text-green-600" />
                    <span className="text-gray-700">승차권 확인</span>
                  </Link>
                  <Link
                    href="/ticket/booking"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors bg-white"
                    onClick={() => setShowSidebar(false)}
                  >
                    <Ticket className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">승차권 예매</span>
                  </Link>

                  <Link
                    href="/ticket/reservations"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors bg-white"
                    onClick={() => setShowSidebar(false)}
                  >
                    <Search className="h-5 w-5 text-orange-600" />
                    <span className="text-gray-700">예약 승차권 조회</span>
                  </Link>
                </div>

                {/* 비회원 서비스 섹션
                <div className="space-y-1 mt-6">
                  <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-3">비회원 서비스</h3>
                  <Link 
                    href="/guest-ticket/search" 
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors bg-white"
                    onClick={() => setShowSidebar(false)}
                  >
                    <User className="h-5 w-5 text-indigo-600" />
                    <span className="text-gray-700">비회원 승차권 확인</span>
                  </Link>
                </div>
                */}

                {/* 부가 서비스 섹션 */}
                <div className="space-y-1 mt-6">
                  <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-3">
                    부가 서비스
                  </h3>
                  <Link
                    href="/landmarks"
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors bg-white"
                    onClick={() => setShowSidebar(false)}
                  >
                    <MapPin className="h-5 w-5 text-emerald-600" />
                    <span className="text-gray-700">랜드마크 찾기</span>
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
