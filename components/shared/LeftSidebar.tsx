"use client";

import { sidebarLinks } from "@/constants";
import { SignOutButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

function LeftSidebar() {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <section className="leftsidebar">
      <div className="flex flex-col gap-6 px-6">
        {sidebarLinks.map((link) => {
          const isActive =
            (pathname.includes(link.route) && link.route.length > 1) ||
            pathname === link.route;
          return (
            <Link
              href={link.route}
              key={link.label}
              className={`flex gap-4 rounded-lg p-4 transition-all hover:bg-purple-500 hover:bg-opacity-15 ${isActive && "bg-purple-500 hover:bg-opacity-80"}`}
            >
              <Image src={link.imgURL} width={25} height={25} alt="link logo" />
              <p className="max-lg:hidden">{link.label}</p>
            </Link>
          );
        })}
      </div>

      <div className="px-6">
        <SignedIn>
          <SignOutButton signOutCallback={() => router.push("sign-in")}>
            <div className="flex cursor-pointer gap-4 p-4 hover:bg-sky-300 hover:bg-opacity-20 rounded-lg">
              <Image
                src="/assets/logout.svg"
                width={25}
                height={25}
                alt="logout"
              />

              <p className="text-white max-lg:hidden">Logout</p>
            </div>
          </SignOutButton>
        </SignedIn>
      </div>
    </section>
  );
}

export default LeftSidebar;
