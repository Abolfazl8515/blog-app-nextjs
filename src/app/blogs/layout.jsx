import Header from "@/components/Header";

export default function RootLayout({ children }) {
  return (
    <>
      <Header />
      <div className="container xl:max-w-screen-xl">{children}</div>
    </>
  );
}
