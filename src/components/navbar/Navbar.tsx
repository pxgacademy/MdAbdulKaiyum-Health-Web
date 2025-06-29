"use client";

import Link from "next/link";
import DefineTheme from "../DefineTheme";
import Button from "../ui/Button";
import { useEffect, useState } from "react";
import { useAuthStore } from "@/stores/useAuthStore";

interface DemoUser {
  name?: string;
  email: string;
  password?: string;
}

const navItems = [
  { href: "/#home", label: "হোম", alt: "home" },
  { href: "/#our_services", label: "সেবা", alt: "our_services" },
  { href: "/#review", label: "রিভিউ", alt: "review" },
  { href: "/#about_us", label: "আমাদের সম্পর্কে", alt: "about_us" },
  { href: "/#contact_us", label: "যোগাযোগ", alt: "contact_us" },
  { href: "/#faq", label: "FAQ", alt: "faq" },
];

const Navbar = () => {
  const [show, setShow] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const { user } = useAuthStore();
  const [hash, setHash] = useState<string>("");

  const demoUser: DemoUser = user || {
    name: "demo name",
    email: "demo@mail.com",
    password: "",
  };

  useEffect(() => {
    if (window?.location?.hash) setHash(window?.location?.hash);
    else setHash("");
  }, [window?.location?.hash]);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window === "undefined") return;
      const currentScrollY = window.scrollY;

      if (currentScrollY < 100) {
        setShow(true);
        setLastScrollY(currentScrollY);
        return;
      }

      if (currentScrollY > lastScrollY) setShow(false);
      else setShow(true);

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <nav
      className={`flex items-center justify-between fixed top-0 left-0 w-full py-3 px-4 sm:px-6 md:px-8 transition-transform duration-300 z-50 bg-base-300/80 backdrop-blur-md  ${
        show ? "translate-y-0" : "-translate-y-full"
      }`}
    >
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
              key={item.alt}
              href={item.href}
              className={`font-bangla ${
                hash.includes(`#${item.alt}`) && "font-bold text-blue-600"
              }
          `}
            >
              {item.label}
            </Link>
          ))}

          <Link href="#">
            <Button size="sm">বুক অ্যাপয়েন্টমেন্ট</Button>
          </Link>
          <Link href="#">
            <Button size="sm">BMI Calculator</Button>
          </Link>
          <Link href="#">
            <Button size="sm">Download App</Button>
          </Link>

          {demoUser ? (
            <Link href="#">
              <Button size="sm">ড্যাশবোর্ড</Button>
            </Link>
          ) : (
            <Link href="#">
              <Button size="sm">লগইন</Button>
            </Link>
          )}

          <DefineTheme />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
