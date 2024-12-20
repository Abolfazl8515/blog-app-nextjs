"use server";
import { DeleteBlogApi } from "@/services/blogsService";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export default async function deletePost(prevState, { postId }) {
  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);
  try {
    const { message } = await DeleteBlogApi(postId, options);
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
