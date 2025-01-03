import { getBlogs } from "@/services/blogsService";
import PostList from "app/blogs/_components/PostList";

async function LatestPostsHome() {
  const { posts } = await getBlogs();

  return <PostList posts={posts} />;
}

export default LatestPostsHome;
