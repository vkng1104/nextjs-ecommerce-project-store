"use client";

import { ShoppingBag } from "lucide-react";
import { useEffect, useState } from "react";

import useCart from "@/hooks/use-cart";

import Button from "@/components/ui/button";

const NavbarAction = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  const cart = useCart();

  if (!isMounted) return null;

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex items-center">
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-white">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarAction;
