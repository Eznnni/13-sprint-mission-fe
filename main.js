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
const productId = 3492;

/*Article 관련 API 함수 실행*/

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

const articleUpdates = {
  image: "https://example.com/...",
  content: "게시글 내용이 수정되었습니다.",
  title: "수정된 게시글 제목입니다.",
};

patchArticle(articleId, articleUpdates)
  .then((data) => {
    console.log("수정된 게시글 데이터:", data);
  })
  .catch((error) => {
    console.log("수정 실패", error);
  });

deleteArticle(articleId)
  .then((data) => {
    if (data) {
      console.log(`게시글 id = ${data.id} 삭제 완료`);
    }
  })
  .catch((error) => {
    console.log("삭제 실패", error);
  });

/*Product 관련 API 함수 실행*/

const productsList = await getProductList(1, 10, "");
console.log(productsList);

const product = await getProduct(productId);
console.log(product);

const newProduct = {
  images: ["https://example.com/..."],
  tags: ["전자제품"],
  price: 0,
  description: "string",
  name: "상품 이름",
};

const newCreatedProduct = await createProduct(newProduct);
console.log(newCreatedProduct);

const productUpdates = {
  images: ["https://example.com/..."],
  tags: ["전자제품"],
  price: 0,
  description: "string",
  name: "상품 이름",
};

const updatedProduct = await patchProduct(productId, productUpdates);
console.log(updatedProduct);

const deletedProduct = await deleteProduct(newCreatedProduct.id);
if (deletedProduct) {
  console.log(`상품 id = ${deletedProduct.id} 삭제 완료`);
} else {
  console.log("삭제 실패");
}
