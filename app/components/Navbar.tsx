import Image from "next/image";
import Link from "next/link";
import { UserNav } from "./UserNav";
import { SearchComponent } from "./SearchComponent";

export function Navbar() {
  return (
    <nav className="w-full border-b">
      <div className="flex items-center justify-between container mx-auto px-5 lg:px-10 py-5">
        <Link href="/">
          <Image
            src="/airbnb-desktop.png"
            alt="desktop logo"
            className="w-32 hidden lg:block"
            width={128}
            height={128}
          />
          <Image
            src="/airbnb-mobile.webp"
            alt="mobile logo"
            className="w-12 block lg:hidden"
            width={48}
            height={48}
          />
        </Link>
        <SearchComponent />
        <UserNav />
      </div>
    </nav>
  );
}
