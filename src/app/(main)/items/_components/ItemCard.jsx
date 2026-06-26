import Image from "next/image";
import heartIcon from "@/assets/icons/ic_heart.svg";
import itemDefaultImg from "@/assets/item_default.png";

export default function ItemCard({ className = "" }) {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="w-full overflow-hidden rounded-2xl">
        <Image
          src={itemDefaultImg}
          alt="아이템 기본 이미지"
          className="h-auto w-full object-cover"
        />
      </div>
      <div className="flex w-full flex-col items-start gap-2.5">
        <div className="flex w-full flex-col items-start gap-1.5 self-stretch">
          <div className="flex w-full items-center gap-35.5">로봇 청소기</div>
          <div className="text-secondary-800 text-lg font-bold">
            1,500,000원
          </div>
          <div className="flex w-full items-center gap-35.5">
            <div className="flex items-center gap-1">
              <Image src={heartIcon} alt="좋아요 아이콘" />
              <div className="text-secondary-500">240</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
