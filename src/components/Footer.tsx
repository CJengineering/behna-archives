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
        <div className="flex flex-col md:flex-row justify-between space-x-10 align-middle">
        <a href="/" className="flex">
            <Image src={logoBehna} alt='logo' className="w-6 mr-1 text-white font-ibmSans"/>
            <span className="px-2 plexMono">BEHNA ARCHIVES</span>
          </a>
          <div className="text-center hidden md:block text-xs plexMono content-center text-white uppercase">
            The Behna archives in partnership between Wekalat Behna, Factum Foundation and Fondazione Cini with support from ♥︎ Community Jameel
          </div>
          <nav className="hidden md:flex">
          {navigation.map((item, index) => (
            <Fragment key={item.name}>
              <a
                href={item.href}
                className="text-base plexMono text-white hover:text-gray-300 px-2"
              >
                {item.name}
              </a>
              {index < navigation.length - 1 && (
                <span className="text-white px-2">/</span>
              )}
            </Fragment>
          ))}
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
