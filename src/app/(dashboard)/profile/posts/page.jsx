import queryString from "query-string";
import LatestPosts from "../_components/LatestPosts";
import PostsHeader from "./_components/PostsHeader";
import { cookies } from "next/headers";
import setCookieOnReq from "@/utils/setCookieOnReq";

async function Posts({ searchParams }) {
  const query = await searchParams;
  const stringified = queryString.stringify(query);
    const cookieStore = await cookies();
    const options = setCookieOnReq(cookieStore);
  return (
    <div>
      <PostsHeader />
      <LatestPosts query={stringified} options={options} />
    </div>
  );
}

export default Posts;
