import React from "react";
import SectionContainer from "../SectionContainer";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <SectionContainer>
        {/* Left side footer */}
        <div>
          <Link href="/">
            <img className="max-w-40" src="/logo.png" alt="" />
          </Link>
        </div>

        {/* Right side footer */}
        <div></div>
      </SectionContainer>
    </footer>
  );
};

export default Footer;
