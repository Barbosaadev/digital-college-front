import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const SignUp = () => {
  const SignUpSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email!").required("Required!"),
    Username: Yup.string()
      .min(2, "too short")
      .max(40, "too long")
      .required("Required!"),
    Password: Yup.string()
      .min(2, "too short")
      .max(30, "too long")
      .required("Required!"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      Username: "",
      Password: "",
    },
    validationSchema: SignUpSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className=" p-4 m-auto text-center absolute w-full">
      <h1 className=" justify-center text-center text-3xl">Sign Up</h1>
      <p className=" text-center pt-6">
        Already have an account? <Link to="/signin">Sign In</Link>
      </p>
      <form
        className=" inline-block relative w-1/2"
        onSubmit={formik.handleSubmit}
      >
        <label className=" flex mb-4" htmlFor="email">
          Email
        </label>
        <input
          className=" mb-4 w-full pl-2 py-2 border border-gray-600 rounded-md"
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        <label className=" flex mb-4" htmlFor="Username">
          Username
        </label>
        <input
          className=" mb-4 w-full pl-2 py-2 border border-gray-600 rounded-md"
          id="Username"
          name="Username"
          type="text"
          onChange={formik.handleChange}
          value={formik.values.Username}
        />
        <label className=" flex mb-4" htmlFor="Password">
          Password
        </label>
        <input
          className=" mb-4 w-full pl-2 py-2 border border-gray-600 rounded-md"
          id="Password"
          name="Password"
          type="password"
          onChange={formik.handleChange}
          value={formik.values.Password}
        />
        <div className=" flex items-center justify-center">
          <button
            className=" border border-black w-full py-2 mt-6 bg-blue-800 rounded-md text-white uppercase"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
