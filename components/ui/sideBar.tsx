"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./navBar";
export default function SideBar() {
  const pathname = usePathname();
  return (
    <div className="flex w-30 flex-col justify-around items-center  sm:mt-5">
      {navItems.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            href={item.href}
            key={item.id}
            className={`flex flex-col items-center  w-full h-full py-4 gap-1 ${
              isActive ? "text-defjam-gold border-b-4" : ""
            }`}
          >
            <item.icon className="w-10 h-10" />
            <span className="font-bold text-sm">{item.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
