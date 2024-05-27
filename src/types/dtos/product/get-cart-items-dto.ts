export default interface GetCartItemsDto {
  id: string;
  productId: string;
  userId: string;
  quantity: number;
  colorId: string;
  sizeId: string;
  createdAt: string;
  updatedAt: string;
  orderId: null;
  product: Product;
  size: Size;
  color: Color;
}

interface Product {
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
}

interface Image {
  id: string;
  url: string;
  main: boolean;
  createdAt: string;
  updatedAt: string;
  productId: string;
}

interface Size {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

interface Color {
  id: string;
  name: string;
  code: string;
  createdAt: string;
  updatedAt: string;
}
