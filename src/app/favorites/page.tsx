import Button from "@/components/Button";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Select } from "@/components/Select";
import { DM_Serif_Display } from "next/font/google";
import products from "./products.json";
import ProductCard from "@/components/ProductCard";

const dmSerifDisplay = DM_Serif_Display({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Favorites() {
  return (
    <div>
      <Header />
      <div className="flex gap-4 m-6">
        <b className="text-xl" style={dmSerifDisplay.style}>
          Minha lista de desejos
        </b>
        <Button variant="primary" rounded="sm" size="sm">
          5 Itens
        </Button>
      </div>
      <div className="flex p-6 justify-between bg-[#F1F1F1]">
        <div className="flex gap-4">
          <Select name="" id="" rounded="sm">
            <option value="">Categoria</option>
          </Select>
          <Select name="" id="" rounded="sm">
            <option value="">Status</option>
          </Select>
          <Button variant="mono" rounded="sm" className="border">
            Todos os filtros
          </Button>
        </div>
        <div className="flex gap-4 items-center">
          <span>Filtrar por</span>
          <Select name="" id="" className="h-full" rounded="sm">
            <option value="">Adicionado recentemente</option>
          </Select>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-16 m-8">
        {products.map((item, index) => (
          <ProductCard
            key={index}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            price={item.price}
            priceWithDiscount={item.priceWithDiscount}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}
