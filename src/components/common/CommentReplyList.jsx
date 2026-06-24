"use client";

import Image from "next/image";
import { useState } from "react";
import defaultProfile from "@/assets/icons/ic_profile.svg";
import KebabDropdown from "./KebabDropdown";
import timeAgoFormat from "@/utils/timeAgoFormat";
import { updateComment, deleteComment } from "@/services/commentService";
import { useRouter } from "next/navigation";

export default function CommentReplyList({ comment }) {
  const router = useRouter();
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(comment.content);

  const handleDeleteComment = async () => {
    if (!confirm("댓글을 정말 삭제하시겠습니까?")) return;

    try {
      await deleteComment(comment.id);
      router.refresh();
    } catch (error) {
      console.error("댓글 삭제 실패", error);
      alert("댓글 삭제를 실패했습니다.");
    }
  };

  const handleEditComment = async () => {
    if (!editContent.trim()) {
      alert("댓글 내용을 입력해주세요.");
      return;
    }

    try {
      await updateComment(comment.id, editContent);
      setIsEditing(false);
      router.refresh();
    } catch (error) {
      console.error("댓글 수정 실패", error);
      alert("댓글 수정을 실패했습니다.");
    }
  };

  return (
    <div className="border-secondary-300 flex w-full max-w-300 content-start border-b border-solid bg-[#FCFCFC] pb-3">
      <div className="flex w-full flex-1 flex-col items-start gap-6">
        <div className="flex justify-between self-stretch">
          {isEditing ? (
            <div className="flex h-full max-h-41.75 w-full flex-col items-start justify-center gap-6">
              <div className="h-full max-h-35.75 w-full shrink-0">
                <textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  maxLength={400}
                  className="bg-cool-gray-100 text-cool-gray-800 h-20 w-full resize-none rounded-xl px-6 py-4 text-[0.875rem] font-normal outline-none"
                />
              </div>
            </div>
          ) : (
            <div className="text-secondary-800 text-[0.875rem] font-normal">
              {comment.content}
            </div>
          )}

          {!isEditing && (
            <KebabDropdown
              onEdit={() => setIsEditing(true)}
              onDelete={handleDeleteComment}
            />
          )}
        </div>

        <div className="flex w-full items-center justify-between self-stretch">
          <div className="flex items-start gap-2">
            <div className="relative h-8 w-8">
              <Image fill src={comment.image || defaultProfile} alt="프로필" />
            </div>
            <div className="flex flex-col items-start gap-1">
              <div className="text-secondary-600 text-[0.75rem] font-normal">
                {comment.writer?.nickname || "똑똑한 판다"}
              </div>
              <div className="text-secondary-400 w-10 text-[0.75rem] font-normal whitespace-nowrap">
                {timeAgoFormat(comment.createdAt)}
              </div>
            </div>
          </div>
          {isEditing && (
            <div className="flex items-center gap-1">
              <button
                type="button"
                onClick={() => {
                  setIsEditing(false);
                  setEditContent(comment.content);
                }}
                className="btn-white"
              >
                취소
              </button>
              <button type="button" onClick={handleEditComment} className="btn">
                수정 완료
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
