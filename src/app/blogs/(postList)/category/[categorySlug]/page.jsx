import { getBlogs } from "@/services/blogsService";
import setCookieOnReq from "@/utils/setCookieOnReq";
import PostList from "app/blogs/_components/PostList";
import { cookies } from "next/headers";
import queryString from "query-string";

async function Category({ params, searchParams }) {
  const { categorySlug } = await params;
  const search = await searchParams;
  const queries = `${queryString.stringify(
    search
  )}&categorySlug=${categorySlug}`;

  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);
  const { posts } = await getBlogs(options, queries);

  return (
    <div>
      {posts.length > 0 ? (
        search.search ? (
          <>
            <p className="mb-4 text-secondary-700">
              نشان دادن {posts.length} نتیجه برای
              <span className="font-bold">&quot;{search.search}&quot;</span>
            </p>
            <PostList posts={posts} />
          </>
        ) : (
          <PostList posts={posts} />
        )
      ) : search.search ? (
        <p className="text-secondary-700">
          پستی با این مشخصات یافت نشد : {search.search}
        </p>
      ) : (
        <p className="text-secondary-700">پستی در این دسته بندی وجود ندارد</p>
      )}
    </div>
  );
}

export default Category;
