"use client";
import { Fragment, useState } from "react";
import { usePathname } from 'next/navigation'
import Image from "next/image";
import {
  MenuButton,
  Menu,
  Transition,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import logoBehna from "../../public/svg/BEHNA_LOGO_SVG.svg";

const navigation = [
  { name: "COLLECTION", href: "/collection" },
  { name: "ABOUT", href: "/about" },
  { name: "CONTACT", href: "/contact" },
];
const navigationMobile = [
  { name: "HOME", href: "/" },
  { name: "COLLECTION", href: "/collection" },
  { name: "ABOUT", href: "/about" },
  { name: "CONTACT", href: "/contact" },
];


const Navbar = () => {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`text-white w-full ${pathname === '/' ? 'bg-slate-900' : 'bg-slate-900'}`}>
    <div className="max-w-full mx-auto px-4">
      <div className="flex justify-between items-center py-6 md:justify-start md:space-x-10">
        <div className="flex justify-start lg:w-0 lg:flex-1">
          <a href="/" className="flex">
            <Image src={logoBehna} alt='logo' className="w-6 mr-1 text-white font-ibmSans"/>
            <span className="px-2 plexMono">BEHNA DIGITAL ARCHIVES</span>
          </a>
        </div>
        <div className="-mr-2 -my-2 md:hidden">
          <Menu as="div" className="relative inline-block text-left">
            <MenuButton
              className="inline-flex items-center justify-center font-ibmMono p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setIsOpen(true)}
            >
              <span className="sr-only">Open menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </MenuButton>
            <Transition
              show={isOpen}
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition ease-in duration-75"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 z-50 bg-black bg-opacity-98 flex items-center justify-center">
                <div className="absolute top-4 right-4">
                  <button
                    className="text-gray-400 hover:text-white"
                    onClick={() => setIsOpen(false)}
                  >
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <MenuItems className="flex flex-col items-center space-y-4">
                  {navigationMobile.map((item) => (
                    <MenuItem key={item.name}>
                      {({ active }) => (
                        <a
                          href={item.href}
                          className={`block text-2xl plexMono text-white ${active ? "bg-gray-900" : ""}`}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </a>
                      )}
                    </MenuItem>
                  ))}
                </MenuItems>
              </div>
            </Transition>
          </Menu>
        </div>
        <nav className="hidden md:flex ">
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
  </div>
  );
};

export default Navbar;
