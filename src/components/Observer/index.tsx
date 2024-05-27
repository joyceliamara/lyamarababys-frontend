"use client";
import { useEffect, useRef } from "react";

export default function Observer({ onObserve }: ObserverProps) {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio <= 0) return;

      if (onObserve) {
        onObserve();
      }
    });
    // start observing
    intersectionObserver.observe(
      document.querySelector("#scroller") as Element
    );

    observerRef.current = intersectionObserver;

    return () => {
      intersectionObserver.disconnect();
    };
  }, []);

  return <div id="scroller" />;
}

interface ObserverProps {
  onObserve?: () => void;
}
