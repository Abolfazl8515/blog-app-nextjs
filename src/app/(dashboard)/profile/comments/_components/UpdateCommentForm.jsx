"use client";
import Select from "@/ui/Select";
import SubmitButton from "@/ui/SubmitButton";
import { useActionState, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import updateComment from "../_actions/updateComment";

const options = [
  {
    _id: 0,
    title: "رد شده",
  },
  {
    _id: 1,
    title: "در انتظار تایید",
  },
  {
    _id: 2,
    title: "قبول",
  },
];

function UpdateCommentForm({ comment, onClose }) {
  const [state, formAction] = useActionState(updateComment, {
    error: "",
    message: "",
  });

  const { register } = useForm({
    defaultValues: { status: comment.status },
  });

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      onClose();
    }
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state,onClose]);

  return (
    <form
      className="form"
      action={async (formData) => {
        await formAction({ formData, commentId: comment._id });
      }}
    >
      <Select
        label="تغییر وضعیت"
        required
        name="status"
        register={register}
        options={options}
      />
      <SubmitButton type="submit" variant="primary" className="w-full">
        تایید
      </SubmitButton>
    </form>
  );
}

export default UpdateCommentForm;
