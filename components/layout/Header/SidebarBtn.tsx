import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const SidebarBtn = () => {
  return (
    <Button variant="ghost" size="sm" /*onClick={() => setShowSidebar(true)}*/>
      <Menu className="h-5 w-5" />
    </Button>
  );
};

export default SidebarBtn;
