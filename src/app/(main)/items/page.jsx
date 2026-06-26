"use client";

import SearchBar from "@/components/common/SearchBar";
import ItemCard from "./_components/ItemCard";
import Button from "@/components/ui/Button";
import Dropdown from "@/components/common/Dropdown";
import Pagination from "@/components/common/Pagination";
import { useState } from "react";

export default function ItemPage() {
  //TODO UI 구현을 위한 임시 데이터 API 연동시 수정필요
  const [currentPage, setCurrentPage] = useState(1);
  const totalCount = 100;
  const pageSize = 10;
  const handlePageChange = (page) => {
    setCurrentPage(page);
    console.log("현재 페이지:", page);
    // API 호출 로직
  };

  return (
    <>
      <div className="m-auto mt-6.5 flex h-301.5 w-full max-w-300 flex-col items-start gap-10">
        <section className="flex w-full flex-col items-start gap-4">
          <h2 className="text-secondary-900 text-xl font-bold">베스트 상품</h2>
          <div className="grid w-full grid-cols-4 gap-4">
            <ItemCard />
            <ItemCard />
            <ItemCard />
            <ItemCard />
          </div>
        </section>
        <section className="flex w-full flex-col items-start gap-6">
          <div className="flex h-6 w-full justify-between">
            <h2 className="text-secondary-900 w-[113px] text-xl font-bold whitespace-nowrap">
              판매 중인 상품
            </h2>
            <div className="flex items-center gap-3">
              <SearchBar className="w-[325px]" />
              <Button
                variant="primary"
                rounded="square"
                size="small"
                className="whitespace-nowrap"
              >
                상품 등록하기
              </Button>
              <Dropdown />
            </div>
          </div>
          <div className="flex flex-col items-start gap-10">
            <div className="grid w-full grid-cols-5 grid-rows-2 gap-6">
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
              <ItemCard />
            </div>
          </div>
        </section>
      </div>
      <Pagination
        totalCount={totalCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </>
  );
}
