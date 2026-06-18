import PostForm from "@/components/common/PostForm";
import { getPostDetail, updatePost } from "@/services/postService";
import { redirect } from "next/navigation";

export default async function EditPage({ params }) {
  const { id } = await params;
  const response = await getPostDetail(id);

  const initialData = response?.data;

  if (!initialData) {
    redirect("/community");
  }

  async function handleUpdate(formData) {
    "use server";
    const data = Object.fromEntries(formData.entries());
    await updatePost(id, data);

    //TODO 상세 게시글 페이지로 이동
    redirect("/community");
  }

  return (
    <PostForm type="edit" initialData={initialData} action={handleUpdate} />
  );
}
