export type GetCartOutput = {
  id: string;
  productId: string;
  userId: string;
  quantity: number;
  colorId: string;
  sizeId: string;
  createdAt: string;
  updatedAt: string;
  orderId: string | null;
  product: Product;
  color: Color;
  size: Size;
}[];

type Product = {
  id: string;
  sku: string;
  name: string;
  subtitle: string;
  composition: string;
  price: number;
  discount: number;
  createdAt: string;
  updatedAt: string;
  images: Image[];
};

type Color = {
  id: string;
  name: string;
  code: string;
  createdAt: string;
  updatedAt: string;
};

type Size = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

type Image = {
  id: string;
  url: string;
  main: boolean;
  createdAt: string;
  updatedAt: string;
  productId: string;
};
