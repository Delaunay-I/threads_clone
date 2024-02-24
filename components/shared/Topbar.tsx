import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

function Topbar() {
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4 text-neutral-200">
        <Image
          src="/assets/threads-logo.svg"
          height={50}
          width={50}
          alt="threads logo"
        />
        <p>Threads</p>
      </Link>

      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <SignedIn>
            <SignOutButton>
              <div className="flex cursor-pointer gap-4 p-4">
                <Image 
                src="/assets/logout.svg"
                width={25}
                height={25}
                alt="logout"
                />

                <p className="text-white">Logout</p>
              </div>
            </SignOutButton>
          </SignedIn>
        </div>

        <OrganizationSwitcher 
        appearance={{
          elements: {
            organizationSwitcherTrigger: "py-2 px-4"
          }
        }}
        />
      </div>
    </nav>
  );
}

export default Topbar;
