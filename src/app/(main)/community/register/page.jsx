import PostForm from "@/components/common/PostForm";
import { ROUTES } from "@/constants/navigation";
import { createPost } from "@/services/postService";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function RegisterPage() {
  async function handleCreate(formData) {
    "use server";
    const data = Object.fromEntries(formData.entries());
    const response = await createPost(data);
    const newPostId = response?.data?.id;

    revalidatePath(ROUTES.COMMUNITY.BASE);

    if (newPostId) {
      redirect(ROUTES.COMMUNITY.DETAIL(newPostId));
    } else {
      redirect(ROUTES.COMMUNITY.BASE);
    }
  }

  return (
    <div>
      <PostForm type="register" action={handleCreate} />
    </div>
  );
}
