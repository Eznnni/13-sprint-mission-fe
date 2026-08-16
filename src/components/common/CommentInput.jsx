"use client";

import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { createComment } from "@/services/productCommentService";
import { COMMENT_ENDPOINT, POST_ENDPOINT } from "@/constants/endpoint";

// 자유게시판 호출 시: <CommentInput productId={id} type="post" />
// 중고마켓 호출 시: <CommentInput productId={itemId} type="item" /> (또는 생략 가능)
export default function CommentInput({ productId, type = "item" }) {
  const queryClient = useQueryClient();
  const [content, setContent] = useState("");

  const isItem = type === "item";
  const titleText = isItem ? "문의하기" : "댓글달기";
  const placeholderText = isItem
    ? "개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
    : "댓글을 입력해주세요.";

  const commentMutation = useMutation({
    mutationFn: async () => {
      const trimmed = content.trim();
      if (isItem) {
        return createComment(productId, trimmed);
      } else {
        const BASE_URL = process.env.NEXT_PUBLIC_PANDA_API_BASE_URL;
        const token = localStorage.getItem("accessToken");
        const headers = {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        };
        const res = await fetch(
          `${BASE_URL}${POST_ENDPOINT}/${productId}${COMMENT_ENDPOINT}`,
          {
            method: "POST",
            headers,
            body: JSON.stringify({ content: trimmed }),
          },
        );
        if (!res.ok) throw new Error("댓글 등록에 실패했습니다.");
        return res.json();
      }
    },
    onSuccess: () => {
      setContent("");

      queryClient.invalidateQueries({
        queryKey: ["comments", type, productId],
      });
    },
    onError: (err) => {
      alert(err.message);
    },
  });

  const handleSubmit = () => {
    if (!content.trim()) return alert("댓글 내용을 입력해주세요.");
    commentMutation.mutate();
  };

  const isButtonEnabled =
    content.trim().length > 0 && !commentMutation.isPending;

  return (
    <div className="flex w-full flex-col items-start justify-center gap-2">
      <h3 className="text-cool-gray-900 text-[1rem] font-semibold">
        {titleText}
      </h3>
      <div className="bg-cool-gray-100 w-full rounded-xl px-6 py-4">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder={placeholderText}
          maxLength={400}
          className="h-20 w-full resize-none overflow-y-auto bg-transparent text-gray-800 outline-none"
        />
      </div>
      <button
        onClick={handleSubmit}
        disabled={!isButtonEnabled}
        className={`self-end ${isButtonEnabled ? "btn" : "btn-disabled"}`}
        type="button"
      >
        {commentMutation.isPending ? "등록 중..." : "등록"}
      </button>
    </div>
  );
}
