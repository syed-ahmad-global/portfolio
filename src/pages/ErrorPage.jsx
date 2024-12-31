import React from "react";
import { FaTimesCircle, FaArrowLeft, FaLink } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Layout from "../components/Layout";

const ErrorPage = () => {
  return (
    <Layout>
      <div className="text-center mx-auto p-4 text-white dark:text-gray-800 ">
        <div className="bg-red-500 p-6 rounded-full inline-block mb-6">
          <FaTimesCircle className="text-4xl text-white" />
        </div>
        <h1 className="text-3xl font-semibold text-red-500">
          Form Submission Failed!
        </h1>
        <p className="mt-4 text-lg">
          We encountered an issue while processing your form. You can still
          reach out to me through my other available methods.
        </p>
        <div className="flex  items-center justify-center mt-6 gap-3">
          <div className="mt-6">
            <a
              href="https://linktr.ee/syed_ahmad_global"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-custom-white dark:text-custom-gray text-sm bg-slate-400 bg-opacity-20 backdrop-filter backdrop-blur-sm border border-white dark:border-gray-800 border-opacity-20 shadow-sm rounded-md px-4 py-2"
            >
              <FaLink className="w-5 h-5" />
              Linktree
            </a>
          </div>
          <div className="mt-6">
            <NavLink
              to="/"
              className="px-4 py-2 bg-slate-400 bg-opacity-20 backdrop-filter backdrop-blur-sm border border-white dark:border-gray-800 border-opacity-20 text-white dark:text-gray-800 shadow-sm rounded-md text-sm font-medium flex items-center gap-1 justify-center w-fit mx-auto"
            >
              <FaArrowLeft />
              Home
            </NavLink>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ErrorPage;
