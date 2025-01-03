import { getSingleCommentApi } from "@/services/blogsService";
import { Suspense } from "react";
import Fallback from "@/ui/FallBack";
import LatestComments from "../../_components/LatestComments";
import { cookies } from "next/headers";
import setCookieOnReq from "@/utils/setCookieOnReq";

async function Answers({ params }) {
  const { commentId } = await params;
  const cookiesStore = await cookies();
  const options = setCookieOnReq(cookiesStore);
  const { comment } = await getSingleCommentApi(commentId, options);
  const { answers } = comment;

  if (answers.length === 0) {
    return (
      <>
        <div className="px-3 mb-5">
          <h1 className="font-black text-secondary-700 text-xl">
            لیست پاسخ ها به نظر &quot;{comment.content.text}&quot;
          </h1>
        </div>
        <p className="text-secondary-500">پاسخی وجود ندارد</p>
      </>
    );
  }

  return (
    <div>
      <div className="px-3 mb-5">
        <h1 className="font-black text-secondary-700 text-xl">
          لیست پاسخ ها به نظر &quot;{comment.content.text}&quot;
        </h1>
      </div>
      <Suspense fallback={<Fallback />}>
        <LatestComments comments={answers} />
      </Suspense>
    </div>
  );
}

export default Answers;
