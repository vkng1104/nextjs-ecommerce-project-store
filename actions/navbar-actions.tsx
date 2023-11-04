"use client";

import Button from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

const NavbarAction = () => {
  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex items-center">
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">0</span>
      </Button>
    </div>
  );
};

export default NavbarAction;
