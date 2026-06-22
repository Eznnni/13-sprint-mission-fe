"use client";

import { createPostComment } from "@/services/commentService";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CommentInput({ postId }) {
  const router = useRouter();
  const [content, setContent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async () => {
    const trimmedContent = content.trim();

    if (!trimmedContent) {
      alert("댓글 내용을 입력해주세요.");
      return;
    }

    try {
      setIsSubmitting(true);

      await createPostComment(postId, trimmedContent);
      setContent("");
      router.refresh();
    } catch (error) {
      console.error("댓글 등록 실패", error);
      alert("댓글 등록에 실패했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const isButtonEnabled = content.trim().length > 0 && !isSubmitting;

  return (
    <div className="flex flex-col items-start justify-center gap-2.25 self-stretch">
      <h3 className="text-cool-gray-900 w-14 text-[1rem] font-semibold">
        댓글달기
      </h3>
      <div className="bg-cool-gray-100 max-h-26 w-full max-w-300 flex-col items-start gap-2.5 rounded-xl px-6 py-4">
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="댓글을 입력해주세요."
          maxLength={400}
          className="h-full w-full resize-none overflow-y-auto outline-none"
        />
      </div>
      <button
        onClick={handleSubmit}
        disabled={!isButtonEnabled}
        className={`self-end ${isButtonEnabled ? "btn" : "btn-disabled"}`}
        type="button"
      >
        {isSubmitting ? "등록 중..." : "등록"}
      </button>
    </div>
  );
}
