import { Suspense } from "react";
import PostList from "./_components/PostList";
import Spinner from "@/ui/Loading";

export const metadata = {
  title: "لیست بلاگ ها",
};

async function BlogsPage() {

  return (
    <div>
      <h3>لیست بلاگ ها</h3>
      <Suspense fallback={<Spinner />}>
        <PostList />
      </Suspense>
    </div>
  );
}

export default BlogsPage;
