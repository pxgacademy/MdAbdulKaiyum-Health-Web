"use client";
import React from "react";
import SectionContainer from "../SectionContainer";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer>
      <SectionContainer className="font-bangla md:flex">
        {/* Left side footer */}
        <div className="flex-1">
          <Link href="/">
            <img className="max-w-40 md:max-w-60" src="/logo.png" alt="logo" />
          </Link>
          <p className="md:max-w-60 mt-2.5 text-justify">
            পীস লাইব্রেরী মূলত এটি একটি সংস্থা, ঔষধকে খাদ্য হিসেবে নয়, বরং
            খাদ্যকেই ঔষধ হিসেবে গ্রহণ করুন। এই স্লোগান নিয়ে আমাদের স্বাস্থ্যকর
            লাইফ স্টাইল এগিয়ে নিয়ে যাওয়ার চেষ্টা করছি।
          </p>
        </div>

        {/* Right side footer */}
        <div className="flex-1 space-y-3 sm:space-y-0 sm:flex justify-between mt-5 md:mt-0">
          {/* ঠিকানা */}
          <div className="flex-1">
            <h6 className="text-xl font-semibold mb-2.5">ঠিকানা</h6>
            <ul>
              <li>
                PeaceLibrary DIABETES CENTRE Vill-Sekhpur (Chandpur Brigde)
                Jharkhand Border
              </li>
              <li>Po- Bhasaipaikar</li>
              <li>Ps-Samserganj</li>
              <li>Dist-Murshidabad</li>
              <li>Pin-742202</li>
              <li>State- West Bengal</li>
            </ul>
          </div>

          {/* খোলা থাকে */}
          <div className="flex-1">
            <h6 className="text-xl font-semibold mb-2.5">খোলা থাকে</h6>
            <ul>
              <li>সোম – বৃহস্পতি</li>
              <li>(6 AM – 6 PM)</li>
              <li>শনি – রবি</li>
              <li>(6 AM – 6 PM)</li>
              <li>শুক্রবার বন্ধ থাকে</li>
            </ul>
          </div>

          {/* যোগযোগ */}
          <div className="flex-1">
            <h6 className="text-xl font-semibold mb-2.5">যোগাযোগ</h6>

            <div className="space-y-2.5">
              <div>
                <p>ফোন:</p>
                <p className="flex items-center gap-x-1.5">
                  <Image width={20} height={20} src="/svg/call.svg" alt="svg" />
                  {"+91 9732 624 907"}
                </p>
              </div>
              <div>
                <p>হোয়াটসঅ্যাপ:</p>
                <p className="flex items-center gap-x-1.5">
                  <Image width={20} height={20} src="/svg/wp.svg" alt="svg" />
                  {"+91 9732 624 907"}
                </p>
              </div>

              <ul className="text-blue-500">
                <li>
                  <Link href="#">FAQ</Link>
                </li>
                <li>
                  <Link href="#">Career</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </SectionContainer>
      <div className="container mx-auto border-t border-gray-300 dark:border-gray-600 mt-3 pt-3 text-gray-500">
        <aside className="flex items-center justify-between">
          <p>
            © {new Date().getFullYear()} - MD ABDUL KAIYUM - Peacelibrary. All
            Rights Reserved.
          </p>

          <Link href="https://www.facebook.com/mdabdulkaiyumpeacelibrary">
            <Image width={12} height={10} src="/svg/fb.svg" alt="svg" />
          </Link>
        </aside>
      </div>
    </footer>
  );
};

export default Footer;
