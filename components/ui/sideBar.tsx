"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "./navBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export default function SideBar() {
  const pathname = usePathname();
  return (
    <div className="flex w-30 flex-col justify-around items-center sm:mt-5 h-30">
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
          <FontAwesomeIcon icon={item.icon} style={{ width: '2rem', height: '2rem'}}/>
            <span className="font-bold text-sm">{item.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
