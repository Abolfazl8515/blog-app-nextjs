"use client";
import Header from "@/components/Header";
import Search from "@/ui/Search";
import LatestPostsHome from "@/components/LatestPostsHome";
import { Suspense } from "react";
import {
  BookmarkIcon,
  ChatBubbleBottomCenterIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import "aos/dist/aos.css";
import Aos from "aos";

Aos.init({
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init",
  animatedClassName: "aos-animate",
  once: true,
});

export default function Home() {
  return (
    <>
      <Header />
      <main className="container xl:max-w-screen-xl flex flex-col gap-y-16">
        <section data-aos="fade-left" data-aos-duration="500">
          <h1 className="text-center text-3xl md:text-5xl mt-16 font-black">
            <p className="text-secondary-400 drop-shadow-lg">
              هرچی دلت میخواد بنویس تو
            </p>
            <p className="mt-5 text-secondary-500 drop-shadow-2xl">
              &ldquo;بلاگستان&rdquo;
            </p>
          </h1>
          <div className="md:w-1/2 w-11/12 mx-auto mt-7">
            <Suspense>
              <Search path="/blogs" />
            </Suspense>
          </div>
        </section>
        <section className="md:w-3/4 w-full mx-auto flex md:flex-row flex-col">
          <div
            className="md:w-1/2 w-full flex flex-col"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <h3 className="text-secondary-500 text-2xl font-bold">
              محتوای خلاقانه خودتو بیار اینجا
            </h3>
            <p className="text-secondary-500">
              بقیه میتونن بیان محتوات ببینن و واست کامنت بزارن یا لایک کنن
            </p>
          </div>
          <div className="md:w-1/2 w-full flex flex-col gap-y-5 mt-5 md:mt-0">
            <ShowAdvantagesSection
              title="لایک"
              description="بقیه میتونن پست هات ببینن و اگه خوششون بیاد لایک میکنن"
              icon={<HeartIcon className="w-5 h-5 text-white" />}
            />
            <ShowAdvantagesSection
              title="کامنت"
              description="مردم پست هات میبینن و نظرشون برات کامنت میکنن"
              icon={
                <ChatBubbleBottomCenterIcon className="w-5 h-5 text-white" />
              }
            />
            <ShowAdvantagesSection
              title="بوکمارک"
              description="اگه پست هات خیلی تاثیرگذار باشه بقیه بوکمارکش میکنن"
              icon={<BookmarkIcon className="w-5 h-5 text-white" />}
            />
          </div>
        </section>
        <section className="">
          <h3
            data-aos="fade-right"
            data-aos-duration="500"
            className="w-48 mx-auto text-white rounded-lg text-center text-xl p-3 mb-10 bg-primary-700"
          >
            آخرین بلاگ ها
          </h3>
          <div
            className="w-5/6 mx-auto"
            data-aos="fade-left"
            data-aos-duration="500"
          >
            <LatestPostsHome />
          </div>
        </section>
      </main>
    </>
  );
}

function ShowAdvantagesSection({ title, description, icon }) {
  return (
    <div
      data-aos="flip-left"
      data-aos-duration="500"
      className="w-full relative border border-secondary-300 px-7 py-5 rounded-lg"
    >
      <div className="absolute -right-3 w-7 h-7 bg-primary-700 rounded-lg flex justify-center items-center">
        {icon}
      </div>
      <p className="text-secondary-500 font-bold text-lg">{title}</p>
      <p>{description}</p>
    </div>
  );
}
