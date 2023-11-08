"use client";

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
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import api from "@/services/api";
import GetProductByIdDto from "@/types/dtos/product/get-product-by-id-dto";
import calcDiscount from "@/utils/calc-discount";
import listColors from "@/utils/list-colors";

export default function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const router = useRouter();

  const [product, setProduct] = useState<GetProductByIdDto | undefined>(
    undefined
  );
  const [favorited, setFavorited] = useState(false);
  const [loading, setLoading] = useState(true);

  const fetchProductData = async () => {
    try {
      const token = localStorage.getItem("@lyamarababys-token");

      const { data } = await api.get<GetProductByIdDto>(
        `product/${params.productId}`,
        {
          headers: {
            Authorization: token ? `Bearer ${token}` : undefined,
          },
        }
      );

      setProduct(data);
      setFavorited(data.favorited);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  const addToFavorite = async () => {
    const token = localStorage.getItem("@lyamarababys-token");

    if (!token) {
      router.push("/login");

      return;
    }

    try {
      await api.post(
        `product/favorite/${params.productId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setFavorited(true);
    } catch (err) {
      console.log(err);
    }
  };

  const removeFromFavorite = async () => {
    const token = localStorage.getItem("@lyamarababys-token");

    if (!token) {
      router.push("/login");

      return;
    }

    try {
      await api.post(
        `product/unfavorite/${params.productId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setFavorited(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Header />
      {!loading && product ? (
        <>
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
            <div className="w-80 max-lg:w-full flex flex-col justify-between">
              <b className="text-3xl font-medium">{product.subtitle}</b>

              <div className="flex flex-col">
                {!!product.discount ? (
                  <>
                    <span className="text-[#B0B0B0] text-xl line-through ">
                      de {formatCurrency(product.price)}
                    </span>
                    <span>
                      por{" "}
                      {formatCurrency(
                        calcDiscount(product.discount, product.price)
                      )}
                    </span>
                  </>
                ) : (
                  <span className="text-xl">
                    {formatCurrency(product.price ?? 0)}
                  </span>
                )}
                <span className="text-2xl text-[#7C969D] font-light ">
                  12x de{" "}
                  {formatCurrency(
                    (product.discount
                      ? calcDiscount(product.discount, product.price)
                      : product.price ?? 0) / 12
                  )}
                </span>
                <span className="font-light">
                  <span className="font-bold text-xl">
                    {formatCurrency(
                      product.discount
                        ? calcDiscount(product.discount, product.price)
                        : product.price ?? 0
                    )}
                  </span>{" "}
                  no pix ou boleto
                </span>
              </div>
              <div>
                <span>Cor: {product.colors[0].name}</span>
                <div className="flex gap-2">
                  {product.colors &&
                    product.colors.map((i) => (
                      <div
                        key={i.id}
                        className="w-4 h-4 rounded-full cursor-pointer"
                        style={{
                          background: i.code,
                        }}
                      />
                    ))}
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
                  onClick={favorited ? removeFromFavorite : addToFavorite}
                >
                  <Heart size={18} fill="black" />{" "}
                  {favorited
                    ? "Remover dos favoritos"
                    : "Adicionar aos favoritos"}
                </Button>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto my-16 max-sm:mx-4 max-lg:mx-12">
            <h1 className="text-center font-bold text-3xl">
              Detalhes do produto
            </h1>
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
            <h1 className="text-center font-bold text-3xl mb-8">
              Do mesmo estilo
            </h1>
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
        </>
      ) : (
        <div>Loading</div>
      )}

      <Footer />
    </div>
  );
}

function FocusedImage({ url }: { url: string }) {
  return <img src={url} className="w-full select-none" alt="" />;
}
