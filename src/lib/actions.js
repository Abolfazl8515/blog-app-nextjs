"use server";
import { createCommentApi } from "@/services/blogsService";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export async function createComment(prevState, { formData, postId, parentId }) {
  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);
  try {
    const text = formData.get("text");
    const commentInfo = {
      parentId,
      postId,
      text,
    };
    const { message } = await createCommentApi(commentInfo, options);
    revalidatePath("/blogs/[postSlug]");
    return {
      message,
    };
  } catch (err) {
    const error = err?.response?.data?.message;
    return {
      error,
    };
  }
}
