"use client";
import { updateUser } from "@/api/updateUser";
import Input from "@/components/Input";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import { SessionProvider, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

const initialValue = {
  first_name: "",
  last_name: "",
  username: "",
  email: "",
};

const validationSchema = Yup.object({
  first_name: Yup.string()
    .required("firstname tidak boleh kosong")
    .min(1, "masukkan minimal 1"),
  last_name: Yup.string()
    .required("lastname tidak boleh kosong")
    .min(1, "masukkan minimal 1"),
  username: Yup.string()
    .required("username tidak boleh kosong")
    .min(5, "masukkan minimal 5"),
  email: Yup.string()
    .required("password tidak boleh kosong")
    .email("email tidak valid"),
});

const UpdateUser = ({ id }: { id: number }) => {
  const { data: session } = useSession();
  const router = useRouter();

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
      await updateUser(session?.user.token, id, values);
      resetForm();
      router.push("/dashboard");
    },
  });

  return (
    <SessionProvider>
      <section className="w-full min-h-dvh flex justify-center items-center">
        <div className="w-[628px] bg-white border-4 border-primary p-16 rounded-xl flex items-center flex-col">
          <h1 className="text-4xl font-bold text-primary capitalize mb-8">
            update user {id}
          </h1>
          <Input
            label="firstname"
            type="text"
            placeholder="masukkan firstname"
            name="first_name"
            value={values.first_name}
            onChange={handleChange}
            isError={errors.first_name && touched.first_name}
            errorMessage={errors.first_name}
          />
          <Input
            label="lastname"
            type="text"
            placeholder="masukkan lastname"
            name="last_name"
            value={values.last_name}
            onChange={handleChange}
            isError={errors.last_name && touched.last_name}
            errorMessage={errors.last_name}
          />
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
            label="email"
            type="email"
            placeholder="masukkan email"
            name="email"
            value={values.email}
            onChange={handleChange}
            isError={errors.email && touched.email}
            errorMessage={errors.email}
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
                <p>update</p>
                <FontAwesomeIcon icon={faPencil} className="text-xl" />
              </div>
            )}
          </button>
        </div>
      </section>
    </SessionProvider>
  );
};

export default UpdateUser;
