import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../utils/Input";
import SubmitBtn from "../utils/SubmitBtn";
import Loader from "../utils/Loader";
import { postMethod } from "../service";
import { encodeData, errorToaster } from "../utils/Helper";
import bgImg from "../assets/images/card-6.svg";
import logo from "../assets/images/logo1.png";
import { ToastContainer } from "react-toastify";
import { LOGIN_API } from "../service/constant";

const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [userNameValidate, setUserNameValidate] = useState("");
  const [passwordValidate, setPasswordValidate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const data = {
      name: userName,
      password: password,
    };
    const res = await postMethod(`${LOGIN_API}`, data);
    if (res?.isSuccess || res?.status === "success") {
      localStorage.setItem("r_c_a", encodeData(res?.data));
      navigate("/");
      window.location.reload();
    } else {
      errorToaster(res?.message);
      res?.data?.name && setUserNameValidate(res?.data?.name);
      res?.data?.password && setPasswordValidate(res?.data?.password);
    }

    setIsLoading(false);
  };

  return (
    <>
      <main id="content" role="main">
        <div
          className="position-fixed top-0 end-0 start-0 bg-img-start"
          style={{ height: "32rem", backgroundImage: `url(${bgImg})` }}
        >
          <div className="shape shape-bottom zi-1">
            <svg
              preserveAspectRatio="none"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              viewBox="0 0 1921 273"
            >
              <polygon fill="#fff" points="0,273 1921,273 1921,0 " />
            </svg>
          </div>
        </div>
        <div className="container py-5 py-sm-7">
          <div className="d-flex justify-content-center mb-5">
            <img
              className="zi-2"
              src={logo}
              alt="Logo"
              style={{ width: "8rem" }}
            />
          </div>
          <div className="mx-auto" style={{ maxWidth: "30rem" }}>
            <div className="card card-lg mb-5">
              <div className="card-body">
                <form onSubmit={loginSubmitHandler}>
                  <div className="text-center">
                    <div className="mb-5">
                      <h1 className="display-5">Sign In</h1>
                    </div>
                  </div>
                  <Input
                    title="User Name"
                    type="text"
                    error={userNameValidate}
                    tabIndex={1}
                    placeholder="xyz..."
                    name="userName"
                    value={userName}
                    event={(e) => {
                      setUserName(e.target.value);
                      setUserNameValidate("");
                    }}
                  />
                  <Input
                    title="Password"
                    type="password"
                    error={passwordValidate}
                    tabIndex={2}
                    placeholder="Enter Password"
                    name="password"
                    value={password}
                    event={(e) => {
                      setPassword(e.target.value);
                      setPasswordValidate("");
                    }}
                  />

                  <div className="d-grid">
                    <SubmitBtn
                      type="submit"
                      isLoading={isLoading}
                      name="Sign In"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      {isLoading && <Loader />}
      <ToastContainer />
    </>
  );
};

export default Login;
