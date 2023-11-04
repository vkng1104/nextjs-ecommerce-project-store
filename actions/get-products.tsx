import qs from "query-string";

import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  isFeatured?: boolean;
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      isFeatured: query.isFeatured,
      categoryId: query.categoryId,
      sizeId: query.sizeId,
      colorId: query.colorId,
    },
  });
  const res = await fetch(url);
  return res.json();
};

export default getProducts;
