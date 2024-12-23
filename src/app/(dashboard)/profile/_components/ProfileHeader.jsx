"use client";
import { useAuth } from "@/context/AuthProvider";
import useDevice from "@/hooks/useDevice";
import Avatar from "@/ui/Avatar";
import ButtonIcon from "@/ui/ButtonIcon";
import MobileSideBar from "@/ui/MobileSideBar";
import { Bars3Icon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useState } from "react";
import SideBar from "./SideBar";

function ProfileHeader() {
  const { user, isLoading } = useAuth();
  const [open, setOpen] = useState(false);
  const { isMobileDevice } = useDevice("(max-width: 1024px)");

  return (
    <header
      className={`bg-secondary-0 ${isLoading && "bg-opacity-30 blur-md"}`}
    >
      <div className="flex items-center justify-between py-5 px-4 lg:px-8">
        <div className="flex items-center gap-x-3">
          <div className="flex justify-start items-center gap-x-2">
            {isMobileDevice && (
              <MobileSideBar open={open} setOpen={setOpen}>
                <SideBar />
              </MobileSideBar>
            )}
            <Bars3Icon
              onClick={() => setOpen(true)}
              className="w-7 h-7 text-secondary-700 flex lg:hidden cursor-pointer"
            />
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
