"use client";

import Banner from "@/components/Banner";
import Categories from "@/components/Categories";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Products from "@/components/Products";

export default function Home() {
  return (
    <div>
      <Header />
      <Banner />
      <Categories />
      {/* @ts-expect-error Server Component */}
      <Products />
      <Footer />
    </div>
  );
}
