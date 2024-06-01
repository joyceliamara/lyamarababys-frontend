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

export type GetFavoritesOutput = {
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
  genderId: null | string;
  images: Image[];
  category: Category;
  gender: null | string;
}[];
