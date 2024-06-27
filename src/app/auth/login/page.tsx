"use client";

import Input from "@/components/Input";
import { signIn } from "next-auth/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

const initialValue = {
  username: "",
  password: "",
};

const validationSchema = Yup.object({
  username: Yup.string().required("username tidak boleh kosong"),
  password: Yup.string().required("password tidak boleh kosong"),
});

const Login = () => {
  const {
    values,
    errors,
    touched,
    handleChange,
    handleSubmit,
    resetForm,
    isSubmitting,
  } = useFormik({
    initialValues: initialValue,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await signIn("credentials", {
        callbackUrl: "/",
        username: values.username,
        password: values.password,
      });
      resetForm();
    },
  });

  return (
    <section className="w-full min-h-dvh flex justify-center items-center">
      <div className="w-[628px] bg-white border-4 border-primary p-16 rounded-xl flex items-center flex-col">
        <h1 className="text-4xl font-bold text-primary capitalize mb-8">
          selamat datang
        </h1>
        <Input
          label="username"
          type="text"
          placeholder="masukkan username"
          name="username"
          value={values.username}
          onChange={handleChange}
          isError={errors.username && touched.username}
          errorMessage={errors.username}
        />
        <Input
          label="password"
          type="password"
          placeholder="masukkan password"
          name="password"
          value={values.password}
          onChange={handleChange}
          isError={errors.password && touched.password}
          errorMessage={errors.password}
        />
        <button
          type="submit"
          className="w-full py-3 capitalize text-lg font-bold text-white bg-primary hover:bg-secondary rounded-md"
          onClick={() => handleSubmit()}
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            "loading..."
          ) : (
            <div className="flex justify-center items-center gap-2">
              <p>masuk</p>
              <FontAwesomeIcon icon={faRightToBracket} className="text-xl"/>
            </div>
          )}
        </button>
      </div>
    </section>
  );
};

export default Login;
