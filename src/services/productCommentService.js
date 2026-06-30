import { COMMENT_ENDPOINT, PRODUCT_ENDPOINT } from "@/constants/endpoint";
const BASE_URL = process.env.NEXT_PUBLIC_PANDA_API_BASE_URL;

const getAuthHeaders = () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("accessToken");
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
  return {};
};

export const getProductComments = async (productId, limit = 10) => {
  const res = await fetch(
    `${BASE_URL}${PRODUCT_ENDPOINT}/${productId}${COMMENT_ENDPOINT}?limit=${limit}`,
    {
      headers: { ...getAuthHeaders() },
    },
  );
  if (!res.ok) throw new Error("댓글을 불러오지 못했습니다.");
  return res.json();
};

export const createComment = async (productId, content) => {
  const res = await fetch(
    `${BASE_URL}${PRODUCT_ENDPOINT}/${productId}${COMMENT_ENDPOINT}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json", ...getAuthHeaders() },
      body: JSON.stringify({ content }),
    },
  );
  if (!res.ok) throw new Error("댓글 등록에 실패했습니다.");
  return res.json();
};

export const updateComment = async (commentId, content) => {
  const res = await fetch(`${BASE_URL}${COMMENT_ENDPOINT}/${commentId}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json", ...getAuthHeaders() },
    body: JSON.stringify({ content }),
  });
  if (!res.ok) throw new Error("댓글 수정에 실패했습니다.");
  return res.json();
};

export const deleteComment = async (commentId) => {
  const res = await fetch(`${BASE_URL}${COMMENT_ENDPOINT}/${commentId}`, {
    method: "DELETE",
    headers: { ...getAuthHeaders() },
  });
  if (!res.ok) throw new Error("댓글 삭제에 실패했습니다.");
  return res.json();
};
