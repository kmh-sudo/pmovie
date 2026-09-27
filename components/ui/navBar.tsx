'use client';

import { HandMetal, Crosshair, NotepadText, Clapperboard } from 'lucide-react';
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const navItems = [
  {id: 1, name: 'Home', icon: HandMetal, href: '/' },
    {id: 2, name: 'Movies', icon: Clapperboard, href: '/movie' },
  {id: 3, name: 'Search', icon: Crosshair, href: '/search' },
  {id: 4, name: 'My List', icon: NotepadText, href: '/list' },
];
export default function NavBar() {
  const pathname = usePathname();
  return (
  <div className="flex w-full justify-around items-center ">
    {navItems.map((item) => {
      const isActive = pathname === item.href; 
      
      return (
        <Link 
          href={item.href} 
          key={item.id} 
          className={`flex flex-col items-center border-t-4 w-full h-full py-4 gap-1 ${
            isActive ? 'text-defjam-gold' : ''
          }`}
        >
          <item.icon className="w-10 h-10" />
          <span className="font-bold text-sm">{item.name}</span>
        </Link>
      );
    })}
  </div>
    )};