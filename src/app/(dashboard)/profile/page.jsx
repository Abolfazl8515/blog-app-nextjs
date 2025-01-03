import {
  ArrowLeftIcon,
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
import queryString from "query-string";
import ButtonIcon from "@/ui/ButtonIcon";
import Link from "next/link";
import { Suspense } from "react";
import Fallback from "@/ui/FallBack";

async function Profile({ searchParams }) {
  const query = await searchParams;
  const stringified = queryString.stringify(query);
  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);
  const { posts } = await getBlogs(options, stringified);
  return (
    <div>
      <div>
        <h4 className="font-bold text-lg text-secondary-500">داشبورد</h4>
        <div className="w-full flex lg:flex-row flex-col gap-y-4 lg:gap-x-4 justify-center items-center mt-5">
          <GenerateDashboardList />
        </div>
      </div>
      <div className="mt-8">
        <h4 className="font-bold text-lg text-secondary-500">اخرین پست ها</h4>
        {posts.length > 0 ? (
          <Suspense fallback={<Fallback />}>
            <LatestPosts posts={posts} />
          </Suspense>
        ) : (
          <p className="text-secondary-500">پستی وجود ندارد</p>
        )}
        <div className="flex justify-center mt-5">
          <Link href="/profile/posts">
            <ButtonIcon variant="primary">
              رفتن به صفحه پست ها
              <ArrowLeftIcon />
            </ButtonIcon>
          </Link>
        </div>
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

  return dashboardList.map((item) => (
    <Suspense key={item.id} fallback={<Fallback />}>
      <Card item={item} />
    </Suspense>
  ));
}
