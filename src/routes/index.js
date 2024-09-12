import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import RouteGuard from "./RouteGuard";
import AdminDashboard from "../components/AdminDashboard";

import NotFound from "../utils/NotFound";
import { decodeData } from "../utils/Helper";
import ChangeSelfPassword from "../components/ChangeSelfPassword";
import Posts from "../components/Posts";
import CreatePost from "../components/CreatePost";
import PostDetails from "../components/PostDetails";

export default function Routers() {
  const token = decodeData(localStorage.getItem("r_c_a"));

  return (
    <Router basename="/">
      <Routes>
        <Route path="/login" element={<Login />} />

        {token?.user_role === "admin" && (
          <>
            <Route
              path="/"
              element={
                <RouteGuard>
                  <AdminDashboard />
                </RouteGuard>
              }
            />
            <Route
              path="/posts"
              element={
                <RouteGuard>
                  <Posts />
                </RouteGuard>
              }
            />

            <Route
              path="/create-post"
              element={
                <RouteGuard>
                  <CreatePost />
                </RouteGuard>
              }
            />

            <Route
              path="/post-details"
              element={
                <RouteGuard>
                  <PostDetails />
                </RouteGuard>
              }
            />

            <Route
              path="/change-password"
              element={
                <RouteGuard>
                  <ChangeSelfPassword />
                </RouteGuard>
              }
            />

            <Route
              path="/*"
              element={
                <RouteGuard>
                  <NotFound />
                </RouteGuard>
              }
            />
          </>
        )}
        <Route path="/*" element={<RouteGuard />} />
      </Routes>
    </Router>
  );
}
