/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import products from "./products.json";
import ProductCard from "@/components/ProductCard";
import formatCurrency from "@/utils/format-currency";
import Button from "@/components/Button";
import { Heart } from "lucide-react";
import Carousel from "@/components/Carousel";

export default function ProductPage() {
  return (
    <div>
      <Header />
      <div className="flex gap-6 max-w-5xl mx-auto my-8">
        <div className="w-32">
          <Carousel galery={products[0].album as string[]} />
        </div>
        <div className="flex-1">
          <img src={products[0].image} className="w-full" alt="" />
        </div>
        <div className="w-80 flex flex-col justify-between">
          <b className="text-3xl font-medium">{products[0].subtitle}</b>

          <div className="flex flex-col">
            {!!products[0].priceWithDiscount ? (
              <>
                <span className="text-[#B0B0B0] text-xl line-through ">
                  de {formatCurrency(products[0].priceWithDiscount)}
                </span>
                <span>por {formatCurrency(products[0].price)}</span>
              </>
            ) : (
              <span className="text-xl">
                {formatCurrency(products[0].price)}
              </span>
            )}
            <span className="text-2xl text-[#7C969D] font-light ">
              12x de {formatCurrency(products[0].price / 12)}
            </span>
            <span className="font-light">
              <span className="font-bold text-xl">
                {formatCurrency(products[0].price)}
              </span>{" "}
              no pix ou boleto
            </span>
          </div>
          <div>
            <span>Cor: Vermelho</span>
            <div className="flex gap-2">
              <div className="w-4 h-4 rounded-full bg-red-500" />
              <div className="w-4 h-4 rounded-full bg-green-500" />
              <div className="w-4 h-4 rounded-full bg-blue-500" />
              <div className="w-4 h-4 rounded-full bg-red-500" />
            </div>
          </div>

          <div>
            <Button
              variant="terciary"
              rounded="lg"
              className="mt-4 w-full py-4"
            >
              Comprar
            </Button>
            <Button
              variant="default"
              rounded="lg"
              className="mt-4 w-full gap-2 py-3"
            >
              <Heart size={18} fill="black" /> Adicionar aos favoritos
            </Button>
          </div>
        </div>
      </div>

      <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-4xl m-auto">
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
