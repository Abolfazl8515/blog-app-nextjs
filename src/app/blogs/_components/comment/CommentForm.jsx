"use client";
import { createComment } from "@/lib/actions";
import SubmitButton from "@/ui/SubmitButton";
import TextArea from "@/ui/TextArea";
import { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";

const initialState = {
  error: "",
  message: "",
};

function CommentForm({ postId, parentId, onClose }) {
  const [text, setText] = useState("");
  const [state, formAction] = useActionState(createComment, initialState);

  const createCommentHandler = (formData) => {
    formAction({ formData, postId, parentId });
  };

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      onClose();
    } else if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <div>
      <div className="flex justify-center mt-4">
        <div className="max-w-md  w-full">
          <form className="space-y-7" action={createCommentHandler}>
            <TextArea
              name="text"
              label="متن نظر"
              value={text}
              isRequired
              onChange={(e) => setText(e.target.value)}
            />
            <SubmitButton>تایید</SubmitButton>
          </form>
        </div>
      </div>
    </div>
  );
}
export default CommentForm;
