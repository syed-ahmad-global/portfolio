import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Layout from "./Layout";
import {
  FaPaperPlane,
  FaCircleNotch,
  FaExclamationTriangle,
  FaCheckCircle,
} from "react-icons/fa";

const ContactForm = () => {
  const navigate = useNavigate();
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string()
      .min(10, "Message must be at least 10 characters")
      .required("Message is required"),
  });

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const formEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT;
      const response = await fetch(formEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok && response.status === 200) {
        resetForm();
        toast.success("Message sent successfully!");
        setTimeout(() => navigate("/success"), 1500);
      } else {
        let errorMessage = "Failed to send message. Please try again.";
        try {
          const errorData = await response.json();
          errorMessage = errorData?.message || errorMessage;
        } catch (e) {
          // Keep default message if response can't be parsed
        }
        toast.error(errorMessage);
        setTimeout(() => navigate("/failure"), 1500);
      }
    } catch (error) {
      toast.error("Network error. Please check your connection and try again.");
      // In production, consider using a proper logging service
      if (import.meta.env.DEV) {
        console.error("Error sending form data:", error);
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <ToastContainer />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, errors, touched }) => (
          <Form>
            <div className="space-y-12">
              <div className=" pb-12">
                <h2 className="text-base/7 font-semibold text-white dark:text-gray-900">
                  Contact Me
                </h2>
                <p className="mt-1 text-sm/6 text-gray-300 dark:text-gray-600">
                  I am interested in freelance opportunities – especially
                  ambitious or large projects. However, if you have other
                  request or question, don't hesitate to contact me using below
                  form either.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="name"
                      className="block text-sm/6 font-medium text-white dark:text-gray-900"
                    >
                      Name{" "}
                      <span className="text-red-400" aria-label="required">
                        *
                      </span>
                    </label>
                    <div className="mt-2 relative">
                      <Field
                        id="name"
                        name="name"
                        type="text"
                        aria-required="true"
                        aria-describedby="name-error"
                        className={`block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white dark:text-gray-900 outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 dark:border dark:border-gray-800 dark:bg-slate-400 dark:bg-opacity-20 dark:backdrop-filter dark:backdrop-blur-sm transition-all duration-200 pr-10 ${
                          errors.name && touched.name
                            ? "outline-red-400 dark:outline-red-500 bg-red-500/10 dark:bg-red-500/20 ring-red-400/20 dark:ring-red-500/20 ring-1"
                            : touched.name && !errors.name
                            ? "outline-green-400 dark:outline-green-500 bg-green-500/10 dark:bg-green-500/20"
                            : ""
                        }`}
                      />
                      {touched.name && !errors.name && (
                        <FaCheckCircle
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-400 dark:text-green-500"
                          aria-hidden="true"
                        />
                      )}
                      <ErrorMessage
                        name="name"
                        component="div"
                        id="name-error"
                        className="flex items-center gap-1 text-red-400 dark:text-red-500 text-sm mt-1 font-medium"
                        role="alert"
                      >
                        {(msg) => (
                          <span className="flex items-center gap-1">
                            <FaExclamationTriangle
                              className="w-3 h-3 text-red-400 dark:text-red-500"
                              aria-hidden="true"
                            />
                            <span className="text-red-400 dark:text-red-500">
                              {msg}
                            </span>
                          </span>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="block text-sm/6 font-medium text-white dark:text-gray-900"
                    >
                      Email address{" "}
                      <span className="text-red-400" aria-label="required">
                        *
                      </span>
                    </label>
                    <div className="mt-2 relative">
                      <Field
                        id="email"
                        name="email"
                        type="email"
                        aria-required="true"
                        aria-describedby="email-error"
                        className={`block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white dark:text-gray-900 outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 dark:border dark:border-gray-800 dark:bg-slate-400 dark:bg-opacity-20 dark:backdrop-filter dark:backdrop-blur-sm transition-all duration-200 pr-10 ${
                          errors.email && touched.email
                            ? "outline-red-400 dark:outline-red-500 bg-red-500/10 dark:bg-red-500/20 ring-red-400/20 dark:ring-red-500/20 ring-1"
                            : touched.email && !errors.email
                            ? "outline-green-400 dark:outline-green-500 bg-green-500/10 dark:bg-green-500/20"
                            : ""
                        }`}
                      />
                      {touched.email && !errors.email && (
                        <FaCheckCircle
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-400 dark:text-green-500"
                          aria-hidden="true"
                        />
                      )}
                      <ErrorMessage
                        name="email"
                        component="div"
                        id="email-error"
                        className="flex items-center gap-1 text-red-400 dark:text-red-500 text-sm mt-1 font-medium"
                        role="alert"
                      >
                        {(msg) => (
                          <span className="flex items-center gap-1">
                            <FaExclamationTriangle
                              className="w-3 h-3 text-red-400 dark:text-red-500"
                              aria-hidden="true"
                            />
                            <span className="text-red-400 dark:text-red-500">
                              {msg}
                            </span>
                          </span>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="subject"
                      className="block text-sm/6 font-medium text-white dark:text-gray-900"
                    >
                      Subject{" "}
                      <span className="text-red-400" aria-label="required">
                        *
                      </span>
                    </label>
                    <div className="mt-2 relative">
                      <Field
                        id="subject"
                        name="subject"
                        type="text"
                        aria-required="true"
                        aria-describedby="subject-error"
                        className={`block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white dark:text-gray-900 outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 dark:border dark:border-gray-800 dark:bg-slate-400 dark:bg-opacity-20 dark:backdrop-filter dark:backdrop-blur-sm transition-all duration-200 pr-10 ${
                          errors.subject && touched.subject
                            ? "outline-red-400 dark:outline-red-500 bg-red-500/10 dark:bg-red-500/20 ring-red-400/20 dark:ring-red-500/20 ring-1"
                            : touched.subject && !errors.subject
                            ? "outline-green-400 dark:outline-green-500 bg-green-500/10 dark:bg-green-500/20"
                            : ""
                        }`}
                      />
                      {touched.subject && !errors.subject && (
                        <FaCheckCircle
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-green-400 dark:text-green-500"
                          aria-hidden="true"
                        />
                      )}
                      <ErrorMessage
                        name="subject"
                        component="div"
                        id="subject-error"
                        className="flex items-center gap-1 text-red-400 dark:text-red-500 text-sm mt-1 font-medium"
                        role="alert"
                      >
                        {(msg) => (
                          <span className="flex items-center gap-1">
                            <FaExclamationTriangle
                              className="w-3 h-3 text-red-400 dark:text-red-500"
                              aria-hidden="true"
                            />
                            <span className="text-red-400 dark:text-red-500">
                              {msg}
                            </span>
                          </span>
                        )}
                      </ErrorMessage>
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="message"
                      className="block text-sm/6 font-medium text-white dark:text-gray-900"
                    >
                      Message{" "}
                      <span className="text-red-400" aria-label="required">
                        *
                      </span>
                    </label>
                    <div className="mt-2">
                      <Field
                        as="textarea"
                        id="message"
                        name="message"
                        rows={3}
                        aria-required="true"
                        aria-describedby="message-error message-help"
                        className={`block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white dark:text-gray-900 outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 dark:border dark:border-gray-800 dark:bg-slate-400 dark:bg-opacity-20 dark:backdrop-filter dark:backdrop-blur-sm transition-all duration-200 ${
                          errors.message && touched.message
                            ? "outline-red-400 dark:outline-red-500 bg-red-500/10 dark:bg-red-500/20 ring-red-400/20 dark:ring-red-500/20 ring-1"
                            : touched.message && !errors.message
                            ? "outline-green-400 dark:outline-green-500 bg-green-500/10 dark:bg-green-500/20"
                            : ""
                        }`}
                      />
                      <ErrorMessage
                        name="message"
                        component="div"
                        id="message-error"
                        className="flex items-center gap-1 text-red-400 dark:text-red-500 text-sm mt-1 font-medium"
                        role="alert"
                      >
                        {(msg) => (
                          <span className="flex items-center gap-1">
                            <FaExclamationTriangle
                              className="w-3 h-3 text-red-400 dark:text-red-500"
                              aria-hidden="true"
                            />
                            <span className="text-red-400 dark:text-red-500">
                              {msg}
                            </span>
                          </span>
                        )}
                      </ErrorMessage>
                      <p
                        id="message-help"
                        className="mt-3 text-sm/6 text-gray-300 dark:text-gray-600"
                      >
                        Write a few sentences in your message (minimum 10
                        characters).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="submit"
                disabled={isSubmitting}
                aria-label={
                  isSubmitting ? "Submitting form, please wait" : "Send message"
                }
                className={`w-full rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm focus:outline-none transition duration-300 ease-in-out
                ${
                  isSubmitting
                    ? "bg-indigo-400 cursor-not-allowed opacity-50"
                    : "bg-indigo-500 hover:bg-indigo-400 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 cursor-pointer"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <span className="mr-2">Submitting...</span>
                    <FaCircleNotch
                      className="inline-block w-4 h-4 animate-spin"
                      aria-hidden="true"
                    />
                  </>
                ) : (
                  <>
                    <span className="mr-2">Send Message</span>
                    <FaPaperPlane
                      className="inline-block w-4 h-4"
                      aria-hidden="true"
                    />
                  </>
                )}
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </Layout>
  );
};

export default ContactForm;
