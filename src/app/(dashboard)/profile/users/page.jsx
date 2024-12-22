import Fallback from "@/ui/FallBack";
import { Suspense } from "react";
import LatestUsers from "./_components/LatestUsers";
import { getAllUsersApi } from "@/services/authService";
import { cookies } from "next/headers";
import setCookieOnReq from "@/utils/setCookieOnReq";

async function Users() {
  const cookiesStore = await cookies();
  const options = setCookieOnReq(cookiesStore);
  const { users } = await getAllUsersApi(options);
  return (
    <div>
      <div className="px-3 mb-5">
        <h1 className="font-black text-secondary-700 text-xl">لیست کاربران</h1>
      </div>
      <Suspense fallback={<Fallback />}>
        <LatestUsers users={users} />
      </Suspense>
    </div>
  );
}

export default Users;
