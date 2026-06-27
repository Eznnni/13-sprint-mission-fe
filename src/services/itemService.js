import { ITEM_ENDPOINT, PRODUCT_ENDPOINT } from "@/constants/endpoint";
import { defaultFetch } from "./fetchClient";

export const getItems = async ({
  page = 1,
  pageSize = 10,
  sort = "recent",
  keyword = "",
} = {}) => {
  const params = new URLSearchParams({
    page: String(page),
    pageSize: String(pageSize),
    orderBy: sort,
  });

  if (keyword) {
    params.append("keyword", keyword);
  }

  return defaultFetch(`${PRODUCT_ENDPOINT}?${params.toString()}`, {
    cache: "no-store",
  });
};
