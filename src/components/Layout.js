import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`${className} w-full h-full inline-block z-0 bg-light dark:bg-dark
       dark:text-light`}
    >
      {children}
    </div>
  );
};

export default Layout;
