"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

const menu = [
  { id: "intro", label: "Intro" },
  { id: "portfolio", label: "Portfolio" },
  { id: "contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  const pathname = usePathname();
  const router = useRouter();

  // ✅ 핵심: 상태를 하나로 통합 (충돌 방지)
  const pageType =
    pathname === "/"
      ? "home"
      : pathname === "/projects"
      ? "projects"
      : pathname.startsWith("/projects/")
      ? "projectDetail"
      : "other";

  const isHome = pageType === "home";
  const isProjectsPage = pageType === "projects";
  const isProjectDetail = pageType === "projectDetail";

  useEffect(() => {
    if (!isHome) return;

    const handleScroll = () => {
      const sections = ["intro", "portfolio", "contact"];
      let current = "";

      const scrollPosition = window.scrollY + window.innerHeight;
      const bottomPosition = document.documentElement.scrollHeight;

      if (scrollPosition >= bottomPosition - 10) {
        current = "contact";
      } else {
        sections.forEach((id) => {
          const el = document.getElementById(id);
          if (el) {
            const top = el.offsetTop - 150;
            if (window.scrollY >= top) {
              current = id;
            }
          }
        });
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHome]);

  // 로고 클릭
  const handleLogoClick = () => {
    if (isHome) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md border-b border-white/20 bg-white/70 h-[72px]">

      <div className="max-w-6xl mx-auto w-full h-full px-4 sm:px-6 lg:px-8 flex justify-between items-center">

        {/* 로고 */}
        <button
          onClick={handleLogoClick}
          className="font-extrabold text-xl tracking-tight text-gray-900 hover:opacity-80 transition"
        >
          QA <span className="text-emerald-500">Portfolio</span>
        </button>

        {/* ================= HOME ================= */}
        {isHome && (
          <>
            <nav className="hidden md:flex gap-8 text-sm font-semibold uppercase tracking-wider">
              {menu.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`relative py-1 transition-all duration-300 ${
                    active === item.id
                      ? "text-emerald-500"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {item.label}

                  <span
                    className={`absolute left-0 bottom-0 h-[2px] rounded-full transition-all duration-300 ${
                      active === item.id
                        ? "w-full bg-emerald-500"
                        : "w-0 bg-emerald-500"
                    }`}
                  />
                </a>
              ))}
            </nav>

            <button
              className="md:hidden text-2xl text-gray-800"
              onClick={() => setOpen(!open)}
            >
              {open ? "✕" : "☰"}
            </button>
          </>
        )}

        {/* ================= PROJECTS LIST ================= */}
        {isProjectsPage && (
          <button
            onClick={() => router.push("/")}
            className="text-sm px-4 py-2 rounded-lg border border-emerald-300 text-emerald-600 hover:bg-emerald-50 transition"
          >
            Home
          </button>
        )}

        {/* ================= PROJECT DETAIL ================= */}
        {isProjectDetail && (
          <div className="flex gap-2">
            <button
              onClick={() => router.push("/projects")}
              className="text-sm px-4 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-black/5 transition"
            >
              ← Projects
            </button>

            <button
              onClick={() => router.push("/")}
              className="text-sm px-4 py-2 rounded-lg border border-emerald-300 text-emerald-600 hover:bg-emerald-50 transition"
            >
              Home
            </button>
          </div>
        )}

      </div>

      {/* ================= MOBILE MENU ================= */}
      {isHome && (
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            open ? "max-h-64 border-t border-white/20" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-5 px-6 py-6 bg-white/70 text-sm font-bold uppercase tracking-widest backdrop-blur-md">
            {menu.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`${
                  active === item.id
                    ? "text-emerald-500"
                    : "text-gray-500"
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}

    </header>
  );
}