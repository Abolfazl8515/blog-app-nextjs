import queryString from "query-string";
import LatestPosts from "../_components/LatestPosts";
import PostsHeader from "./_components/PostsHeader";
import { cookies } from "next/headers";
import setCookieOnReq from "@/utils/setCookieOnReq";
import Pagination from "@/ui/Pagination";
import { getBlogs } from "@/services/blogsService";
import { Suspense } from "react";
import Fallback from "@/ui/FallBack";

async function Posts({ searchParams }) {
  const query = await searchParams;
  const stringified = queryString.stringify(query);
  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);
  const { posts, totalPages } = await getBlogs(options, stringified);
  return (
    <div>
      <PostsHeader />
      <Suspense fallback={<Fallback />}>
        <LatestPosts posts={posts} />
      </Suspense>
      {totalPages >= 2 && <Pagination totalPages={totalPages} />}
    </div>
  );
}

export default Posts;
