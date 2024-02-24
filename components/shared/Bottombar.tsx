"use client";

import { sidebarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Bottombar() {
  const pathname = usePathname();

  return (
    <section className="bottombar">
      <div className="bottombar_container">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <Link
              href={link.route}
              key={link.label}
              className={`bottombar_link transition-all hover:bg-purple-500 hover:bg-opacity-15 ${isActive && "bg-purple-500 hover:bg-opacity-80"}`}
            >
              <Image src={link.imgURL} width={25} height={25} alt="link logo" />
              <p className="text-subtle-medium text-white max-sm:hidden">
                {link.label.split(/\s+./)[0]}
                </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default Bottombar;
