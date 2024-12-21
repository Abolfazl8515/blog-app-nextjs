"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const FilterDropDown = ({ options, filterField }) => {
  const queryParams = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const value = queryParams.get(filterField) || "";

  const changeHandler = (e) => {
    const search = e.target.value;
    const newParams = new URLSearchParams(queryParams.toString());
    if (search) {
      newParams.set(filterField, search);
    } else {
      newParams.delete(filterField);
    }
    router.push(`${pathName}?${newParams.toString()}`, { scroll: false });
  };
  return (
    <select
      value={value}
      onChange={changeHandler}
      className="textField__input bg-secondary-0 text-xs"
    >
      {options.map((item) => (
        <option key={item.value} value={item.value}>
          {item.label}
        </option>
      ))}
    </select>
  );
};

export default FilterDropDown;
