// components/BottomTabBar.js

import Image from "next/image";
import Link from "next/link";

const BottomTabBar = () => {
  return (
    <div className="fixed md:hidden border-secondary border-t-2 bottom-0 left-0 w-full bg-white p-4 flex justify-around items-center">
      <Link
        className="text-white hover:text-gray-300 justify-center items-center"
        href="#hotbar"
      >
        <Image src="/hotbar.png" width={35} height={35} alt="Hotbar" />
      </Link>
      <Link
        className="text-white hover:text-gray-300 justify-center items-center"
        href="#coldbar"
      >
        <Image src="/coldbar.png" width={35} height={35} alt="Coldbar" />
      </Link>
      <Link
        className="text-white hover:text-gray-300 justify-center items-center"
        href="#healtybar"
      >
        <Image src="/healthybar.png" width={35} height={35} alt="Healthybar" />
      </Link>
      <Link
        className="text-white hover:text-gray-300 justify-center items-center"
        href="#cakes"
      >
        <Image src="/cookie.png" width={35} height={35} alt="Herbalbar" />
      </Link>
      <Link
        className="text-white hover:text-gray-300 justify-center items-center"
        href="#extras"
      >
        <Image src="/logo.png" width={35} height={35} alt="Extras" />
      </Link>
    </div>
  );
};

export default BottomTabBar;
