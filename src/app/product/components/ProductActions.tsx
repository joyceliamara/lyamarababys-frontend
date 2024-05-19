"use client";

import {
  Color,
  GetProductOutput,
  Size,
} from "@/api/product/outputs/get-product-output";
import Button from "@/components/Button";
import calcDiscount from "@/utils/calc-discount";
import formatCurrency from "@/utils/format-currency";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import useProductActions from "../hooks/useProductActions";

export default function ProductActions({ product }: ProductActionsProps) {
  const [favorited, setFavorited] = useState(product.favorited);
  const [selectedColor, setSelectedColor] = useState<Color | null>(null);
  const [selectedSize, setSelectedSize] = useState<Size | null>(null);
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

      setFavorited((prev: any) => !prev);
    } catch (err) {
      console.log(err);
    }
  };

  const available = !product.quantities.every((i) => !i.units);

  return (
    <div className="w-80 max-lg:w-full flex flex-col justify-between">
      <div>
        <b className="text-3xl font-medium">{product.name}</b>
        {!available && <p>(indisponível)</p>}
      </div>

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
      {/* <div>
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
      </div> */}
      <div>
        <div>
          {selectedColor ? (
            <span>Cor: {selectedColor.name.toLocaleLowerCase()}</span>
          ) : (
            <span>Selecione uma cor:</span>
          )}
          <div className="flex gap-2">
            {product.quantities?.map((i) => (
              <div
                key={i.id}
                className={`w-4 h-4 rounded-full cursor-pointer relative`}
                style={{
                  background: i.color.code,
                  border:
                    selectedColor?.id === i.color.id
                      ? "2px solid #ccc"
                      : i.units
                      ? ""
                      : "2px solid black",
                  opacity: i.units ? 1 : 0.5,
                  cursor: i.units ? "pointer" : "not-allowed",
                }}
                onClick={() => i.units && setSelectedColor(i.color)}
              >
                {!i.units && (
                  <div className="w-full h-[20%] bg-black rotate-45 absolute top-[40%]" />
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          {selectedSize ? (
            <span>Tamanho: {selectedSize.name.toLocaleLowerCase()}</span>
          ) : (
            <span>Selecione um tamanho:</span>
          )}
          <div className="flex gap-2">
            {product.quantities?.map((i) => (
              <div
                key={i.id}
                className="px-2 py-1 cursor-pointer border rounded-lg text-sm"
                style={{
                  border:
                    selectedSize?.id === i.size.id
                      ? "1px solid #ccc"
                      : i.units
                      ? ""
                      : "1px solid black",
                  opacity: i.units ? 1 : 0.5,
                  cursor: i.units ? "pointer" : "not-allowed",
                  backgroundColor: selectedSize?.id === i.size.id ? "#ccc" : "",
                }}
                onClick={() => i.units && setSelectedSize(i.size)}
              >
                {i.size.name}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div>
        <Button
          variant={
            available && selectedColor && selectedSize ? "terciary" : "default"
          }
          rounded="lg"
          className="mt-4 w-full py-4"
          disabled={!selectedColor || !selectedSize || !available}
          // todo: ajustar o seletor de cor e tamanho
          // todo: adicionar uma informação visual quando for adicionado
          onClick={() =>
            addToCart({
              colorId: selectedColor!.id,
              productId: product.id,
              sizeId: selectedSize!.id,
            })
          }
        >
          {available ? "Adicionar ao carrinho" : "Produto indisponível"}
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
