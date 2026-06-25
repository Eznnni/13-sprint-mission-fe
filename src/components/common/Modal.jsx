"use client";

import { useRef } from "react";
import Button from "../ui/Button";
import useClickOutside from "@/hooks/useClickOutside";

export default function Modal({ isOpen, message, onClose }) {
  const modalRef = useRef();

  // 💡 흰색 컨텐츠 상자(modalRef) 바깥 영역(어두운 딤드 배경)을 누르면 정상적으로 닫힙니다.
  useClickOutside(modalRef, () => {
    if (onClose) onClose();
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
      <div
        ref={modalRef}
        className="flex h-full max-h-62.5 w-full max-w-135 flex-col items-center justify-center gap-2.5 rounded-lg bg-white px-43 py-10"
      >
        <div className="flex w-full flex-col items-center gap-10">
          <div className="text-secondary-800 text-2lg w-full justify-center text-center font-medium whitespace-nowrap">
            {message}
          </div>
          <Button
            size="small"
            variant="primary"
            rounded="square"
            className="w-full"
            onClick={onClose}
          >
            확인
          </Button>
        </div>
      </div>
    </div>
  );
}
