import { getBlogs, getSingleBlog } from "@/services/blogsService";
import Image from "next/image";
import { notFound } from "next/navigation";
import RelatedPost from "../_components/RelatedPost";

export const dynamicParams = false;

export async function generateStaticParams() {
  const { posts } = await getBlogs();
  const slugs = posts.map((post) => ({ postSlug: post.slug }));
  return slugs;
}

export async function generateMetadata({ params }) {
  const { postSlug } = await params;
  const { post } = await getSingleBlog(postSlug);
  return {
    title: post.title,
    description: post.briefText,
  };
}

async function SinglePost({ params }) {
  const { postSlug } = await params;
  const { post } = await getSingleBlog(postSlug);
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
          priority
        />
      </div>
      <p className="mb-8">{post.text}</p>
      {post.related.length > 0 && <RelatedPost posts={post.related} />}
      {/* <PostComment post={post} /> */}
    </div>
  );
}
export default SinglePost;
