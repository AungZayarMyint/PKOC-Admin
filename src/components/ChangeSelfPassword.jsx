import React, { useEffect, useState } from "react";
import Template from "../utils/Template";
import Input from "../utils/Input";
import SubmitBtn from "../utils/SubmitBtn";
import Card from "../utils/Card";
import { decodeData, errorToaster, successToaster } from "../utils/Helper";
import { useNavigate } from "react-router-dom";
import { postMethod } from "../service";
import { CHANGE_PASSWORD_API } from "../service/constant";

export default function ChangeSelfPassword() {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [conPass, setConPass] = useState("");
  const [newPassValidate, setNewPassValidate] = useState("");
  const [conPassValidate, setConPassValidate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const changePassHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (newPass !== conPass) {
      setNewPassValidate("Password does not match!");
      setConPassValidate("Confirm password does not match!");
      setIsLoading(false);
      return;
    }

    const data = {
      old_password: oldPass,
      new_password: newPass,
      password_confirmation: conPass,
    };
    const token = decodeData(localStorage.getItem("r_c_a"));
    if (token) {
      const res = await postMethod(`${CHANGE_PASSWORD_API}`, data, token.token);
      setIsLoading(false);
      if (res?.isSuccess) {
        successToaster("Password changed successfully!");
        setOldPass("");
        setNewPass("");
        setConPass("");
        navigate("/");
      } else {
        errorToaster(res.message || "Failed to change password!");
      }
    } else {
      setIsLoading(false);
      errorToaster("Unauthenticated!");
      setTimeout(() => {
        navigate("/login");
      }, 100);
    }
  };

  useEffect(() => {
    if (newPass === conPass) {
      setConPassValidate("");
      setNewPassValidate("");
    } else {
      setConPassValidate("Confirm password does not match!");
      setNewPassValidate("Password does not match!");
    }
  }, [newPass, conPass]);

  return (
    <Template title={"Change Self Password"} isLoading={isLoading}>
      <Card>
        <form className="row" onSubmit={changePassHandler}>
          <div className="col-md-6">
            <Input
              title={"Old Password"}
              type={"password"}
              tabIndex={1}
              placeholder={"Enter Old Password"}
              value={oldPass}
              event={(e) => setOldPass(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <Input
              title={"New Password"}
              type={"password"}
              tabIndex={2}
              placeholder={"Enter New Password"}
              value={newPass}
              event={(e) => setNewPass(e.target.value)}
              error={newPassValidate}
            />
          </div>
          <div className="col-md-6">
            <Input
              title={"Confirm Password"}
              type={"password"}
              tabIndex={3}
              placeholder={"Enter Confirm Password"}
              value={conPass}
              event={(e) => setConPass(e.target.value)}
              error={conPassValidate}
            />
          </div>
          <div className="col-md-6">
            <SubmitBtn
              type={"submit"}
              name={"Submit"}
              title="Submit"
              isLoading={isLoading}
            />
          </div>
        </form>
      </Card>
    </Template>
  );
}
