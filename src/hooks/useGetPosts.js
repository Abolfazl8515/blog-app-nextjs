import { getBlogs } from "@/services/blogsService";
import { useQuery } from "@tanstack/react-query";

export default function useGetPosts() {
  const { data, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: getBlogs,
  });

  const { posts } = data || [];

  return { posts };
}
