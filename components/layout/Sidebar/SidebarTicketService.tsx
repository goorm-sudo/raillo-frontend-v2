import { CreditCard, Search, Ticket } from "lucide-react";
import Link from "next/link";

const SidebarTicketService = ({ close }: { close: () => void }) => {
  return (
    <div className="space-y-1">
      <h3 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-3">
        승차권 서비스
      </h3>
      <Link
        href="/ticket/purchased"
        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors bg-white"
        onClick={close}
      >
        <CreditCard className="h-5 w-5 text-green-600" />
        <span className="text-gray-700">승차권 확인</span>
      </Link>
      <Link
        href="/ticket/booking"
        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors bg-white"
        onClick={close}
      >
        <Ticket className="h-5 w-5 text-blue-600" />
        <span className="text-gray-700">승차권 예매</span>
      </Link>

      <Link
        href="/ticket/reservations"
        className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors bg-white"
        onClick={close}
      >
        <Search className="h-5 w-5 text-orange-600" />
        <span className="text-gray-700">예약 승차권 조회</span>
      </Link>
    </div>
  );
};

export default SidebarTicketService;
