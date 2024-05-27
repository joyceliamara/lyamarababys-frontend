type Image = {
  id: string;
  url: string;
  main: boolean;
  createdAt: string;
  updatedAt: string;
  productId: string;
};

type Category = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type Size = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

export type Color = {
  id: string;
  name: string;
  code: string;
  createdAt: string;
  updatedAt: string;
};

type Quantity = {
  id: string;
  colorId: string;
  sizeId: string;
  units: number;
  productId: string;
  size: Size;
  color: Color;
};

export type GetProductOutput = {
  id: string;
  sku: string;
  name: string;
  description: string;
  composition: string;
  price: number;
  discount: number;
  path: string;
  createdAt: string;
  updatedAt: string;
  categoryId: string;
  genderId: string | null;
  images: Image[];
  category: Category;
  gender: string | null;
  quantities: Quantity[];
  favorited: boolean;
};
