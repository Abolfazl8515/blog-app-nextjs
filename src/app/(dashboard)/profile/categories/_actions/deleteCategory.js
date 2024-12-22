"use server";
import { deleteCommentApi } from "@/services/blogsService";
import { deleteCategoryApi } from "@/services/categoryService";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";

export default async function deleteCategory(prevState, { categoryId }) {
  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);
  try {
    const { message } = await deleteCategoryApi(categoryId, options);
    return {
      error: "",
      message,
    };
  } catch (err) {
    const error = err?.response?.data?.message;
    return {
      message: "",
      error,
    };
  }
}
