import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import Layout from "./Layout";

import { FaPaperPlane, FaCircleNotch } from "react-icons/fa";

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
      const response = await fetch("https://formspree.io/f/xzzzvoyj", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        resetForm();
        navigate("/success");
      } else {
        alert("Failed to send the message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending form data:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Layout>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="space-y-12">
              <div className=" pb-12">
                <h2 className="text-base/7 font-semibold text-white dark:text-gray-700">
                  Contact Me
                </h2>
                <p className="mt-1 text-sm/6 text-gray-400 dark:text-gray-600">
                  I am interested in freelance opportunities – especially
                  ambitious or large projects. However, if you have other
                  request or question, don’t hesitate to contact me using below
                  form either.
                </p>

                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div className="sm:col-span-3">
                    <label
                      htmlFor="name"
                      className="block text-sm/6 font-medium text-white dark:text-gray-700"
                    >
                      Name
                    </label>
                    <div className="mt-2">
                      <Field
                        id="name"
                        name="name"
                        type="text"
                        className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white dark:text-gray-700 outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 dark:border dark:border-gray-800 dark:bg-slate-400 dark:bg-opacity-20 dark:backdrop-filter dark:backdrop-blur-sm"
                      />
                      <ErrorMessage
                        name="name"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>

                  <div className="sm:col-span-3">
                    <label
                      htmlFor="email"
                      className="block text-sm/6 font-medium text-white dark:text-gray-700"
                    >
                      Email address
                    </label>
                    <div className="mt-2">
                      <Field
                        id="email"
                        name="email"
                        type="email"
                        className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white dark:text-gray-700 outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 dark:border dark:border-gray-800 dark:bg-slate-400 dark:bg-opacity-20 dark:backdrop-filter dark:backdrop-blur-sm"
                      />
                      <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="subject"
                      className="block text-sm/6 font-medium text-white dark:text-gray-700"
                    >
                      Subject
                    </label>
                    <div className="mt-2">
                      <Field
                        id="subject"
                        name="subject"
                        type="text"
                        className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white dark:text-gray-700 outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 dark:border dark:border-gray-800 dark:bg-slate-400 dark:bg-opacity-20 dark:backdrop-filter dark:backdrop-blur-sm"
                      />
                      <ErrorMessage
                        name="subject"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                  </div>

                  <div className="col-span-full">
                    <label
                      htmlFor="message"
                      className="block text-sm/6 font-medium text-white dark:text-gray-700"
                    >
                      Message
                    </label>
                    <div className="mt-2">
                      <Field
                        as="textarea"
                        id="message"
                        name="message"
                        rows={3}
                        className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white dark:text-gray-700 outline outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6 dark:border dark:border-gray-800 dark:bg-slate-400 dark:bg-opacity-20 dark:backdrop-filter dark:backdrop-blur-sm"
                      />
                      <ErrorMessage
                        name="message"
                        component="div"
                        className="text-red-500 text-sm"
                      />
                    </div>
                    <p className="mt-3 text-sm/6 text-gray-400 dark:text-gray-600">
                      Write few sentences in message.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full rounded-md px-4 py-2 text-sm font-semibold text-white shadow-sm focus:outline-none transition duration-300 ease-in-out 
                ${
                  isSubmitting
                    ? "bg-indigo-400"
                    : "bg-indigo-500 hover:bg-indigo-400 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                }
                ${
                  isSubmitting
                    ? "cursor-not-allowed opacity-50"
                    : "cursor-pointer"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <span className="mr-2">Submitting...</span>
                    <FaCircleNotch className="inline-block w-4 h-4 animate-spin" />
                  </>
                ) : (
                  <>
                    <span className="mr-2">Send</span>
                    <FaPaperPlane className="inline-block w-4 h-4 " />
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
