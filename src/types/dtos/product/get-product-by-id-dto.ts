export default interface GetProductByIdDto {
  id: string;
  sku: string;
  name: string;
  subtitle: string;
  composition: string;
  price: number;
  discount: number;
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  colors: Color[];
  images: Image[];
  quantities: Quantity[];
}

interface Color {
  id: string;
  name: string;
  code: string;
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

interface Quantity {
  id: string;
  createdAt: string;
  updatedAt: string;
  sizeId: string;
  count: number;
  productId: string;
  size: Size;
}

interface Size {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}
