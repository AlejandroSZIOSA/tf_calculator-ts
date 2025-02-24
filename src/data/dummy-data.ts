import { Category, Product, User } from "../types/dummy-data";

export const CATEGORIES: Category[] = [
  { id: 1, name: "cat1", productsIds: [1, 2, 3] },
  { id: 2, name: "cat2", productsIds: [4, 5, 6] },
  { id: 3, name: "cat3", productsIds: [7, 8, 9] },
];

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "product1",
    description: "desc1",
    price: 10,
    publishDate: "2022-01-01",
  },
  {
    id: 2,
    name: "product2",
    description: "desc2",
    price: 20,
    publishDate: "2022-02-01",
  },
  {
    id: 3,
    name: "product3",
    description: "desc3",
    price: 30,
    publishDate: "2022-03-01",
  },
  {
    id: 4,
    name: "product4",
    description: "desc4",
    price: 40,
    publishDate: "2022-04-01",
  },
];

export const USER_TEST: User = {
  id: "userTest",
  email: "user1",
  password: "123",
};
