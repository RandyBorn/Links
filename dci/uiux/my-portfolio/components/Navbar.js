"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/projects", label: "Projects" },
  ];

  return (
    <nav className="bg-gray-600 text-white p-5 flex flex-col justify-between items-center hover:bg-black duration-300 ">
      <div className="flex justify-center items-center  space-x-4">
        <button
          className="md:hidden bg-gray-700 px-2 py-1 rounded"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "Schließen" : "Menü"}
        </button>
      </div>

      <div className={`mt-4 ${isOpen ? "block" : "hidden"} md:flex gap-4`}>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block md:inline hover:text-gray-300 mt-2 md:mt-0"
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
