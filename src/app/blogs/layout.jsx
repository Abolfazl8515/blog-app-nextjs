import { getCategories } from "@/services/categoryService";

async function Layout({ children }) {
  const { categories } = await getCategories();
  return (
    <div className="container xl:max-w-screen-xl">
      <h1 className="text-secondary-700 text-2xl">لیست بلاگ ها </h1>
      <div className="grid grid-cols-12 gap-8 mt-10">
        <div className="col-span-12 lg:col-span-4 xl:col-span-3">
          <p className="text-secondary-700 text-xl">دسته بندی ها</p>
          <ul>
            {categories.map((item) => (
              <li className="text-secondary-700">{item.title}</li>
            ))}
          </ul>
        </div>
        <div className="col-span-12 lg:col-span-8 xl:col-span-9">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
