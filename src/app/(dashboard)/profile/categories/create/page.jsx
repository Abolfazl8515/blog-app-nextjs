import Breadcrumbs from "@/ui/Breadcrumbs";
import CreateCategoryForm from "../_components/CreateCategoryForm";

function CreateCategory() {
  return (
    <div>
      <Breadcrumbs
        Breadcrumbs={[
          { label: "دسته بندی ها", href: "/profile/categories" },
          {
            label: "اضافه کردن دسته بندی",
            href: `/profile/categories/create`,
            active: true,
          },
        ]}
      />
      <CreateCategoryForm />
    </div>
  );
}

export default CreateCategory;
