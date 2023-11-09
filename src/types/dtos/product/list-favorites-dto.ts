export default interface ListFavoritesDto {
  id: string;
  sku: string;
  name: string;
  subtitle: string;
  composition: string;
  price: number;
  discount: number;
  images: Image[];
  createdAt: string;
  updatedAt: string;
}

interface Image {
  id: string;
  url: string;
  main: boolean;
  createdAt: string;
  updatedAt: string;
  productId: string;
}
