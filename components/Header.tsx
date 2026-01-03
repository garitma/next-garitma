import Image from "next/image";
import Link from "next/link";

import Flight from "@/components/Flight";

const Header = () => {
  return (
    <div className="flex items-center justify-center p-0.5" data-slot="header">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={60} height={60} />
      </Link>
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <Flight />
      </div>
    </div>
  );
};

export default Header;
