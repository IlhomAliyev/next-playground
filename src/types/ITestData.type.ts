export interface IProduct {
  id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface IGetProductsResponse {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}
