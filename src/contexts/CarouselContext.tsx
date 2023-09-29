"use client";

import { ReactNode, createContext, useState } from "react";

export const CarouselContext = createContext<ICarouselContext>({} as any);

export function CarouselProvider({ children }: CarouselProviderProps) {
  const [focusedImage, setFocusedImage] = useState("");

  function changeFocusedImage(image: string) {
    setFocusedImage(image);
  }

  return (
    <CarouselContext.Provider value={{ focusedImage, changeFocusedImage }}>
      {children}
    </CarouselContext.Provider>
  );
}

interface CarouselProviderProps {
  children: ReactNode;
}

interface ICarouselContext {
  focusedImage: string;
  changeFocusedImage: (image: string) => void;
}
