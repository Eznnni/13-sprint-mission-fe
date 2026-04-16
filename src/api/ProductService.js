const BASE_URL = "https://panda-market-api-crud.vercel.app";

export async function getProductList(page, pageSize, keyword) {
  try {
    const response = await fetch(
      `${BASE_URL}/products?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
    );

    if (!response.ok) {
      throw new Error(`상품 목록 조회 실패 (상태: ${response.status})`);
    }
    console.log(`상품 목록 조회 성공, 상태: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function getProduct(id) {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`);

    if (!response.ok) {
      throw new Error(`상품 상세 조회 실패 (상태: ${response.status})`);
    }
    console.log(`상품 상세 조회 성공, 상태: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function createProduct(newProduct) {
  try {
    const response = await fetch(`${BASE_URL}/products`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newProduct),
    });

    if (!response.ok) {
      throw new Error(`상품 생성 실패 (상태: ${response.status})`);
    }
    console.log(`상품 생성 성공, 상태: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function patchProduct(id, updates) {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updates),
    });
    if (!response.ok) {
      throw new Error(`상품 수정 실패 (상태: ${response.status})`);
    }
    console.log(`상품 수정 성공, 상태: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

export async function deleteProduct(id) {
  try {
    const response = await fetch(`${BASE_URL}/products/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`상품 삭제 실패 (상태: ${response.status})`);
    }
    console.log(`상품 삭제 성공, 상태: ${response.status}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
  }
}
