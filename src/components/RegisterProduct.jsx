import { useState } from "react";
import "../styles/RegisterProduct.css";
import XIcon from "../assets/icons/ic_X.svg";

function RegisterProduct() {
  const [values, setValues] = useState({
    name: "",
    intro: "",
    price: "",
    tag: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const processData = {
      ...values,
      price: Number(values.price),
    };
  };

  const [tags, setTags] = useState([]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const newTag = values.tag.trim();

      if (newTag && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
        setValues({ ...values, tag: "" });
      }
    }
  };

  const handleRemoveTag = (removeIdx) => {
    setTags(tags.filter((_, idx) => idx !== removeIdx));
  };

  return (
    <form onSubmit={handleSubmit} className="register-product-section">
      <div className="register-section-top">
        <h2 className="register-page-title">상품 등록하기</h2>
        <button className="register-submit-button" type="submit">
          등록
        </button>
      </div>
      <section className="register-input-section">
        <label className="register-product-title">
          <div className="register-input-title">상품명</div>
          <input
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange}
            className="register-input-box"
            placeholder="상품명을 입력해주세요"
          />
        </label>
        <label className="register-product-intro">
          <div className="register-input-title">상품 소개</div>
          <textarea
            name="intro"
            value={values.intro}
            onChange={handleChange}
            className="register-input-box register-input-box--intro"
            placeholder="상품 소개를 입력해주세요"
          />
        </label>
        <label className="register-product-price">
          <div className="register-input-title">판매가격</div>
          <input
            name="price"
            type="text"
            value={values.price}
            onChange={handleChange}
            className="register-input-box"
            placeholder="판매 가격을 입력해주세요"
          />
        </label>
        <label className="register-product-tag">
          <div className="register-input-title">태그</div>
          <input
            name="tag"
            type="text"
            value={values.tag}
            className="register-input-box"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            placeholder="태그를 입력해주세요"
          />
          <div className="register-tag-container">
            {tags.map((tag, idx) => (
              <span key={idx} className="tag-item">
                <span className="tag-text">#{tag}</span>
                <img
                  src={XIcon}
                  className="tag-delete-button"
                  onClick={() => handleRemoveTag(idx)}
                />
              </span>
            ))}
          </div>
        </label>
      </section>
    </form>
  );
}

export default RegisterProduct;
