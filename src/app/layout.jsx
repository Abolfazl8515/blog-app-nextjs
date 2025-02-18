import AuthProvider from "@/context/AuthProvider";
import vazirFont from "@/constants/localfont";
import "@/styles/globals.css";
import { Toaster } from "react-hot-toast";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import { DarkModeProvider } from "@/context/DarkModeProvider";

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
        <Toaster />
        <ReactQueryProvider>
          <DarkModeProvider>
            <AuthProvider>{children}</AuthProvider>
          </DarkModeProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
