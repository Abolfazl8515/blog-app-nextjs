import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NavLink from "@/components/NavLink";

function AuthLayout({ children }) {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center">
        <div className="w-full max-w-md p-2">
          <div className="flex justify-center">
            <NavLink
              active="bg-primary-900 text-white rounded-md"
              path="/signin"
            >
              ورود
            </NavLink>
            <NavLink
              active="bg-primary-900 text-white rounded-md"
              path="/signup"
            >
              ثبت نام
            </NavLink>
          </div>
          {children}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AuthLayout;
