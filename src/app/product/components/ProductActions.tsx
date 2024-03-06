"use client";

import { GetProductOutput } from "@/api/product/outputs/get-product-output";
import Button from "@/components/Button";
import calcDiscount from "@/utils/calc-discount";
import formatCurrency from "@/utils/format-currency";
import { Heart } from "lucide-react";
import { useState } from "react";
import useProductActions from "../hooks/useProductActions";

export default function ProductActions({ product }: ProductActionsProps) {
  const [favorited, setFavorited] = useState(product.favorited);
  const { addToCart, addToFavorite, removeFromFavorite } = useProductActions(
    product.id
  );

  const onFavoriteButtonClick = async () => {
    try {
      if (favorited) {
        await removeFromFavorite(product.id);
      } else {
        await addToFavorite(product.id);
      }

      setFavorited((prev) => !prev);
    } catch (err) {
      console.log(err);
    }
  };

  return (
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
              {formatCurrency(calcDiscount(product.discount, product.price))}
            </span>
          </>
        ) : (
          <span className="text-xl">{formatCurrency(product.price ?? 0)}</span>
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
          variant={product.quantities.length ? "terciary" : "default"}
          rounded="lg"
          className="mt-4 w-full py-4"
          disabled={!product.quantities.length}
          // todo: ajustar o seletor de cor e tamanho
          // todo: adicionar uma informação visual quando for adicionado
          onClick={() =>
            addToCart({
              colorId: product.colors[0].id,
              productId: product.id,
              sizeId: (product.quantities as any)[0]?.sizeId,
            })
          }
        >
          {product.quantities.length ? "Comprar" : "Produto indisponível"}
        </Button>
        <Button
          variant="default"
          rounded="lg"
          className="mt-4 w-full gap-2 py-3"
          onClick={onFavoriteButtonClick}
        >
          <Heart size={18} fill="black" />{" "}
          {favorited ? "Remover dos favoritos" : "Adicionar aos favoritos"}
        </Button>
      </div>
    </div>
  );
}

type ProductActionsProps = {
  product: GetProductOutput;
};
