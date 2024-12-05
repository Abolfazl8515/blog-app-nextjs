import { getSingleBlog } from "@/services/blogsService";
import Image from "next/image";
import { notFound } from "next/navigation";

async function SinglePost({ params }) {
  const { post } = await getSingleBlog(params.postSlug);
  if (!post) notFound();

  return (
    <div className="text-secondary-600 max-w-screen-md mx-auto">
      <h1 className="text-secondary-700 text-2xl font-bold mb-8">
        {post.title}
      </h1>
      <p className="mb-4">{post.briefText}</p>
      <div className="relative aspect-video overflow-hidden rounded-lg mb-10">
        <Image
          className="object-cover object-center"
          fill
          src={post.coverImageUrl}
          alt={post.title}
        />
      </div>
      <p className="mb-8">{post.text}</p>
      {/* {post.related.length > 0 && <RelatedPost posts={post.related} />}
      <PostComment post={post} /> */}
    </div>
  );
}
export default SinglePost;
