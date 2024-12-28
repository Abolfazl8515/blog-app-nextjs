import { getAllCommentsApi } from "@/services/blogsService";
import LatestComments from "./_components/LatestComments";
import { Suspense } from "react";
import Fallback from "@/ui/FallBack";

async function Comments() {
  const { comments } = await getAllCommentsApi();

  if (comments.length === 0) {
    return (
      <>
        <div className="px-3 mb-5">
          <h1 className="font-black text-secondary-700 text-xl">لیست نظرات</h1>
        </div>
        <p className="text-secondary-500">نظری وجود ندارد</p>
      </>
    );
  }

  return (
    <div>
      <div className="px-3 mb-5">
        <h1 className="font-black text-secondary-700 text-xl">لیست نظرات</h1>
      </div>
      <Suspense fallback={<Fallback />}>
        <LatestComments comments={comments} />
      </Suspense>
    </div>
  );
}

export default Comments;
