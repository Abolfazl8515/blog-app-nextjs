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

  const generatePersianCategory = () => {
    let categoryText = "";
    switch (categorySlug) {
      case "sport":
        categoryText = "ورزشی";
        break;
      case "cultural":
        categoryText = "فرهنگی";
        break;
      case "economic":
        categoryText = "اقتصادی";
        break;
      case "programming":
        categoryText = "برنامه نویسی";
        break;
      case "political":
        categoryText = "سیاسی";
        break;
      case "historical":
        categoryText = "تاریخی";
        break;
      case "geographic":
        categoryText = "جغرافیا";
        break;

      default:
        categoryText = "unknown category!";
        break;
    }
    return categoryText;
  };

  return (
    <div>
      {posts.length > 0 ? (
        search.search ? (
          <>
            <p className="mb-4 text-secondary-700">
              نشان دادن {posts.length} نتیجه برای
              <span className="font-bold">&quot;{search.search}&quot;</span>
              <span className="font-bold">در دسته بندی</span>
              <span className="font-bold">
                &quot;{generatePersianCategory()}&quot;
              </span>
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
