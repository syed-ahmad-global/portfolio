import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-wrap p-10 px-8 sm:py-20 md:py-20 lg:py-40 lg:pt-20 mx-auto h-full max-w-3xl justify-between  ">
      {children}
    </div>
  );
};

export default Layout;
