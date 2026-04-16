import {
  getArticle,
  getArticleList,
  createArticle,
  patchArticle,
  deleteArticle,
} from "./src/api/ArticleService.js";

import {
  getProduct,
  getProductList,
  createProduct,
  patchProduct,
  deleteProduct,
} from "./src/api/ProductService.js";

const articleId = 5954;

getArticleList(1, 10, "")
  .then((data) => {
    console.log("getArticleList를 통해 불러온 데이터", data);
  })
  .catch((error) => {
    console.log("조회 실패", error);
  });

getArticle(articleId)
  .then((data) => {
    console.log("getArticle을 통해 불러온 데이터", data);
  })
  .catch((error) => {
    console.log("조회 실패", error);
  });

const newArticle = {
  image: "https://example.com/...",
  content: "게시글 내용입니다.",
  title: "게시글 제목입니다.",
};

createArticle(newArticle)
  .then((data) => {
    console.log("생성된 게시글 데이터", data);
  })
  .catch((error) => {
    console.log("생성 실패", error);
  });

const updates = {
  image: "https://example.com/...",
  content: "게시글 내용이 수정되었습니다.",
  title: "수정된 게시글 제목입니다.",
};

patchArticle(articleId, updates)
  .then((data) => {
    console.log("수정된 게시글 데이터:", data);
  })
  .catch((error) => {
    console.log("수정 실패", error);
  });

deleteArticle(articleId)
  .then((data) => {
    if (data) {
      console.log(`게시글 ${data.id} 삭제 완료`);
    }
  })
  .catch((error) => {
    console.log("삭제 실패", error);
  });
