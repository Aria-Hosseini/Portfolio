"use client";

import { BASE } from "@/basePath";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { GoMoveToBottom } from "react-icons/go";

export default function Home() {
  const [showButton, setShowButton] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  useGSAP(() => {
    gsap.to("#my-img", {
      y: 260,
      skew: 30,
      duration: 2.5,
      ease: "slow(0.7,0.7,false)",
    });

    gsap.to("#my-name", {
      y: 260,
      duration: 3,
      ease: "expoScale(0.5,7,none)",
    });

    gsap.to("#my-special", {
      y: 260,
      duration: 3,
      ease: "expoScale(0.5,7,none)",
    });
  }, []);

  const scrollToNextSection = () => {
    const container = containerRef.current;
    if (container) {
      const currentScroll = container.scrollTop;
      const containerHeight = container.clientHeight;
      const nextSection = Math.floor(currentScroll / containerHeight) + 1;
      const targetScroll = nextSection * containerHeight;

      container.scrollTo({
        top: targetScroll,
        behavior: "smooth",
      });
    }
  };

  const technologies = [
    {
      name: "HTML",
      logo: `${BASE}/logos/html5-original.png`,
      color: "#E34F26",
    },
    { name: "CSS", logo: `${BASE}/logos/css3-original.png`, color: "#1572B6" },
    {
      name: "JavaScript",
      logo: `${BASE}/logos/javascript-original.png`,
      color: "#F7DF1E",
    },
    {
      name: "TypeScript",
      logo: `${BASE}/logos/typescript-original.png`,
      color: "#3178C6",
    },
    {
      name: "React.js",
      logo: `${BASE}/logos/react-original.png`,
      color: "#61DAFB",
    },
    {
      name: "Next.js",
      logo: `${BASE}/logos/nextjs-original.png`,
      color: "#000000",
    },
    { name: "Vite", logo: `${BASE}/logos/vitejs.svg`, color: "#646CFF" },
    {
      name: "Electron.js",
      logo: `${BASE}/logos/electron-original.png`,
      color: "#47848F",
    },
    {
      name: "Tailwind CSS",
      logo: `${BASE}/logos/tailwind-css-2.svg`,
      color: "#38BDF8",
    },
    { name: "Sass", logo: `${BASE}/logos/sass-original.png`, color: "#CC6699" },
    {
      name: "GSAP",
      logo: `${BASE}/logos/gsap-greensock.svg`,
      color: "#88CE02",
    },
    {
      name: "PostgreSQL",
      logo: `${BASE}/logos/postgresql-original.png`,
      color: "#336791",
    },
    { name: "Zustand", logo: `${BASE}/logos/zustand.svg`, color: "#433E38" },
    { name: "Git", logo: `${BASE}/logos/git-original.png`, color: "#F05032" },
    {
      name: "GitHub",
      logo: `${BASE}/logos/github-original.png`,
      color: "#181717",
    },
  ];

  const projects = [
    {
      name: "جهان جدید",
      img: `${BASE}/img/new-world.jpg`,
      link: "https://github.com/Aria-Hosseini/New-World-Website-",
    },
    {
      name: "مینی شاپ",
      img: `${BASE}/img/minishop.jpg`,
      link: "https://github.com/Aria-Hosseini/minishop",
    },
    {
      name: "وبلاگ من",
      img: `${BASE}/img/my-blog.jpg`,
      link: "https://github.com/Aria-Hosseini/My-Blog",
    },
    {
      name: "روانگر",
      img: `${BASE}/img/ravangar.jpg`,
      link: "https://github.com/Aria-Hosseini/Ravangar",
    },
    {
      name: "اپ دسکتاپ آب و هوا",
      img: `${BASE}/img/weather-all.jpg`,
      link: "https://github.com/Aria-Hosseini/weather-all-app",
    },
  ];
  return (
    <>
      <div
        ref={containerRef}
        className="h-screen overflow-y-scroll snap-y snap-mandatory"
        dir="ltr"
      >
        <section className="relative min-h-screen snap-start text-center bg-zinc-900 text-slate-100 p-3 overflow-hidden">
          <div className="relative z-10 flex flex-col items-center justify-center mb-25">
            <img
              id="my-img"
              src={`${BASE}/img/me.jpg`}
              alt="آریا"
              className="w-36 h-36 rounded-full border-4 border-sky-400 shadow-[0_0_25px_rgba(56,189,248,0.5)] object-cover mb-8"
            />
            <h1 id="my-name" className="text-3xl sm:text-4xl font-bold mb-5">
              آریا حسینی
            </h1>
            <p id="my-special" className="text-lg sm:text-xl text-slate-400">
              A Simple Developer
            </p>
            {showButton && (
              <button
                onClick={scrollToNextSection}
                className="mt-80 flex flex-row items-center justify-center animate-fade-in text-sky-400 hover:text-sky-300 transition-colors cursor-pointer"
              >
                <span className="text-center">برو به پایین</span>
                <GoMoveToBottom size={22} />
              </button>
            )}
          </div>
        </section>

        <section
          id="sec2"
          className="min-h-screen snap-start flex justify-center items-center bg-zinc-800"
        >
          <div className="flex flex-col items-center justify-center space-y-5 ">
            <h3 className="text-amber-50 text-2xl">درباره من</h3>
            <div className="w-100 p-2 md:w-160">
              <p className="text-center text-gray-100">
                من آریا حسینی هستم، یک توسعه‌دهنده وب فرانت‌اند
                <br /> با بیش از ۳ سال تجربه در ساخت برنامه‌های وب مدرن و پویا.
                از ایجاد رابط‌های یکپارچه
                <br /> و مقیاس‌پذیر لذت می‌برم و به طور مداوم در حال یادگیری
                برای بهبود مهارت‌هایم هستم. منعطف، خلاق و اهل کار تیمی.
              </p>
            </div>
          </div>
        </section>

        <section
          id="sec3"
          className="min-h-screen snap-start flex justify-center items-center bg-zinc-900"
        >
          <div className="flex flex-col items-center justify-center space-y-5">
            <h3 className="text-amber-50 text-2xl">تکنولوژی‌ها</h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6">
              {technologies.map((tech) => (
                <div
                  key={tech.name}
                  className="w-20 h-20 flex items-center justify-center bg-zinc-700 grayscale hover:grayscale-0 transition duration-300 rounded-md"
                  style={{
                    boxShadow: `0 0 15px ${tech.color}50`,
                  }}
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-12 h-12 object-contain transition duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="sec4"
          className="min-h-screen snap-start flex flex-col justify-center items-center bg-zinc-800 text-amber-50 px-6 py-20"
        >
          <h2 className="text-3xl font-bold mb-12 text-center">تجربیات</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
            <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-700 hover:border-sky-500 shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2 text-sky-400">
                Freelance Front-End Developer
              </h3>
              <p className="text-zinc-300 leading-relaxed text-sm">
                Worked independently on diverse web projects, focusing on modern
                front-end technologies, scalability, and user experience.
                Continuously learning and improving technical expertise to stay
                aligned with the latest web development trends.
              </p>
            </div>

            <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-700 hover:border-sky-500 shadow-lg transition-all">
              <h3 className="text-xl font-semibold mb-2 text-sky-400">
                Front-End Developer at Hooti Bot Team
              </h3>
              <p className="text-zinc-300 leading-relaxed text-sm">
                Front-End Developer specializing in React.js and Next.js,
                building high-performance web interfaces and gaining valuable
                teamwork experience through close collaboration with the
                back-end team.
              </p>
            </div>
          </div>
        </section>

        <section
          id="sec5"
          className="min-h-screen snap-start flex justify-center items-center bg-zinc-900 relative"
        >
          <div className="flex flex-col items-center justify-center mt-12">
            <span className="text-amber-50 text-2xl font-bold">پروژه ها</span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              {projects.map((item, i) => (
                <a
                  key={i}
                  href={item.link}
                  target="_blank"
                  className="group block bg-zinc-900 rounded-2xl overflow-hidden shadow-lg border border-zinc-800 hover:border-sky-500 transition-all duration-300"
                >
                  <div className="relative w-full h-48 overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  </div>

                  <div className="p-4 flex items-center justify-between">
                    <h3 className="text-white font-semibold text-lg">
                      {item.name}
                    </h3>
                    <span className="text-sky-400 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                      مشاهده →
                    </span>
                  </div>
                </a>
              ))}

              <a
                target="_blank"
                href="https://github.com/Aria-Hosseini?tab=repositories"
              >
                <div
                  className="w-full h-63 rounded-2xl bg-zinc-900 border border-zinc-800 
          flex items-center justify-center text-white text-xl font-semibold
          hover:border-sky-500 hover:bg-zinc-800/60 transition-all duration-300 
          cursor-pointer select-none 
          bg-[radial-gradient(circle,_rgba(255,255,255,0.20)_2px,_transparent_1px)]
          bg-[size:18px_18px]"
                >
                  سایر پروژه‌ها
                </div>
              </a>
            </div>
          </div>

          <footer className="absolute md:bottom-4 bottom-2 left-0 w-full text-center">
            <span className="inline-flex items-center gap-2 text-zinc-500 text-sm">
              <span className="text-[14px]">©</span>
              all rights reserved Aria Hosseini
            </span>
          </footer>
        </section>
      </div>
    </>
  );
}
