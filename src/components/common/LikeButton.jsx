"use client";
import { useState } from "react";

export default function LikeButton({ post }) {
  const initialCount = Number(post.likeCount) || 0;
  const [likeCount, setLikeCount] = useState(initialCount);
  const [isLiked, setIsLiked] = useState(false);

  //TODO 추후에 백엔드 like API 완성 후 연결
  function handleCountClick() {
    if (isLiked) {
      setLikeCount(initialCount);
    } else {
      setLikeCount(initialCount + 1);
    }
    setIsLiked((prev) => !prev);
  }

  return (
    <button
      type="button"
      className={`flex h-10 cursor-pointer flex-col items-start gap-2.5 rounded-[2.1875rem] border border-solid px-3 py-1 ${isLiked ? "border-pink-400 bg-pink-100" : "border-secondary-200 bg-white"}`}
      onClick={handleCountClick}
    >
      <div className="flex items-center gap-1">
        <div className="flex h-8 w-8 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill={isLiked ? "#F472B6" : "none"}
            className="transition-all duration-200"
          >
            <path
              d="M21.1997 4.90039C25.1051 4.90039 28.2452 7.9009 28.5464 11.7812L28.5669 12.1602V12.4004C28.5668 14.5632 27.7277 16.4503 26.3247 17.7363L26.0327 18.0039V18.0986C26.0187 18.1104 26.0043 18.1225 25.9897 18.1348C25.7818 18.3101 25.4997 18.5534 25.1636 18.8457C24.4902 19.4313 23.5881 20.2253 22.605 21.0918C20.6408 22.8229 18.3528 24.8449 16.8901 26.1084C16.4239 26.4969 15.7079 26.4969 15.2417 26.1084C13.7764 24.8428 11.4525 22.817 9.4751 21.0889C8.48386 20.2226 7.5804 19.4313 6.9165 18.8486C6.58461 18.5573 6.31311 18.3184 6.12061 18.1484C6.11365 18.1423 6.10677 18.1358 6.1001 18.1299V18.0273L5.83643 17.7637C4.39581 16.3231 3.567 14.4151 3.56689 12.4004V12.1426C3.69507 8.23997 7.02258 5.03324 10.9331 5.0332C11.5505 5.0332 12.3382 5.24524 13.1069 5.65918C13.849 6.05883 14.5073 6.61335 14.9438 7.24316C15.4233 8.26862 16.9006 8.25157 17.3462 7.19141C17.7132 6.53143 18.3555 5.95411 19.105 5.53613C19.873 5.10782 20.6559 4.90042 21.1997 4.90039Z"
              stroke={isLiked ? "#F472B6" : "#6B7280"}
              strokeWidth="1.8"
            />
          </svg>
        </div>
        <div
          className={`text-[1rem] font-medium ${isLiked ? "text-pink-400" : "text-cool-gray-500"}`}
        >
          {likeCount}
        </div>
      </div>
    </button>
  );
}
