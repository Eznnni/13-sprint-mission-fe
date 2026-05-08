import { api } from "./api.js";

const PRODUCT_ENDPOINT = "/products";

export const ORDER_BY = {
  RECENT: "recent",
  FAVORITE: "favorite",
};

export const productApi = {
  getProductList: async ({
    page = 1,
    pageSize = 10,
    orderBy = ORDER_BY.RECENT,
    searchTerm,
  }) => {
    const params = new URLSearchParams();
    const offset = (Number(page) - 1) * Number(pageSize);
    params.append("offset", offset);
    if (pageSize) params.append("limit", pageSize);
    if (orderBy) params.append("sort", orderBy);
    if (searchTerm) params.append("search", searchTerm);

    return await api.get(`${PRODUCT_ENDPOINT}?${params}`);
  },
  createProduct: async (newProduct) => {
    return await api.post(`${PRODUCT_ENDPOINT}`, newProduct);
  },
};
