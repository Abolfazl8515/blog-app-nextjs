import {
  ChatBubbleBottomCenterIcon,
  DocumentTextIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import LatestPosts from "./_components/LatestPosts";
import Card from "./_components/Card";
import { getAllCommentsApi, getBlogs } from "@/services/blogsService";
import { cookies } from "next/headers";
import setCookieOnReq from "@/utils/setCookieOnReq";
import { getAllUsersApi } from "@/services/authService";

async function Profile({ searchParams }) {
  const search = await searchParams;
  return (
    <div>
      <div>
        <h4 className="font-bold text-lg">داشبورد</h4>
        <div className="w-full flex gap-x-4 justify-center items-center mt-5">
          <GenerateDashboardList />
        </div>
      </div>
      <div className="mt-8">
        <h4 className="font-bold text-lg">اخرین پست ها</h4>
        <LatestPosts query={search} />
      </div>
    </div>
  );
}

export default Profile;

async function GenerateDashboardList() {
  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);
  const { posts } = await getBlogs(options);
  const { users } = await getAllUsersApi(options);
  const { comments } = await getAllCommentsApi(options);

  const dashboardList = [
    {
      id: 1,
      title: "کاربران",
      num: users.length,
      icon: <UsersIcon className="w-4 h-4" />,
    },
    {
      id: 2,
      title: "پست ها",
      num: posts.length,
      icon: <DocumentTextIcon className="w-4 h-4" />,
    },
    {
      id: 3,
      title: "نظرات",
      num: comments.length,
      icon: <ChatBubbleBottomCenterIcon className="w-4 h-4" />,
    },
  ];

  return dashboardList.map((item) => <Card item={item} key={item.id} />);
}