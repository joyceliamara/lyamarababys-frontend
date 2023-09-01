import Image from "next/image";
import acessories from "../../assets/images/categories/acessories.png";
import bags from "../../assets/images/categories/bags.png";
import clothes from "../../assets/images/categories/clothes.png";
import toys from "../../assets/images/categories/toys.png";
import Button from "../Button";

export default function Categories() {
  return (
    <div>
      <div className="flex justify-center gap-10 mt-10">
        <div>
          <Image src={acessories} alt="" />
          <p className="mt-2 text-center">Acessórios</p>
        </div>
        <div>
          <Image src={bags} alt="" />
          <p className="mt-2 text-center">Bolsas</p>
        </div>
        <div>
          <Image src={clothes} alt="" />
          <p className="mt-2 text-center">Roupas</p>
        </div>
        <div>
          <Image src={toys} alt="" />
          <p className="mt-2 text-center">Brinquedos</p>
        </div>
      </div>
      <Button variant="secondary" className="px-2 m-auto mt-10">
        VER TUDO
      </Button>
    </div>
  );
}
