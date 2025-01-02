import Breadcrumbs from "@/ui/Breadcrumbs";
import { getCategories } from "@/services/categoryService";
import CreatePostForm from "../_components/CreatePostForm";

export const dynamic = "force-dynamic";

async function CreatePost() {
  const { categories } = await getCategories();
  return (
    <div>
      <Breadcrumbs
        Breadcrumbs={[
          { label: "پست ها", href: "/profile/posts" },
          {
            label: "اضافه کردن پست",
            href: `/profile/posts/create`,
            active: true,
          },
        ]}
      />
      <CreatePostForm categories={categories} />
    </div>
  );
}

export default CreatePost;
