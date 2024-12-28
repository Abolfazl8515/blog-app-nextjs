"use client";
import { getBlogs } from "@/services/blogsService";
import PostList from "app/blogs/_components/PostList";
import { useEffect, useState } from "react";

function LatestPostsHome() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { posts } = await getBlogs();
      setPosts(posts);
    };
    fetchBlogs();
  }, [posts]);

  return <PostList posts={posts} />;
}

export default LatestPostsHome;
