"use client";
import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { usePathname } from "next/navigation";
import { FaPhoneFlip } from "react-icons/fa6";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isContact = pathname === "/contactMe";
  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 w-[90%] sm:w-200 z-50">
      <div className="backdrop-blur-md bg-white/10 border border-white/10 rounded-xl p-4 flex items-center justify-between sm:justify-center">
        <button
          className="text-white text-2xl sm:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>

        <a href="tel:+989915766048">
        <button
          className="bg-[#00BCFF] py-1 px-3 text-[15px] rounded-md text-amber-50 shadow-2xl 
             hover:bg-sky-300 transition inline-flex items-center gap-2 sm:hidden cursor-pointer"
        >
          <span>تماس با من</span>
          <FaPhoneFlip className="text-amber-50" />
        </button>
        </a>

        <nav className="hidden sm:flex flex-row items-center gap-10">
          {isContact ? (
            <>
              <Link href={"/"}>
                <button className="text-amber-50 hover:text-sky-300 transition-colors cursor-pointer">
                  صفحه اصلی
                </button>
              </Link>
              <Link href={"/contactMe"}>
                <button className="text-amber-50 hover:text-sky-300 transition-colors cursor-pointer">
                  ارتباط با من
                </button>
              </Link>
            </>
          ) : (
            <>
              <a
                href="#sec2"
                className="text-amber-50 hover:text-sky-300 transition-colors"
              >
                درباره من
              </a>
              <a
                href="#sec3"
                className="text-amber-50 hover:text-sky-300 transition-colors"
              >
                تکنولوژی‌ها
              </a>
              <a
                href="#sec4"
                className="text-amber-50 hover:text-sky-300 transition-colors"
              >
                تجربیات
              </a>
              <a
                href="#sec5"
                className="text-amber-50 hover:text-sky-300 transition-colors"
              >
                پروژه‌ها
              </a>
              <Link href={"/contactMe"}>
                <button className="text-amber-50 hover:text-sky-300 transition-colors cursor-pointer">
                  ارتباط با من
                </button>
              </Link>
            </>
          )}
        </nav>
      </div>

      {/* mobile */}
      <nav
        className={`sm:hidden mt-3 flex flex-col items-center gap-5 text-center backdrop-blur-md bg-white/10 border border-white/10 rounded-xl p-5  transition-all duration-300 ${
          open
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-5"
        }`}
      >
        {isContact ? (
          <>
            <Link href={"/"}>
              <button className="text-amber-50 hover:text-sky-300 transition-colors cursor-pointer">
                صفحه اصلی
              </button>
            </Link>
            <Link href={"/contactMe"}>
              <button className="text-amber-50 hover:text-sky-300 transition-colors cursor-pointer">
                ارتباط با من
              </button>
            </Link>
          </>
        ) : (
          <>
            <a
              href="#sec2"
              className="text-amber-50 hover:text-sky-300 transition-colors"
              onClick={() => setOpen(false)}
            >
              درباره من
            </a>
            <a
              href="#sec3"
              className="text-amber-50 hover:text-sky-300 transition-colors"
              onClick={() => setOpen(false)}
            >
              تکنولوژی‌ها
            </a>
            <a
              href="#sec4"
              className="text-amber-50 hover:text-sky-300 transition-colors"
              onClick={() => setOpen(false)}
            >
              تجربیات
            </a>
            <a
              href="#sec5"
              className="text-amber-50 hover:text-sky-300 transition-colors"
              onClick={() => setOpen(false)}
            >
              پروژه‌ها
            </a>
            <Link href={"/contactMe"}>
              <button className="text-amber-50 hover:text-sky-300 transition-colors cursor-pointer">
                ارتباط با من
              </button>
            </Link>
          </>
        )}
      </nav>
    </header>
  );
}
