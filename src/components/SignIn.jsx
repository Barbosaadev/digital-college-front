import React from "react";
import { useFormik } from "formik";
import { Link } from "react-router-dom";

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      Username: "",
      Password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div className=" p-4 m-auto text-center absolute w-full">
      <h1 className=" justify-center text-center text-3xl">Sign In</h1>
      <p className=" text-center pt-6">
        Don't have an account? <Link to="/signup">Sign Up</Link>
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

export default SignIn;
