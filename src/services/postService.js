import { POST_ENDPOINT } from "@/constants/endpoint";
import { api } from "@/lib/api";

export async function createPost(data) {
  return await api.post(`${POST_ENDPOINT}`, data);
}

export async function updatePost(id, data) {
  return await api.patch(`${POST_ENDPOINT}/${id}`, data);
}

export async function getPostDetail(id) {
  return await api.get(`${POST_ENDPOINT}/${id}`);
}

export async function getPostList({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
}) {
  const query = new URLSearchParams({
    page: String(page),
    pageSize: String(pageSize),
    orderBy,
    ...(keyword && { keyword }),
  }).toString();

  return await api.get(`${POST_ENDPOINT}?${query}`);
}

export async function deletePost(id) {
  return await api.get(`${POST_ENDPOINT}/${id}`);
}
