"use client";
import Button from "@/ui/Button";
import ButtonIcon from "@/ui/ButtonIcon";
import Select from "@/ui/Select";
import TextArea from "@/ui/TextArea";
import TextField from "@/ui/TextField";
import { XMarkIcon } from "@heroicons/react/24/outline";
import Loading from "app/blogs/loading";
import Image from "next/image";
import { Controller, useForm } from "react-hook-form";
import useEditPost from "../[postId]/edit/useEditPost";
import { useRouter } from "next/navigation";
import useCreatePost from "../create/useCreatePost";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { imageUrlToFile } from "@/utils/fileFormatter";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const schema = yup
  .object({
    title: yup
      .string()
      .min(5, "حداقل ۵ کاراکتر را وارد کنید")
      .required("عنوان ضروری است"),
    briefText: yup
      .string()
      .min(5, "حداقل ۱۰ کاراکتر را وارد کنید")
      .required("توضیحات ضروری است"),
    text: yup
      .string()
      .min(5, "حداقل ۱۰ کاراکتر را وارد کنید")
      .required("توضیحات ضروری است"),
    slug: yup.string().required("اسلاگ ضروری است"),
    readingTime: yup
      .number()
      .positive()
      .integer()
      .required("زمان مطالعه ضروری است")
      .typeError("یک عدد را وارد کنید"),
    category: yup.string().required("دسته بندی ضروری است"),
  })
  .required();

function CreatePostForm({ postToEdit = {}, categories }) {
  const isEditSession = Boolean(postToEdit._id);
  let editValues = {};
  const {
    title,
    briefText,
    text,
    slug,
    readingTime,
    category,
    coverImage,
    coverImageUrl: prevPostCoverImageUrl,
  } = postToEdit;
  if (isEditSession) {
    editValues = {
      title,
      briefText,
      text,
      slug,
      readingTime,
      category: category?._id,
      coverImage,
    };
  }

  const {
    register,
    formState: { errors },
    handleSubmit,
    control,
    setValue,
    reset,
  } = useForm({
    defaultValues: editValues,
    resolver: yupResolver(schema),
    mode: "onTouched",
  });
  const [coverImageUrl, setCoverImageUrl] = useState(
    prevPostCoverImageUrl || null
  );
  const router = useRouter();
  const { isEditing, editPost } = useEditPost();
  const { isCreating, createPost } = useCreatePost();

  useEffect(() => {
    if (prevPostCoverImageUrl) {
      async function fetchMyAPI() {
        const file = await imageUrlToFile(prevPostCoverImageUrl);
        setValue("coverImage", file);
      }
      fetchMyAPI();
    }
  }, []);

  const onSubmit = async (formValues) => {
    const formData = new FormData();

    for (const key in formValues) {
      formData.append(key, formValues[key]);
    }

    if (isEditSession) {
      editPost(
        { id: postToEdit._id, data: formData },
        {
          onSuccess: () => {
            router.push("/profile/posts");
          },
        }
      );
    } else {
      createPost(formData, {
        onSuccess: () => {
          router.push("/profile/posts");
          reset();
        },
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
      <Controller
        control={control}
        name="coverImage"
        rules={{ required: "عکس کاور پست الزامی است" }}
        render={({ field: { value, onChange, ...field } }) => {
          return (
            <TextField
              name="coverImage"
              register={register}
              isRequired
              errors={errors}
              {...field}
              value={value?.fileName}
              onChange={(event) => {
                const file = event.target.files[0];
                if (!file.type.startsWith("image/")) {
                  event.target.value = "";
                  toast.error("لطفا یک عکس اپلود کنید");
                  return;
                }
                const fileSize = file.size / (1024 * 1024);
                if (fileSize > 10) {
                  event.target.value = "";
                  toast.error(
                    "لطفا فایلی با حجم کمتر از 10 مگابایت اپلود کنید"
                  );
                  return;
                }
                onChange(file);
                setCoverImageUrl(URL.createObjectURL(file));
              }}
              label="کاور پست"
              type="file"
              id="coverImage"
              accept="image/*"
            />
          );
        }}
      />

      {coverImageUrl && (
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            className="object-cover object-center"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            alt="cover-image"
            src={coverImageUrl}
            fill
          />
          <ButtonIcon
            type="button"
            variant="red"
            className="w-6 h-6 absolute !left-0"
            onClick={() => {
              setCoverImageUrl(null);
              setValue("coverImage", null);
              const fileInput = document.getElementById("coverImage");
              if (fileInput) fileInput.value = "";
            }}
          >
            <XMarkIcon />
          </ButtonIcon>
        </div>
      )}

      <div>
        {isEditing || isCreating ? (
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
