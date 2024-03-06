export type GetFavoritesOutput = {
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
}[];

type Image = {
  id: string;
  url: string;
  main: boolean;
  createdAt: string;
  updatedAt: string;
  productId: string;
};
