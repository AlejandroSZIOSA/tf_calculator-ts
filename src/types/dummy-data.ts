export type Category = {
  id: number;
  name: string;
  productsIds: number[];
};

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  publishDate: string;
};

/* export type User = {
  id: string;
  email: string;
  password: string;
};
 */
