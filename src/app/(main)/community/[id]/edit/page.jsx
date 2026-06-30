import PostForm from "@/components/common/PostForm";
import { ROUTES } from "@/constants/navigation";
import { getPostDetail, updatePost } from "@/services/postService";
import { redirect } from "next/navigation";

export default async function EditPage({ params }) {
  const { id } = await params;
  const response = await getPostDetail(id);

  const initialData = response?.data;

  if (!initialData) {
    redirect(ROUTES.COMMUNITY.BASE);
  }

  async function handleUpdate(formData) {
    "use server";
    const data = Object.fromEntries(formData.entries());
    await updatePost(id, data);

    redirect(ROUTES.COMMUNITY.DETAIL(id));
  }

  return (
    <PostForm type="edit" initialData={initialData} action={handleUpdate} />
  );
}
