import { Suspense } from "react";
import Spinner from "@/ui/Loading";
import CategoryList from "../_components/CategoryList";

function Layout({ children }) {
  return (
    <div className="container xl:max-w-screen-lg">
      <h1 className="text-secondary-700 text-2xl fixed">دسته بندی ها</h1>
      <div className="grid grid-cols-12 gap-8 mt-10">
        <div className="col-span-12 lg:col-span-4 xl:col-span-3">
          <div className="fixed top-40">
            <Suspense fallback={<Spinner />}>
              <CategoryList />
            </Suspense>
          </div>
        </div>
        <div className="col-span-12 lg:col-span-8 xl:col-span-9 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
