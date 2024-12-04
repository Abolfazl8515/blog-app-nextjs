import { Suspense } from "react";
import CategoryList from "./_components/CategoryList";
import Spinner from "@/ui/Loading";

function Layout({ children }) {
  return (
    <div className="container xl:max-w-screen-lg">
      <h1 className="text-secondary-700 text-2xl">لیست بلاگ ها </h1>
      <div className="grid grid-cols-12 gap-8 mt-10">
        <div className="col-span-12 lg:col-span-4 xl:col-span-3">
          <Suspense fallback={<Spinner />}>
            <CategoryList />
          </Suspense>
        </div>
        <div className="col-span-12 lg:col-span-8 xl:col-span-9">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
