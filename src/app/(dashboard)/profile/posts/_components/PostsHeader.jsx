import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import FilterDropDown from "@/ui/FilterDropDown";

const options = [{ value: "earliest", label: "قدیمی ترین" }];

function PostsHeader() {
  return (
    <div className="flex items-center justify-between mb-8">
      <div className="w-1/2 flex gap-x-3 items-center">
        <h1 className="font-black text-secondary-700 text-xl">پست های شما</h1>
        <Link
          href="/profile/posts/create"
          className="btn btn--primary flex items-center gap-x-2  px-3"
        >
          <PlusIcon className="w-4 h-4" />
          <span>اضافه کردن پست</span>
        </Link>
      </div>
      <div className="w-1/3">
        <FilterDropDown options={options} filterField="sort" />
      </div>
    </div>
  );
}

export default PostsHeader;
