import Link from "next/link";

function Breadcrumbs({ Breadcrumbs }) {
  return (
    <div className="flex">
      {Breadcrumbs.map((item, index, arr) => (
        <Link href={item.href} key={item.label}>
          {index >= 1 && !arr.length - 1 && (
            <span className="text-secondary-700">\</span>
          )}
          <span className={`${item.active? "text-secondary-400":"text-secondary-700"} mx-1`}>
            {item.label}
          </span>
        </Link>
      ))}
    </div>
  );
}

export default Breadcrumbs;
