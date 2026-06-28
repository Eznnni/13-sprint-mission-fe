const BASE_URL = process.env.NEXT_PUBLIC_PANDA_API_BASE_URL;

const getAuthHeaders = () => {
  if (typeof window !== "undefined") {
    const token = localStorage.getItem("accessToken");
    return token ? { Authorization: `Bearer ${token}` } : {};
  }
  return {};
};

export const productService = {
  getDetail: async (id) => {
    const res = await fetch(`${BASE_URL}/products/${id}`, {
      headers: { ...getAuthHeaders() },
    });
    if (!res.ok) throw new Error("상품을 불러오지 못했습니다.");
    return res.json();
  },

  update: async (id, data) => {
    const res = await fetch(`${BASE_URL}/products/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json", ...getAuthHeaders() },
      body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("상품 수정에 실패했습니다.");
    return res.json();
  },

  delete: async (id) => {
    const res = await fetch(`${BASE_URL}/products/${id}`, {
      method: "DELETE",
      headers: { ...getAuthHeaders() },
    });
    if (!res.ok) throw new Error("상품 삭제에 실패했습니다.");
    return res.json();
  },

  like: async (id) => {
    const res = await fetch(`${BASE_URL}/products/${id}/favorite`, {
      method: "POST",
      headers: { ...getAuthHeaders() },
    });
    if (!res.ok) throw new Error("좋아요 처리에 실패했습니다.");
    return res.json();
  },

  unlike: async (id) => {
    const res = await fetch(`${BASE_URL}/products/${id}/favorite`, {
      method: "DELETE",
      headers: { ...getAuthHeaders() },
    });
    if (!res.ok) throw new Error("좋아요 취소에 실패했습니다.");
    return res.json();
  },
};
