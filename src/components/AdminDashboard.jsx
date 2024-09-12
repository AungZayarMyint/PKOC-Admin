import React, { useEffect, useState } from "react";
import Template from "../utils/Template";
import { getMethod } from "../service";
import { decodeData, errorToaster } from "../utils/Helper";
import { ADMIN_DASHBOARD_API } from "../service/constant";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminDashboard = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { refresh } = useSelector((state) => state.refresh);

  const fetchDashboardData = async () => {
    const token = decodeData(localStorage.getItem("r_c_a"));

    if (!token) {
      navigate("/login");
      throw new Error("Unauthenticated!");
    }

    const response = await getMethod(ADMIN_DASHBOARD_API, token.token);

    if (response?.isSuccess) {
      return response.data;
    } else {
      throw new Error("Failed to fetch dashboard data.");
    }
  };

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const result = await fetchDashboardData();
        setData(result);
      } catch (error) {
        errorToaster(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [refresh]);

  return (
    <Template title={""}>
      <div className="text-center mb-5">
        <h1 className="display-4">
          " Sasana Byatti Santisukha (Parahita) Monastery "
        </h1>
        <h3 className="font-italic">Admin Dashboard</h3>
      </div>

      <div className="row">
        <div className="col-sm-6 col-lg-3 mb-3 mb-lg-5">
          <Link className="card card-hover-shadow h-100" to={"/posts"}>
            <div className="card-body">
              <h6 className="card-subtitle">Total Posts</h6>

              <div className="row align-items-center gx-2 mb-1">
                <div className="col-6">
                  <h2 className="card-title text-inherit">
                    {data?.total_post?.toLocaleString() || 0}
                  </h2>
                </div>
                <div className="col-6">
                  <div className="chartjs-custom" style={{ height: "3rem" }} />
                </div>
              </div>
              <span className="badge bg-soft-success text-success">
                <i className="bi-graph-up"></i> List
              </span>
              {/* <span className="text-body fs-6 ms-1">{amountCommasSparated(Number(data?.master_amount ?? 0))} MMK</span> */}
            </div>
          </Link>
        </div>
      </div>
    </Template>
  );
};

export default AdminDashboard;
