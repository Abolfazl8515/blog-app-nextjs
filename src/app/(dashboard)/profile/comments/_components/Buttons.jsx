"use client";
import ButtonIcon from "@/ui/ButtonIcon";
import Modal from "@/ui/Modal";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useActionState, useEffect, useState } from "react";
import UpdateCommentForm from "./UpdateCommentForm";
import ConfirmDelete from "@/ui/ConfirmDelete";
import deleteComment from "../_actions/deleteComment";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function UpdateBtn({ comment }) {
  const commentId = comment._id;
  const [open, setOpen] = useState(false);
  return (
    <>
      <Modal
        onClose={() => setOpen(false)}
        open={open}
        title="ویرایش نظر"
        description={`ویرایش نظر ${comment.user.name}`}
      >
        <UpdateCommentForm comment={comment} onClose={() => setOpen(false)} />
      </Modal>
      <ButtonIcon variant="outline" onClick={() => setOpen(true)}>
        <PencilIcon />
      </ButtonIcon>
    </>
  );
}

export function DeleteBtn({ comment }) {
  const [open, setOpen] = useState(false);
  const [state, formAction] = useActionState(deleteComment, {
    message: "",
    error: "",
  });
  const router = useRouter();

  const confirmHandler = (formData) => {
    formAction({ formData, commentId: comment._id });
  };

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      router.refresh();
      setOpen(false);
    }
    if (state?.error) {
      toast.error(state.error);
    }
  }, [state,router]);

  return (
    <>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        title="حذف نظر"
        description={`حذف نظر ${comment.user.name}`}
      >
        <ConfirmDelete
          onClose={() => setOpen(false)}
          onConfirm={confirmHandler}
          resourceName={` نظر ${comment.user.name}`}
        />
      </Modal>
      <ButtonIcon variant="outline" onClick={() => setOpen(true)}>
        <TrashIcon />
      </ButtonIcon>
    </>
  );
}
