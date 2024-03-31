"use client";
import logo from "../../assets/images/header/logo.png";
import anchor from "../../assets/images/header/anchor.png";
import Image from "next/image";
import {
  ShoppingBag,
  Heart,
  Menu,
  X,
  User2,
  Package,
  ChevronRight,
  UserCircle,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { userStore } from "@/store/user-store";

export default function Header() {
  const [menuOpened, setMenuOpened] = useState(false);
  const { user } = userStore();

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
      <header className="flex justify-between items-center px-6 lg:px-12 py-8  bg-[#edf4f5]">
        <Link href="/">
          <div className="flex gap-1 lg:gap-2">
            <Image
              className="hidden w-[80%] lg:w-[100%] lg:inline"
              src={logo}
              alt=""
            />
            <Image className="inline w-4 ml-2" src={anchor} alt="" />
          </div>
        </Link>
        <nav className="h-fit flex gap-12">
          {/* desktop */}
          <ul className="hidden lg:flex gap-4">
            <li className="cursor-pointer">
              <Link href="/">HOME</Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/products">PRODUTOS</Link>
            </li>
          </ul>
          <ul className="hidden lg:flex gap-4">
            <li className="cursor-pointer">
              <Link href="/cart">
                <ShoppingBag />
              </Link>
            </li>
            <li className="cursor-pointer">
              <Link href="/favorites">
                <Heart />
              </Link>
            </li>
            <li>
              {user ? (
                <Link href="/profile">
                  <UserCircle />
                </Link>
              ) : (
                <Link href="/login">
                  <UserCircle />
                </Link>
              )}
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
        <div className="bg-black/80 fixed top-0 w-full h-screen z-50">
          <div className="w-72 h-full bg-[#F5F5f5] absolute right-0 p-4">
            <div className="flex justify-between mt-2">
              <span>Menu</span>
              <X onClick={closeMenu} className="cursor-pointer" />
            </div>
            {user ? (
              <Link href="/profile">
                <div className="flex gap-4 p-4 mt-4 bg-white rounded-md text-[#EEB8BC]">
                  <User2 />
                  <span>{user.name.split(" ").slice(0, 2).join(" ")}</span>
                </div>
              </Link>
            ) : (
              <Link href="/login">
                <div className="flex gap-4 p-4 mt-4 bg-white rounded-md text-[#EEB8BC]">
                  <User2 />
                  <span>Faça seu login</span>
                </div>
              </Link>
            )}

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
