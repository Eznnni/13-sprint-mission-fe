import * as postService from "@/services/postService";
import * as commentService from "@/services/commentService";
import LikeButton from "@/components/common/LikeButton";
import WriterInfo from "@/components/common/WriterInfo";
import CommentInput from "@/components/common/CommentInput";
import BackToHomeButton from "@/components/common/BackToHomeButton";
import CommentReplyList from "@/components/common/CommentReplyList";
import PostDropDown from "@/components/common/PostDropDown";
import NoCommentFallBack from "@/components/ui/NoCommentFallBack";

export default async function PostDetailpage({ params }) {
  const { id } = await params;

  const [postRes, commentsRes] = await Promise.all([
    postService.getPostDetail(id),
    commentService.getPostComments(id),
  ]);

  const post = postRes?.data;
  const comments = commentsRes?.list || [];

  return (
    <div className="mx-auto my-0 mt-[2.12rem] mb-[12.06rem] flex w-full max-w-300 flex-col gap-16">
      <div className="flex flex-col gap-8">
        <section className="flex flex-col items-start gap-6 self-stretch">
          <div className="flex w-full flex-col items-start gap-4">
            <div className="flex items-start gap-2 self-stretch">
              <div className="text-cool-gray-800 w-292 text-[1.25rem] font-bold">
                {post.title}
              </div>
              <PostDropDown postId={id} />
            </div>
            <div className="flex items-center gap-8 self-stretch">
              <WriterInfo post={post} />
              <div className="flex items-center gap-8">
                <div className="h-8.5 w-px bg-gray-200"></div>
                <LikeButton post={post} />
              </div>
            </div>
            <div className="bg-cool-gray-200 h-px w-full"></div>
          </div>
          <h2 className="text-secondary-800 w-full text-[1.125rem] font-normal">
            {post.content}
          </h2>
        </section>
        <section className="flex flex-col items-start gap-10 self-stretch">
          <div className="flex flex-col items-end gap-4 self-stretch">
            <CommentInput postId={id} />
          </div>
          <div className="flex w-full flex-col items-start gap-6">
            {comments.length > 0 ? (
              comments.map((comment) => (
                <CommentReplyList key={comment.id} comment={comment} />
              ))
            ) : (
              <NoCommentFallBack />
            )}
          </div>
        </section>
      </div>
      <div className="flex justify-center">
        <BackToHomeButton type="post" />
      </div>
    </div>
  );
}
