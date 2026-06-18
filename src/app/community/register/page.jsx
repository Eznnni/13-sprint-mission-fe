import PostForm from "@/components/common/PostForm";
import { createPost } from "@/services/postService";
import { redirect } from "next/navigation";

export default function RegisterPage() {
  async function handleCreate(formData) {
    "use server";
    const data = Object.fromEntries(formData.entries());
    await createPost(data);

    redirect("/community");
  }
  return (
    <div>
      <PostForm type="register" action={handleCreate} />
    </div>
  );
}
