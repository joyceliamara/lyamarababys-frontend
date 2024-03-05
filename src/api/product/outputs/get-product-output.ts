export type GetProductOutput = {
  id: string;
  sku: string;
  name: string;
  subtitle: string;
  composition: string;
  price: number;
  discount: number;
  createdAt: string;
  updatedAt: string;
  colors: Color[];
  images: Image[];
  quantities: [];
  favorited: boolean;
};

type Color = {
  id: string;
  name: string;
  code: string;
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
