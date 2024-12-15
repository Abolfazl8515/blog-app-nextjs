import { cookies } from "next/headers";
import PostList from "../_components/PostList";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { getBlogs } from "@/services/blogsService";
import queryString from "query-string";

async function BlogsPage({ searchParams }) {
  const search = await searchParams;
  const stringified = queryString.stringify(search);
  const cookieStore = cookies();
  const options = setCookieOnReq(cookieStore);
  const { posts } = await getBlogs(options, stringified);
  return (
    <div>
      <>
        {search.search ? (
          <p className="mb-4 text-secondary-700">
            {posts.length === 0
              ? " هیچ پستی با این مشخصات پیدا نشد "
              : `نشان دادن ${posts.length} نتیجه برای`}
            <span className="font-bold">&quot;{search.search}&quot;</span>
          </p>
        ) : null}
        <PostList posts={posts} />
      </>
    </div>
  );
}

export default BlogsPage;
