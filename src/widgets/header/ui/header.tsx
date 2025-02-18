import React from "react";
import Link from "next/link";
import logo from "../../../../public/images/logo-big.svg";
import authIcon from "../../../../public/images/auth.svg";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="flex flex-row h-[60px] px-4 border-b border-[#e1e1e1] items-center">
      <Link href="/" className="flex flex-row gap-4 items-center">
        <Image src={logo} alt={"logo"} width={28} height={28} />
        <p className="hidden lg:flex">STEMPS</p>
      </Link>
      <ul className="hidden lg:flex flex-row gap-6 items-center ml-80">
        <li>
          <Link href="/about">О школе</Link>
        </li>
        <li>
          <Link href="/courses">Курсы</Link>
        </li>
        <li>
          <Link href="/library">Библиотека</Link>
        </li>
      </ul>
      <Link
        href="/auth"
        className="hidden lg:flex ml-auto flex-row gap-4 items-center"
      >
        <Image src={authIcon} alt={"logo"} width={30} height={28} />
        <p>Вход</p>
      </Link>
      <button
        className="flex lg:hidden bg-[#121212] h-7 w-[59px] text-[#f3f3f3] ml-auto justify-center items-center rounded
      "
      >
        Меню
      </button>
    </header>
  );
};
