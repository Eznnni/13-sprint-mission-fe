import Image from "next/image";
import heartIcon from "@/assets/icons/ic_heart.svg";
import itemDefaultImg from "@/assets/item_default.png";
import Link from "next/link";
import { ROUTES } from "@/constants/navigation";

export default function ItemCard({ item }) {
  if (!item) return null;
  const { id, name, price, favoriteCount, images } = item;
  const displayImage = images?.[0] || itemDefaultImg;

  return (
    <Link href={ROUTES.ITEM.DETAIL(id)}>
      <div className="flex flex-col items-start gap-4">
        <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
          <Image
            src={displayImage}
            alt="아이템 기본 이미지"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex w-full flex-col items-start gap-2.5">
          <div className="flex w-full flex-col items-start gap-1.5 self-stretch">
            <div className="flex w-full items-center gap-35.5">{name}</div>
            <div className="text-secondary-800 text-lg font-bold">
              {price?.toLocaleString()}원
            </div>
            <div className="flex w-full items-center gap-35.5">
              <div className="flex items-center gap-1">
                <Image src={heartIcon} alt="좋아요 아이콘" />
                <div className="text-secondary-500">{favoriteCount || 0}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
