import { toPersianDigits } from "@/utils/numberFormatter";
import {
  ChatBubbleBottomCenterIcon,
  DocumentTextIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import LatestPosts from "./_components/LatestPosts";
import Card from "./_components/Card";

const dashboardList = [
  {
    id: 1,
    title: "کاربران",
    num: 12,
    icon: <UsersIcon className="w-4 h-4" />,
  },
  {
    id: 2,
    title: "پست ها",
    num: 5,
    icon: <DocumentTextIcon className="w-4 h-4" />,
  },
  {
    id: 3,
    title: "نظرات",
    num: 6,
    icon: <ChatBubbleBottomCenterIcon className="w-4 h-4" />,
  },
];

function Profile() {
  return (
    <div>
      <div>
        <h4 className="font-bold text-lg">داشبورد</h4>
        <div className="w-full flex gap-x-4 justify-center items-center mt-5">
          {dashboardList.map((item) => (
            <Card item={item} key={item.id} />
          ))}
        </div>
      </div>
      <div className="mt-8">
        <h4 className="font-bold text-lg">اخرین پست ها</h4>
        <LatestPosts />
      </div>
    </div>
  );
}

export default Profile;
