type Category = {
  id: number;
  name: string;
  productsIds: string[];
};

export const CATEGORIES: Category[] = [
  {
    id: 1,
    name: "Consumer Product",
    productsIds: ["s1", "s2", "s3", "s4", "s5"],
  },
  { id: 2, name: "Lawn & Public green", productsIds: ["s6"] },
  { id: 3, name: "Professional", productsIds: ["s7", "s8"] },
  { id: 4, name: "Slopes & Banks", productsIds: ["s9"] },
];
