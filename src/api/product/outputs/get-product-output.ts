export type GetProductOutput = {
  id: string;
  sku: string;
  name: string;
  description: string;
  composition: string;
  price: number;
  discount: number;
  path: string;
  images: {
    id: string;
    url: string;
    main: string;
  }[];
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
