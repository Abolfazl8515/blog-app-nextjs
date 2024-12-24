"use client";
import useDevice from "@/hooks/useDevice";
import FilterMobile from "@/ui/FilterMobile";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import CategoryList from "./CategoryList";

function CategoryListMobile() {
  const [open, setOpen] = useState(false);
  const { isMobileDevice } = useDevice("(max-width: 1024px)");
  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="lg:hidden w-full flex justify-between items-center bg-secondary-200 rounded-lg p-2 cursor-pointer"
      >
        <p className="text-secondary-700">فیلتر دسته بندی ها</p>
        <AdjustmentsHorizontalIcon className="w-7 h-7 text-secondary-700" />
      </div>
      {isMobileDevice && (
        <FilterMobile open={open} setOpen={setOpen}>
          <CategoryList />
        </FilterMobile>
      )}
    </>
  );
}

export default CategoryListMobile;
