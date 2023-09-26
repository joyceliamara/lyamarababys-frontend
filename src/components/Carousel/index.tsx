"use client";

/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import Button from "../Button";

export default function Carousel({ galery }: CarouselProps) {
  const limit = 3;
  const initialTake = 0;

  const [sortedImages, setSortedImages] = useState(
    galery.slice(initialTake, limit)
  );
  const [take, setTake] = useState(0);

  useEffect(() => {
    let concatImage: string[] = [];

    if (take + limit > galery.length) {
      concatImage = galery.slice(0, take + limit - galery.length);
    }

    setSortedImages(galery.slice(take, take + limit).concat(concatImage));
  }, [take]);

  function next() {
    setTake((prev) => (prev === galery.length ? 0 : prev + 1));
  }

  function previous() {
    setTake((prev) => (prev === 0 ? galery.length - 1 : prev - 1));
  }

  return (
    <div className="flex flex-col justify-between h-full">
      <Button onClick={previous} className="w-full" rounded="lg">
        Inicio
      </Button>
      {sortedImages.map((item, index) => (
        <img src={item} alt="" key={index} className="rounded-lg" />
      ))}
      <Button onClick={next} className="w-full" rounded="lg">
        Fim
      </Button>
    </div>
  );
}

interface CarouselProps {
  galery: string[];
}
