"use server";
import { updateCommentApi } from "@/services/blogsService";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";

export default async function updateComment(
  prevState,
  { formData, commentId }
) {
  const cookiesStore = await cookies();
  const options = setCookieOnReq(cookiesStore);
  const data = {
    status: formData.get("status"),
  };
  try {
    const { message } = await updateCommentApi(
      { id: commentId, status: data },
      options
    );
    revalidatePath("/profile/comments");
    return {
      message,
    };
  } catch (error) {
    return {
      error,
    };
  }
}
