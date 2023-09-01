import logo from "../../assets/images/header/logo.png";
import anchor from "../../assets/images/header/anchor.png";
import Image from "next/image";
import { ShoppingBag, Heart, ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-12 py-8">
      <div className="flex gap-4">
        <Image src={logo} alt="" />
        <Image src={anchor} alt="" />
      </div>
      <nav className="h-fit">
        <ul className="flex gap-12">
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
      </nav>
    </header>
  );
}
