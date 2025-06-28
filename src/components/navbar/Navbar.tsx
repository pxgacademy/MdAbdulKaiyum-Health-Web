"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import DefineTheme from "../DefineTheme";

const navItems = [
  { href: "/", label: "হোম", alt: "home" },
  { href: "/", label: "সেবা", alt: "our_services" },
  { href: "/", label: "রিভিউ", alt: "review" },
  { href: "/", label: "আমাদের সম্পর্কে", alt: "about_us" },
  { href: "/", label: "যোগাযোগ", alt: "contact_us" },
  { href: "/", label: "FAQ", alt: "faq" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="flex items-center justify-between px-4 sm:px-6 md:px-8">
      {/* left side */}
      <div>
        <Link href="/">
          <img className="max-w-40" src="/logo.png" alt="" />
        </Link>
      </div>

      {/* right side */}
      <div>
        <div className="flex items-center gap-x-2">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`font-bangla ${
                pathname.includes(item.alt) && "font-bold text-blue-600"
              }
          `}
            >
              {item.label}
            </Link>
          ))}

          <DefineTheme />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
