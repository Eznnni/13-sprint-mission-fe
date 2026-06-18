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
