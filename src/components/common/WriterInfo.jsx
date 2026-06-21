import Image from "next/image";
import defaultProfile from "@/assets/icons/ic_profile.svg";
import dateFormat from "@/utils/dateFormat";

export default function WriterInfo({ post }) {
  const formattedDate = dateFormat(post.createdAt);
  return (
    <div className="text-secondary-600 flex flex-row gap-2 text-[0.875rem] font-normal">
      <div className="relative h-10 w-10">
        <Image fill src={defaultProfile} alt="기본 프로필" />
      </div>
      <div className="flex items-center justify-center gap-2">
        <div className="text-secondary-600 text-[0.875rem] font-medium">
          {post.writer?.nickname || "총명한 판다"}
        </div>
        <div className="text-secondary-400 text-[0.875rem] font-normal">
          {formattedDate}
        </div>
      </div>
    </div>
  );
}
