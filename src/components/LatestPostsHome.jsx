"use client";
import useGetPosts from "@/hooks/useGetPosts";
import PostList from "app/blogs/_components/PostList";

function LatestPostsHome() {
  const { posts } = useGetPosts();

  return <PostList posts={posts} />;
}

export default LatestPostsHome;
