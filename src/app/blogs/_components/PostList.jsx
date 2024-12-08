import { getBlogs } from "@/services/blogsService";
import Link from "next/link";
import CoverImage from "./CoverImage";
import Author from "./Author";
import { ClockIcon } from "@heroicons/react/24/outline";
import PostInteraction from "./PostInteraction";

async function PostList() {
  const { posts } = await getBlogs();
  return (
    <div className="grid grid-cols-12 gap-4">
      {posts.map((post) => (
        <div key={post._id} className="col-span-12 sm:col-span-6 lg:col-span-4 border border-secondary-300 rounded-lg p-2 cursor-pointer">
          <Link href={`/blogs/${post.slug}`}>
            <CoverImage {...post} />
            <div>
              <h2 className="mb-4 font-bold text-secondary-700 hover:text-primary-900 transition-all ease-out">
                {post.title}
              </h2>
              <div className="flex items-center justify-between mb-4">
                <Author {...post.author} />
                <div className="flex items-center text-[10px] text-secondary-500">
                  <ClockIcon className="w-4 h-4 stroke-secondary-500 ml-1" />
                  <span className="ml-1"> خواندن:</span>
                  <span className="ml-1 leading-3">{post.readingTime}</span>
                  <span>دقیقه</span>
                </div>
              </div>
              <PostInteraction post={post} />
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default PostList;
