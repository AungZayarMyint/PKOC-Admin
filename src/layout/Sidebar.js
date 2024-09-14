import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import logo from "../assets/images/logo6.webp";
import { logoutHandler } from "../utils/Helper";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const params = useParams();
  const url = window.location.pathname;

  const { user_info } = useSelector((state) => state.userInfo);

  useEffect(() => {}, [user_info]);

  return (
    <aside
      className="js-navbar-vertical-aside navbar navbar-vertical-aside navbar-vertical navbar-vertical-fixed navbar-expand-xl navbar-bordered"
      style={{ backgroundColor: "#25282a" }}
    >
      <div className="navbar-vertical-container">
        <div className="navbar-vertical-footer-offset">
          {/* Logo */}
          <Link
            className="d-flex justify-content-center pt-2"
            to="/"
            aria-label="Front"
          >
            <img
              className="mx-auto"
              src={logo}
              alt="Logo"
              style={{ width: "90px" }}
            />
          </Link>
          {/* End Logo */}

          {/* Navbar Vertical Toggle */}
          <button
            type="button"
            className="js-navbar-vertical-aside-toggle-invoker navbar-aside-toggler"
          >
            <i
              className="bi-arrow-bar-left navbar-toggler-short-align"
              data-bs-template='<div className="tooltip d-none d-md-block" role="tooltip"><div className="arrow"></div><div className="tooltip-inner"></div></div>'
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="Collapse"
            ></i>
            <i
              className="bi-arrow-bar-right navbar-toggler-full-align"
              data-bs-template='<div className="tooltip d-none d-md-block" role="tooltip"><div className="arrow"></div><div className="tooltip-inner"></div></div>'
              data-bs-toggle="tooltip"
              data-bs-placement="right"
              title="Expand"
            ></i>
          </button>
          {/* End Navbar Vertical Toggle */}
          <div className="navbar-vertical-content">
            <div
              id="navbarVerticalMenu"
              className="nav nav-pills nav-vertical card-navbar-nav"
            >
              <div className="nav-item">
                <Link
                  className={`nav-link ${url === "/posts" || url === "/"}`}
                  to="/posts"
                >
                  <i class="bi bi-postcard nav-icon"></i>
                  <span className="nav-link-title">Posts</span>
                </Link>
              </div>

              <div className="nav-item">
                <Link
                  className={`nav-link ${url === "/create-post" && "active"}`}
                  to="/create-post"
                >
                  <i className="bi bi-file-earmark-post nav-icon"></i>
                  <span className="nav-link-title">Create Post</span>
                </Link>
              </div>

              <div className="nav-item">
                <Link
                  className={`nav-link ${
                    url === "/change-password" && "active"
                  }`}
                  to="/change-password"
                >
                  <i className="bi-key-fill nav-icon"></i>
                  <span className="nav-link-title">Change Password</span>
                </Link>
              </div>

              <span className="mt-4 dropdown-header">Logout</span>
              <small className="bi-three-dots nav-subtitle-replacer"></small>
              <div className="nav-item">
                <Link
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={logoutHandler}
                >
                  <i className="bi bi-box-arrow-right nav-icon"></i>
                  <span className="nav-link-title">Logout</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
