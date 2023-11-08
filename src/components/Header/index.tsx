"use client";
import logo from "../../assets/images/header/logo.png";
import anchor from "../../assets/images/header/anchor.png";
import Image from "next/image";
import {
  ShoppingBag,
  Heart,
  ChevronDown,
  Menu,
  X,
  User2,
  Package,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpened, setMenuOpened] = useState(false);

  function openMenu() {
    setMenuOpened(true);
    const html = document.querySelector("html");

    if (!html) return;

    html.style.overflowY = "hidden";
  }

  function closeMenu() {
    setMenuOpened(false);

    const html = document.querySelector("html");

    if (!html) return;

    html.style.overflowY = "scroll";
  }

  return (
    <>
      <header className="flex justify-between items-center px-6 lg:px-12 py-8">
        <div className="flex gap-1 lg:gap-2">
          <Image className="inline w-[80%] lg:w-[100%]" src={logo} alt="" />
          <Image className="inline w-4 ml-2" src={anchor} alt="" />
        </div>
        <nav className="h-fit">
          {/* desktop */}
          <ul className="hidden lg:flex gap-12">
            <li className="cursor-pointer">
              <Link href="/">HOME</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/products">PRODUTOS</Link>
            </li>
            <li>
              <Link href="/login" className="flex cursor-pointer">
                ENTRAR <ChevronDown />
              </Link>
            </li>
            <li className="cursor-pointer">
              <ShoppingBag />
            </li>
            <li className="cursor-pointer">
              <Heart />
            </li>
          </ul>
          {/* mobile */}
          <ul className="flex lg:hidden gap-5">
            <li className="cursor-pointer">
              <ShoppingBag />
            </li>
            <li className="cursor-pointer">
              <Menu onClick={openMenu} />
            </li>
          </ul>
        </nav>
      </header>
      {menuOpened && (
        <div className="bg-black/80 fixed top-0 w-full h-screen">
          <div className="w-72 h-full bg-[#F5F5f5] absolute right-0 p-4">
            <div className="flex justify-between mt-2">
              <span>Menu</span>
              <X onClick={closeMenu} className="cursor-pointer" />
            </div>
            <div className="flex gap-4 p-4 mt-4 bg-white rounded-md text-[#EEB8BC]">
              <User2 />
              <span>Faça seu login</span>
            </div>
            <div className="flex mt-6 gap-2">
              <div className="flex flex-col flex-1 bg-white items-center rounded-md py-4 gap-1">
                <Heart />
                Favoritos
              </div>
              <div className="flex flex-col flex-1 bg-white items-center rounded-md py-4 gap-1">
                <Package />
                Pedidos
              </div>
            </div>
            <ul className="flex flex-col mt-6 gap-2 text-[#303030]">
              <li className="bg-white rounded-md py-2 px-3 cursor-pointer">
                Home
              </li>
              <li className="flex justify-between bg-white rounded-md py-2 px-3 cursor-pointer">
                Roupas <ChevronRight color="#7C969D" />
              </li>
              <li className="flex justify-between bg-white rounded-md py-2 px-3 cursor-pointer">
                Bolsas <ChevronRight color="#7C969D" />
              </li>
              <li className="flex justify-between bg-white rounded-md py-2 px-3 cursor-pointer">
                Brinquedos <ChevronRight color="#7C969D" />
              </li>
              <li className="flex justify-between bg-white rounded-md py-2 px-3 cursor-pointer">
                Acessórios <ChevronRight color="#7C969D" />
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
