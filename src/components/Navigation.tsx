"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navigation = () => {
  const path = usePathname();
  return (
    <nav className="flex gap-5 p-4">
      <Link
        className={clsx(
          "hover:text-white transition",
          path === "/" && "text-white underline"
        )}
        href="/"
      >
        Home
      </Link>
      <Link
        href="/projects"
        className={clsx(
          "hover:text-white transition",
          path === "/projects" && "text-white underline"
        )}
      >
        Projects
      </Link>
      <Link
        href="/about"
        className={clsx(
          "hover:text-white transition",
          path === "/about" && "text-white underline"
        )}
      >
        About
      </Link>
    </nav>
  );
};

export default Navigation;
