'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHouse,
  faClapperboard,
  faCrosshairs,
  faChartSimple,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const navItems = [
  { id: 1, name: 'Home',    icon: faHouse,   href: '/' },
  { id: 2, name: 'Movies',  icon: faClapperboard, href: '/movie' },
  { id: 3, name: 'Search',  icon: faCrosshairs,  href: '/search' },
  { id: 4, name: 'My List', icon: faChartSimple,  href: '/list' },
];
export default function NavBar() {
  const pathname = usePathname();
  return (
  <div className="flex w-full   justify-around items-center ">
    {navItems.map((item) => {
      const isActive = pathname === item.href; 
      
      return (
        <Link 
          href={item.href} 
          key={item.id} 
          className={`flex flex-col items-center border-defjam-text border-t-4w-full h-full py-4 gap-1 text-defjam-muted ${
            isActive ? 'text-defjam-text ' : ''
          }`}
        >
          <FontAwesomeIcon icon={item.icon} style={{ width: '2rem', height: '2rem'}} />
          <span className="font-bold text-sm">{item.name}</span>
        </Link>
      );
    })}
  </div>
    )};