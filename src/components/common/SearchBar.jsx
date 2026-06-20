"use client";

import searchIcon from "@/assets/icons/ic_search.svg";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function SearchBar({ currentKeyword }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [keyword, setKeyword] = useState(currentKeyword);

  function handleSearchSubmit(e) {
    e.preventDefault();

    const params = new URLSearchParams(searchParams.toString());

    if (keyword.trim()) {
      params.set("keyword", keyword);
    } else {
      params.delete("keyword");
    }
    params.set("page", "1");

    router.push(`/community?${params.toString()}`);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setKeyword(currentKeyword);
    }, 0);
    return () => clearTimeout(timer);
  }, [currentKeyword]);

  return (
    <form
      onSubmit={handleSearchSubmit}
      className="bg-secondary-100 flex h-10.5 w-263.5 flex-col rounded-xl py-[0.56rem] pr-5 pl-4"
    >
      <div className="flex gap-1">
        <Image src={searchIcon} alt="검색 아이콘" />
        <input
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          placeholder="검색할 상품을 입력해주세요"
          className="text-secondary-400 w-full items-center text-[1rem] font-normal outline-none"
        />
      </div>
    </form>
  );
}
