"use client";
import ButtonIcon from "@/ui/ButtonIcon";
import ConfirmDelete from "@/ui/ConfirmDelete";
import Modal from "@/ui/Modal";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import deletePost from "../posts/_actions/deletePost";
import toast from "react-hot-toast";
import { usePathname, useRouter } from "next/navigation";

export function UpdateButton({ id }) {
  return (
    <Link href={`/profile/posts/${id}/edit`}>
      <ButtonIcon variant="outline">
        <PencilIcon />
      </ButtonIcon>
    </Link>
  );
}

const initialState = {
  message: "",
  error: "",
};

export function DeleteButton({ id: postId, postTitle }) {
  const [open, setOpen] = useState(false);
  const [state, formAction] = useActionState(deletePost, initialState);
  const pathname = usePathname();
  const router = useRouter();

  const deleteHandler = async (formData) => {
    await formAction({ formData, postId });
  };

  useEffect(() => {
    if (state?.message) {
      toast.success(state.message);
      if (pathname === "/profile") {
        router.push("/profile", { scroll: false });
      } else if (pathname === "/profile/posts") {
        router.push("/profile/posts", { scroll: false });
      }
      setOpen(false);
    } else if (state?.error) {
      toast.error(state.error);
    }
  }, [state]);

  return (
    <>
      <Modal
        onClose={() => setOpen(false)}
        open={open}
        title={`حذف ${postTitle}`}
      >
        <ConfirmDelete
          onClose={() => setOpen(false)}
          onConfirm={deleteHandler}
          resourceName={postTitle}
        />
      </Modal>
      <ButtonIcon variant="outline" onClick={() => setOpen(true)}>
        <TrashIcon />
      </ButtonIcon>
    </>
  );
}
