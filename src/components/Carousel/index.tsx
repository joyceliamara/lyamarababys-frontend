"use client";

/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useContext } from "react";
import Button from "../Button";
import { CarouselContext } from "@/contexts/CarouselContext";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Carousel({ galery }: CarouselProps) {
  const { changeFocusedImage } = useContext(CarouselContext);

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

    const newSortedImages = galery
      .slice(take, take + limit)
      .concat(concatImage);

    setSortedImages(newSortedImages);

    changeFocusedImage(newSortedImages[1]);
  }, [take]);

  function next() {
    setTake((prev) => (prev === galery.length ? 0 : prev + 1));
  }

  function previous() {
    setTake((prev) => (prev === 0 ? galery.length - 1 : prev - 1));
  }

  return (
    <div className="flex flex-col justify-between h-full select-none">
      <Button onClick={previous} className="w-full" rounded="lg">
        <ChevronUp />
      </Button>
      {sortedImages.map((item, index) => (
        <img src={item} alt="" key={index} className="rounded-lg" />
      ))}
      <Button onClick={next} className="w-full" rounded="lg">
        <ChevronDown />
      </Button>
    </div>
  );
}

interface CarouselProps {
  galery: string[];
}
