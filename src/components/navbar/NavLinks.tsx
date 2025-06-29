import Link from "next/link";

import { useAuthStore } from "@/stores/useAuthStore";
import Button from "../ui/Button";

interface DemoUser {
  name?: string;
  email: string;
  password?: string;
}

export const navItems = [
  { href: "/#home", label: "হোম", alt: "home" },
  { href: "/#our_services", label: "সেবা", alt: "our_services" },
  { href: "/#review", label: "রিভিউ", alt: "review" },
  { href: "/#about_us", label: "আমাদের সম্পর্কে", alt: "about_us" },
  { href: "/#contact_us", label: "যোগাযোগ", alt: "contact_us" },
  { href: "/#faq", label: "FAQ", alt: "faq" },
];

const NavButtons = () => {
  const { user } = useAuthStore();

  const demoUser: DemoUser = user || {
    name: "demo name",
    email: "demo@mail.com",
    password: "",
  };

  return (
    <>
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
    </>
  );
};

export default NavButtons;
