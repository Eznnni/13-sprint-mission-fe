import { useEffect, useState } from "react";
import { CardBox } from "./CardBox";
import { productApi } from "../api/productApi";
import "../styles/components/bestProductList.css";
function BestProductList() {
  const [bestProducts, setBestProducts] = useState([]);

  useEffect(() => {
    const fetchBestProducts = async () => {
      try {
        const data = await productApi.getProductList(1, 4, "favorite");
        setBestProducts(data.list);
      } catch (error) {
        console.error(`베스트 상품 목록 조회 실패 ${error.message}`);
      }
    };
    fetchBestProducts();
  }, []);

  return (
    <section className="best-product-section">
      <h2 className="best-product-title">베스트 상품</h2>
      <div className="best-product-grid">
        {bestProducts.map((bestProduct) => (
          <CardBox key={bestProduct.id} product={bestProduct} />
        ))}
      </div>
    </section>
  );
}

export default BestProductList;
