import { createBlogApi } from "@/services/blogsService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useCreatePost() {
  const queryClient = useQueryClient();

  const { isPending: isCreating, mutate: createPost } = useMutation({
    mutationFn: createBlogApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["posts"],
      });
    },
    onError: (err) => {
      toast.error(err.response.data.message);
    },
  });

  return { isCreating, createPost };
}
