"use server";
import { deleteCommentApi } from "@/services/blogsService";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { cookies } from "next/headers";

export default async function deleteComment(prevState, { commentId }) {
  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);
  try {
    const { message } = await deleteCommentApi(commentId, options);
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
