import Header from "@/components/Header";
import vazirFont from "@/constants/localfont";
import "@/styles/globals.css";

export const metadata = {
  title: {
    template: "%s | برنامه مدیریت بلاگ",
    default: "برنامه مدیریت بلاگ",
  },
  description: "برنامه مدیریت بلاگ های شما",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans min-h-screen`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
