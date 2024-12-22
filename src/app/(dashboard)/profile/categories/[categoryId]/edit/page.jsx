import { getCategoryById } from "@/services/categoryService";
import CreateCategoryForm from "../../_components/CreateCategoryForm";
import Breadcrumbs from "@/ui/Breadcrumbs";

async function EditCategory({ params }) {
  const { categoryId } = await params;
  const { category } = await getCategoryById(categoryId);

  return (
    <div>
      <Breadcrumbs
        Breadcrumbs={[
          { label: "دسته بندی ها", href: "/profile/categories" },
          {
            label: " ویرایش دسته بندی ",
            href: `/profile/categories/$${categoryId}/edit`,
            active: true,
          },
        ]}
      />
      <CreateCategoryForm categoryToEdit={category} />
    </div>
  );
}

export default EditCategory;
