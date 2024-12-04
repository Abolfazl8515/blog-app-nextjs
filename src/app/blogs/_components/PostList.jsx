import { getBlogs } from "@/services/blogsService";

async function PostList() {
  const { posts } = await getBlogs();
  return (
    <div>
      {posts.map((post) => (
        <div>{post.title}</div>
      ))}
    </div>
  );
}

export default PostList;
