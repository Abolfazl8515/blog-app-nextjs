import { getCategories } from "@/services/categoryService";
import { useQuery } from "@tanstack/react-query";

export default function useGetCategories() {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const { categories } = data || [];

  return { categories };
}
