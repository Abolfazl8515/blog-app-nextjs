import Link from "next/link";

const socialList = [
  {
    id: 0,
    href: "https://www.linkedin.com/in/abolfazl-boorboory-735021228/",
    label: "لینکدین",
  },
  {
    id: 1,
    href: "https://github.com/Abolfazl8515",
    label: "گیتهاب",
  },
];

const siteSectionsList = [
  {
    id: 0,
    href: "/",
    label: "خانه",
  },
  {
    id: 1,
    href: "/blogs",
    label: "بلاگ ها",
  },
  {
    id: 2,
    href: "/profile",
    label: "پروفایل",
  },
];

function Footer() {
  return (
    <footer className="bg-secondary-0 flex lg:justify-around md:justify-between flex-col md:flex-row md:gap-y-0 gap-y-10 p-20 mt-20">
      <div>
        <h5 className="text-secondary-500 text-xl font-bold">
          شبکه های اجتماعی
        </h5>
        <div>
          <ul className="px-6 text-secondary-500  !list-disc">
            {socialList.map((item) => (
              <li
                key={item.id}
                className="hover:text-primary-600 transition-all duration-200"
              >
                <Link href={item.href} target="_blank">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <h5 className="text-secondary-500 text-xl font-bold">بخش های سایت</h5>
        <ul className="px-6 text-secondary-500  !list-disc">
          {siteSectionsList.map((item) => (
            <li
              key={item.id}
              className="hover:text-primary-600 transition-all duration-200"
            >
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
