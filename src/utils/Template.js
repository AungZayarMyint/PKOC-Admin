import React from "react";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import { ToastContainer } from "react-toastify";
import Loader from "./Loader";

const Template = ({ title, isLoading = false, children }) => {
  return (
    <>
      {isLoading && <Loader />}
      <div>
        <Header />
        <Sidebar />
        <main id="content" role="main" className="main bg-light">
          <div className="content container-fluid">
            <h3
              className="page-header-title mb-3 text-secondary"
              style={{ fontWeight: "600" }}
            >
              {title}
            </h3>
            {children}
          </div>
        </main>
        <ToastContainer limit={1} />
      </div>
    </>
  );
};

export default Template;
