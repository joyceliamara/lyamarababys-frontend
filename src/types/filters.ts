export default interface Filters {
  categories: {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    selected: boolean;
  }[];
  genders: {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    selected: boolean;
  }[];
  sizes: {
    id: string;
    name: string;
    createdAt: string;
    updatedAt: string;
    selected: boolean;
  }[];
  colors: {
    id: string;
    name: string;
    code: string;
    createdAt: string;
    updatedAt: string;
    selected: boolean;
  }[];
  products: {
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
  }[];
}
