"use client";
import ButtonIcon from "@/ui/ButtonIcon";
import Modal from "@/ui/Modal";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import UpdateCommentForm from "./UpdateCommentForm";

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

export function DeleteBtn() {
  return (
    <ButtonIcon variant="outline">
      <TrashIcon />
    </ButtonIcon>
  );
}
