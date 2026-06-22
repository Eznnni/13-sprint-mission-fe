import { api } from "@/lib/api";
import { COMMENT_ENDPOINT, POST_ENDPOINT } from "@/constants/endpoint";

export async function getPostComments(
  articleId,
  { limit = 10, lastId, sort = "recent" } = {},
) {
  const query = new URLSearchParams({
    limit: String(limit),
    sort,
  });

  if (lastId) {
    query.append("lastId", String(lastId));
  }

  return await api.get(
    `${POST_ENDPOINT}/${articleId}/comments?${query.toString()}`,
  );
}

export async function createPostComment(articleId, content) {
  return await api.post(`${POST_ENDPOINT}/${articleId}/comments`, {
    content,
  });
}

export async function getProductComments(
  productId,
  { limit = 10, lastId, sort = "recent" } = {},
) {
  const query = new URLSearchParams({
    limit: String(limit),
    sort,
  });

  if (lastId) {
    query.append("lastId", String(lastId));
  }

  return await api.get(
    `${PRODUCT_ENDPOINT}/${productId}/comments?${query.toString()}`,
  );
}

export async function createProductComment(productId, content) {
  return await api.post(`${PRODUCT_ENDPOINT}/${productId}/comments`, {
    content,
  });
}

export async function updateComment(commentId, content) {
  return await api.patch(`${COMMENT_ENDPOINT}/${commentId}`, { content });
}

export async function deleteComment(commentId) {
  return await api.delete(`${COMMENT_ENDPOINT}/${commentId}`);
}
