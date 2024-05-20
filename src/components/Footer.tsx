"use client";
import { Fragment } from "react";
import { usePathname } from 'next/navigation';
import Image from "next/image";
import { Menu, Transition, MenuItem, MenuItems } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logoBehna from "../../public/svg/BEHNA_LOGO_SVG.svg";

const navigation = [
  { name: "COLLECTION", href: "/collection/posters" },
  { name: "ABOUT", href: "/about" },
  { name: "CONTACT", href: "/contact" },
];

const Footer = () => {
  const pathname = usePathname();

  return (
    <footer className={`text-white w-full ${pathname === '/' ? 'bg-slate-900' : 'bg-slate-900'}`}>
      <div className="max-w-full mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1 mb-4 md:mb-0">
            <a href="/" className="flex items-center">
              <Image src={logoBehna} alt='logo' className="w-6 mr-1 text-white"/>
              <span className="">BEHNA ARCHIVES</span>
            </a>
          </div>
          <div className="text-center text-sm md:text-base font-medium text-white">
            The Behna archives in partnership between Wekalat Behna, Factum Foundation and Fondazione Cini with support from ♥︎ Community Jameel
          </div>
          <nav className="hidden md:flex space-x-4">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-base font-medium text-white hover:text-gray-300"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
