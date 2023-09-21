import logo from "../../assets/images/header/logo.png";
import anchor from "../../assets/images/header/anchor.png";
import Image from "next/image";
import { ShoppingBag, Heart, ChevronDown, Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 lg:px-12 py-8">
      <div className="flex gap-1 lg:gap-2">
        <Image className="inline w-[80%] lg:w-[100%]" src={logo} alt="" />
        <Image className="inline w-4 ml-2" src={anchor} alt="" />
      </div>
      <nav className="h-fit">
        {/* desktop */}
        <ul className="hidden lg:flex gap-12">
          <li>HOME</li>
          <li>PRODUTOS</li>
          <li className="flex">
            ENTRAR <ChevronDown />
          </li>
          <li>
            <ShoppingBag />
          </li>
          <li>
            <Heart />
          </li>
        </ul>
        {/* mobile */}
        <ul className="flex lg:hidden gap-5">
          <li>
            <ShoppingBag />
          </li>
          <li>
            <Menu />
          </li>
        </ul>
      </nav>
    </header>
  );
}
