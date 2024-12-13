"use client";
import { useAuth } from "@/context/AuthProvider";
import Avatar from "@/ui/Avatar";
import ButtonIcon from "@/ui/ButtonIcon";
import Link from "next/link";

function ProfileHeader() {
  const { user, isLoading } = useAuth();
  return (
    <header
      className={`bg-secondary-0 ${isLoading ? "bg-opacity-30 blur-md" : ""}`}
    >
      <div className="flex items-center justify-between py-5 px-4 lg:px-8">
        <div className="flex items-center gap-x-3">
          <div className="flex flex-col lg:flex-row justify-start lg:items-center gap-x-2">
            <span className="text-sm lg:text-lg font-bold text-secondary-700">
              سلام؛ {user?.name}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-x-3">
          <Link href="/profile">
            <ButtonIcon
              color="outline"
              className={`border-secondary-200 rounded-2xl flex cursor-pointer items-center`}
            >
              <Avatar alt="user avatar" src={user?.avatarUrl} />
            </ButtonIcon>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default ProfileHeader;
