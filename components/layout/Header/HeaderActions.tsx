import { Button } from "@/components/ui/button";
import HeaderAuthBtn from "./HeaderAuthBtn";
import Link from "next/link";
import { Menu, ShoppingCart } from "lucide-react";

const HeaderActions = () => {
  return (
    <div className="flex items-center space-x-4 ml-auto">
      <nav className="hidden md:flex items-center space-x-4">
        <HeaderAuthBtn />
        <Link href="/cart">
          <Button
            variant="ghost"
            size="sm"
            className="flex items-center space-x-2"
          >
            <ShoppingCart className="h-4 w-4" />
            <span>장바구니</span>
          </Button>
        </Link>
      </nav>
      {/* 카테고리 메뉴 버튼 */}
      <Button
        variant="ghost"
        size="sm" /*onClick={() => setShowSidebar(true)}*/
      >
        <Menu className="h-5 w-5" />
      </Button>
    </div>
  );
};

export default HeaderActions;
