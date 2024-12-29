import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="bg-custom-gray dark:bg-white">
      <div className="flex flex-wrap p-4 px-6 sm:py-8 md:py-10 lg:py-16 lg:pt-10 mx-auto h-full max-w-3xl justify-between">
        {children}
      </div>
    </div>
  );
};

export default Layout;
