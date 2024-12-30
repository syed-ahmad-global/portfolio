import React from "react";
import { FaCheckCircle, FaArrowLeft } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Layout from "../components/Layout";

const SuccessPage = () => {
  return (
    <Layout>
      <div className="text-center mx-auto p-4 text-white dark:text-gray-800 ">
        <div className="bg-green-500 p-6 rounded-full inline-block mb-6">
          <FaCheckCircle className="text-4xl text-white" />
        </div>
        <h1 className="text-3xl font-semibold text-green-500">
          Form Submitted Successfully!
        </h1>
        <p className="mt-4 text-lg">
          Thank you for contacting us. We will get back to you soon.
        </p>
        <div className="mt-8">
          <NavLink
            to="/"
            className="px-4 py-2 bg-slate-400 bg-opacity-20 backdrop-filter backdrop-blur-sm border border-white dark:border-gray-800 border-opacity-20 text-white dark:text-gray-800 shadow-sm rounded-md text-sm font-medium flex items-center gap-1 justify-center w-fit mx-auto"
          >
            <FaArrowLeft />
            Home
          </NavLink>
        </div>
      </div>
    </Layout>
  );
};

export default SuccessPage;
