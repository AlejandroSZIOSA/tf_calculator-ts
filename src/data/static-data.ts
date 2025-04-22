type Category = {
  id: number;
  name: string;
  productsIds: string[];
};

export const CATEGORIES: Category[] = [
  { id: 1, name: "cat1", productsIds: ["s1", "s2", "s3"] },
  { id: 2, name: "cat2", productsIds: ["s4", "s5", "s6"] },
  { id: 3, name: "cat3", productsIds: ["s7", "s8", "s9"] },
];
