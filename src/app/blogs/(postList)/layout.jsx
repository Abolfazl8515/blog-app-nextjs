import Search from "@/ui/Search";
import CategoryList from "../_components/CategoryList";
import CategoryListMobile from "../_components/CategoryListMobile";

export const metadata = {
  title: "لیست بلاگ ها",
};

function Layout({ children }) {
  return (
    <div className="container xl:max-w-screen-lg">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 items-center">
        <h3 className="text-xl">لیست تمام بلاگ ها</h3>
        <Search />
        <CategoryListMobile />
      </div>
      <div className="grid grid-cols-12 gap-8 mt-10">
        <div className="col-span-12 lg:col-span-4 xl:col-span-3">
          <div className="lg:block hidden">
            <CategoryList />
          </div>
        </div>
        <div className="col-span-12 lg:col-span-8 xl:col-span-9">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
