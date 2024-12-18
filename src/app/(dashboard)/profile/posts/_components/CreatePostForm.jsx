"use client";
import { getCategories } from "@/services/categoryService";
import Button from "@/ui/Button";
import ButtonIcon from "@/ui/ButtonIcon";
import Select from "@/ui/Select";
import TextArea from "@/ui/TextArea";
import TextField from "@/ui/TextField";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Loading from "app/blogs/loading";
import Image from "next/image";
import { useForm } from "react-hook-form";
import useEditPost from "../[postId]/edit/useEditPost";
import { revalidatePath } from "next/cache";

function CreatePostForm({ postToEdit, categories }) {
  const isEditSession = Boolean(postToEdit);
  let editValues = {};
  if (isEditSession) {
    const { title, briefText, text, slug, readingTime, category } = postToEdit;
    editValues = {
      title,
      briefText,
      text,
      slug,
      readingTime,
      category: category._id,
    };
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues: editValues });
  const { isEditing, editPost } = useEditPost();

  const onSubmit = async (formValues) => {
    const formData = new FormData();

    for (const key in formValues) {
      formData.append(key, formValues[key]);
    }

    editPost(
      { id: postToEdit._id, data: formData },
      {
        onSuccess: () => {
          revalidatePath(`/profile/posts/${postToEdit._id}/edit`, "page");
        },
      }
    );
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
        label="متن کوتاه"
        name="briefText"
        register={register}
        required
        errors={errors}
      />
      <TextArea
        label="متن"
        name="text"
        register={register}
        required
        errors={errors}
      />
      <TextField
        label="اسلاگ"
        name="slug"
        register={register}
        required
        errors={errors}
      />
      <TextField
        label="زمان مطالعه"
        name="readingTime"
        register={register}
        required
        errors={errors}
      />
      <Select
        label="دسته بندی"
        required
        name="category"
        register={register}
        options={categories}
      />
      {/* <Controller
        control={control}
        name="coverImage"
        rules={{ required: "عکس کاور پست الزامی است" }}
        render={({ field: { value, onChange, ...field } }) => {
          return (
            <TextField
              {...field}
              value={value?.fileName}
              onChange={(event) => {
                const file = event.target.files[0];
                onChange(file);
                setCoverImageUrl(URL.createObjectURL(file));
              }}
              label="کاور پست"
              type="file"
              id="coverImage"
            />
          );
        }}
      /> */}

      {/* {coverImageUrl && (
        <div className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-lg">
          <Image
            className="object-cover object-center"
            fill
            alt="cover-image"
            src={coverImageUrl}
          />
          <ButtonIcon
            type="button"
            variant="red"
            className="w-6 h-6 absolute !left-0"
          >
            <XMarkIcon />
          </ButtonIcon>
        </div>
      )} */}

      <div>
        {isEditing ? (
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

export default CreatePostForm;
