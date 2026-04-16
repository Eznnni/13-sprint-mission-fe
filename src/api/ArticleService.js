const BASE_URL = "https://panda-market-api-crud.vercel.app";

export function getArticleList(page, pageSize, keyword) {
  return fetch(
    `${BASE_URL}/articles?page=${page}&pageSize=${pageSize}&keyword=${keyword}`,
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`게시글 목록 조회 실패 (상태: ${response.status})`);
      }
      console.log(`게시글 목록 조회 성공, 상태: ${response.status}`);
      return response.json();
    })
    .catch((error) => {
      console.error(error.message);
    });
}

export function getArticle(id) {
  return fetch(`${BASE_URL}/articles/${id}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`게시글 상세 조회 실패 (상태: ${response.status})`);
      }
      console.log(`게시글 상세 조회 성공, 상태: ${response.status}`);
      return response.json();
    })
    .catch((error) => {
      console.error(error.message);
    });
}

export function createArticle(newArticle) {
  return fetch(`${BASE_URL}/articles`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newArticle),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`게시글 생성 실패 (상태: ${response.status})`);
      }
      console.log(`게시글 생성 성공, 상태: ${response.status}`);
      return response.json();
    })
    .catch((error) => {
      console.error(error.message);
    });
}

export function patchArticle(id, updates) {
  return fetch(`${BASE_URL}/articles/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updates),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`게시글 수정 실패 (상태: ${response.status})`);
      }
      console.log(`게시글 수정 성공, 상태: ${response.status}`);
      return response.json();
    })
    .catch((error) => {
      console.error(error.message);
    });
}

export function deleteArticle(id) {
  return fetch(`${BASE_URL}/articles/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`게시글 삭제 실패 (상태: ${response.status})`);
      }
      console.log(`게시글 삭제 성공, 상태: ${response.status}`);
      return response.json();
    })
    .catch((error) => {
      console.error(error.message);
    });
}
