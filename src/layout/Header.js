import React, { useEffect, useState } from "react";
import profile_img from "../assets/images/logo6.webp";
import logo from "../assets/images/logo6.webp";
import { decodeData, successToaster } from "../utils/Helper";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { refreshHandler } from "../store/slices/refreshSlice";

const Header = () => {
  const [userInfo, setUserInfo] = useState({});
  const dispatch = useDispatch();
  const { refresh } = useSelector((state) => state.refresh);

  useEffect(() => {
    const token = localStorage.getItem("r_c_a");
    if (token) {
      setUserInfo(decodeData(token));
    }
  }, []);

  return (
    <header
      id="header"
      className="navbar navbar-expand-lg navbar-fixed navbar-height navbar-container navbar-bordered bg-white"
    >
      <div className="navbar-nav-wrap">
        <Link className="navbar-brand" to={"/"} aria-label="Front">
          <img
            className=""
            src={logo}
            alt="Logo"
            data-hs-theme-appearance="default"
            style={{ width: "75px" }}
          />
        </Link>

        <div className="navbar-nav-wrap-content-start">
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
        </div>

        <div className="navbar-nav-wrap-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div className="dropdown">
                <a
                  className="navbar-dropdown-account-wrapper"
                  href="#javascript"
                  id="accountNavbarDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  data-bs-auto-close="outside"
                  data-bs-dropdown-animation
                >
                  <div className="avatar avatar-sm avatar-circle border border-primary">
                    <img
                      className="avatar-img"
                      src={profile_img}
                      alt="Image Description"
                    />
                    <span className="avatar-status avatar-sm-status avatar-status-success"></span>
                  </div>
                </a>

                <div
                  className="dropdown-menu dropdown-menu-end navbar-dropdown-menu navbar-dropdown-menu-borderless navbar-dropdown-account"
                  aria-labelledby="accountNavbarDropdown"
                  style={{ width: "16rem" }}
                >
                  <div className="dropdown-item-text">
                    <div className="d-flex align-items-center">
                      <div className="avatar avatar-sm avatar-circle border border-2 border-primary">
                        <img
                          className="avatar-img"
                          src={profile_img}
                          alt="Image Description"
                        />
                      </div>
                      <div className="ms-3">
                        <h5 className="mb-1">{userInfo?.name}</h5>

                        <p className="mb-0">{userInfo?.phone}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
