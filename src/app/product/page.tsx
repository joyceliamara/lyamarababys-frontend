/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import products from "./products.json";
import ProductCard from "@/components/ProductCard";
import formatCurrency from "@/utils/format-currency";

export default function ProductPage() {
  return (
    <div>
      <Header />
      <div className="flex gap-6 max-w-5xl mx-auto my-8">
        <div className="w-24 bg-slate-500">Carousel</div>
        <div className="flex-1">
          <img src={products[0].image} className="w-full" alt="" />
        </div>
        <div className="w-64 flex flex-col">
          <b className="text-xl">{products[0].title}</b>
          {!!products[0].priceWithDiscount ? (
            <>
              <span className="text-[#B0B0B0] line-through">
                de {formatCurrency(products[0].priceWithDiscount)}
              </span>
              <span>por {formatCurrency(products[0].price)}</span>
            </>
          ) : (
            <span>{formatCurrency(products[0].price)}</span>
          )}

          <span>12x de {formatCurrency(products[0].price / 12)}</span>
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
