"use client";

import { GetFavoritesOutput } from "@/api/product/outputs/get-favorites-output";
import ProductApi from "@/api/product/product.api";
import Sentry from "@/services/sentry";
import { useEffect, useState } from "react";

export default function useFavorites() {
  let [favorites, setFavorites] = useState<GetFavoritesOutput>([]);

  const fetchData = async () => {
    try {
      const { data } = await ProductApi.getFavorited();

      setFavorites(data);
    } catch (err) {
      console.log(err);
      Sentry.captureException(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { favorites };
}
