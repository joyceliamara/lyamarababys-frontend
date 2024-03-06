/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import products from "../products.json";
import ProductCard from "@/components/ProductCard";
import formatCurrency from "@/utils/format-currency";
import Button from "@/components/Button";
import { Heart } from "lucide-react";
import Carousel from "@/components/Carousel";
import { CarouselProvider } from "@/contexts/CarouselContext";
import GetProductByIdDto from "@/types/dtos/product/get-product-by-id-dto";
import calcDiscount from "@/utils/calc-discount";
import listColors from "@/utils/list-colors";
import request from "@/api/request";
import useProduct from "../hooks/useProduct";
import { redirect } from "next/navigation";
import ProductActions from "../components/ProductActions";

export default async function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const { product } = await useProduct(params.productId);

  if (!product) {
    redirect("/products");
  }

  return (
    <div>
      <Header />
      <div className="flex gap-6 max-w-5xl mx-auto my-8 max-lg:flex-col max-lg:max-w-xl max-sm:mx-4">
        <div className="flex flex-1  gap-6">
          <CarouselProvider>
            <div className="w-32 max-lg:w-24 max-sm:w-12">
              <Carousel galery={product.images.map((i) => i.url)} />
            </div>
            <div className="flex-1 ">
              <FocusedImage
                url={product.images.find((i) => i.main)?.url ?? ""}
              />
            </div>
          </CarouselProvider>
        </div>
        <ProductActions product={product} />
      </div>

      <div className="max-w-4xl mx-auto my-16 max-sm:mx-4 max-lg:mx-12">
        <h1 className="text-center font-bold text-3xl">Detalhes do produto</h1>
        <p className="mt-8">
          <b className="text-[#7C969D]">Descrição</b>
        </p>
        <p>{product.subtitle}</p>
        <p className="mt-3">
          <b className="text-[#7C969D]">Composição</b>
        </p>
        <p>{product.composition}</p>
        <p className="mt-3">
          <b className="text-[#7C969D]">Cor</b>
        </p>
        <p>{listColors(product.colors.map((i) => i.name) ?? [])}</p>
      </div>
      <div className="mb-8 mx-4">
        <h1 className="text-center font-bold text-3xl mb-8">Do mesmo estilo</h1>
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-4xl m-auto w-fit">
          {products.map((item, index) => (
            <ProductCard
              key={index}
              image={item.image}
              title={item.title}
              subtitle={item.subtitle as string}
              price={item.price}
              priceWithDiscount={item.priceWithDiscount}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

function FocusedImage({ url }: { url: string }) {
  return <img src={url} className="w-full select-none" alt="" />;
}
