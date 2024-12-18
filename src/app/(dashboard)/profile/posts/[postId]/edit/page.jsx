import Breadcrumbs from "@/ui/Breadcrumbs";
import CreatePostForm from "../../_components/CreatePostForm";
import { getCategories } from "@/services/categoryService";
import { getSingleBlogById } from "@/services/blogsService";

async function EditPost({ params }) {
  const { postId } = await params;
  const { categories } = await getCategories();
  const { post } = await getSingleBlogById(postId);
  return (
    <div>
      <Breadcrumbs
        Breadcrumbs={[
          { label: "پست ها", href: "/profile/posts" },
          {
            label: "ویرایش",
            href: `/profile/posts/${postId}/edit`,
            active: true,
          },
        ]}
      />
      <CreatePostForm postToEdit={post} categories={categories} />
    </div>
  );
}

export default EditPost;
