"use client";
import Button from "@/ui/Button";
import TextField from "@/ui/TextField";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAuth } from "@/context/AuthProvider";
import SpinnerMini from "@/ui/SpinnerMini";

const schema = yup
  .object({
    name: yup
      .string()
      .required("نام و نام خوانوادگی الزامی است")
      .max(50, "نام و نام خوانوادگی نامعتبر است"),
    email: yup.string().email("ایمیل نامعتبر است").required("ایمیل الزامی است"),
    password: yup
      .string()
      .required("رمز عبور الزامی است")
      .min(8, "رمز عبور باید بیشتر از 8 کاراکتر باشد"),
  })
  .required();

function SignUp() {
  const {
    handleSubmit,
    register,
    formState: { errors, isLoading },
  } = useForm({ resolver: yupResolver(schema), mode: "onTouched" });
  const { signup } = useAuth();

  const submitHandler = async (values) => {
    await signup(values);
  };

  return (
    <div>
      <form action={handleSubmit(submitHandler)} className="space-y-10">
        <TextField
          isRequired
          name="name"
          label="نام و نام خوانوادگی"
          register={register}
          errors={errors}
        />
        <TextField
          isRequired
          name="email"
          label="ایمیل"
          register={register}
          errors={errors}
          dir="ltr"
        />
        <TextField
          isRequired
          name="password"
          label="رمز"
          register={register}
          errors={errors}
          dir="ltr"
        />
        <div>
          {isLoading ? (
            <SpinnerMini />
          ) : (
            <Button variant="primary" className="w-full" type="submit">
              ثبت نام
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}

export default SignUp;
