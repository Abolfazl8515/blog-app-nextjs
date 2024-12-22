"use client";
import Button from "@/ui/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import Loading from "app/blogs/loading";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import useCreateCategory from "../create/useCreateCategory";
import { useRouter } from "next/navigation";
import TextField from "@/ui/TextField";
import useEditCategory from "../[categoryId]/edit/useEditCategory";

const schema = yup
  .object({
    title: yup
      .string()
      .min(5, "حداقل ۵ کاراکتر را وارد کنید")
      .required("عنوان ضروری است"),
    description: yup
      .string()
      .min(5, "حداقل ۱۰ کاراکتر را وارد کنید")
      .required("توضیحات ضروری است"),
    englishTitle: yup
      .string()
      .min(5, "حداقل ۱۰ کاراکتر را وارد کنید")
      .required("توضیحات ضروری است"),
  })
  .required();

function CreateCategoryForm({ categoryToEdit = {} }) {
  const isEditSession = Boolean(categoryToEdit._id);
  let editValues = {};
  const { title, description, englishTitle } = categoryToEdit;
  if (isEditSession) {
    editValues = {
      title,
      description,
      englishTitle,
    };
  }

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: editValues,
    resolver: yupResolver(schema),
    mode: "onTouched",
  });
  const router = useRouter();
  const { isCreating, createCategory } = useCreateCategory();
  const { isEditing, editCategory } = useEditCategory();

  const onSubmit = (formValues) => {
    const formData = new FormData();

    for (const key in formValues) {
      formData.append(key, formValues[key]);
    }
    if (isEditSession) {
      editCategory(
        { id: categoryToEdit._id, data: formData },
        { onSuccess: () => router.push("/profile/categories") }
      );
    } else {
      createCategory(formData, {
        onSuccess: () => router.push("/profile/categories"),
      });
    }
  };

  return (
    <form className="form mt-5" onSubmit={handleSubmit(onSubmit)}>
      <TextField
        label="عنوان"
        name="title"
        register={register}
        required
        errors={errors}
      />
      <TextField
        label="توضیحات"
        name="description"
        register={register}
        required
        errors={errors}
      />
      <TextField
        label="عنوان انگلیسی"
        name="englishTitle"
        register={register}
        required
        errors={errors}
      />

      <div>
        {isCreating || isEditing ? (
          <Loading />
        ) : (
          <Button variant="primary" type="submit" className="w-full">
            تایید
          </Button>
        )}
      </div>
    </form>
  );
}

export default CreateCategoryForm;
