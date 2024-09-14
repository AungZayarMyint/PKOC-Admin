import React, { useEffect, useState } from "react";
import Template from "../utils/Template";
import Input from "../utils/Input";
import SubmitBtn from "../utils/SubmitBtn";
import Card from "../utils/Card";
import { getMethod, postMethod } from "../service"; // Adjust the import path
import {
  POST_DETAILS_API,
  UPDATE_POST_API,
  DELETE_POST_API,
} from "../service/constant"; // Adjust the import path
import { useNavigate, useParams } from "react-router-dom";
import { errorToaster, successToaster, decodeData } from "../utils/Helper"; // Adjust the import path

const PostDetails = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      setIsLoading(true);
      const token = decodeData(localStorage.getItem("r_c_a"));

      if (!token) {
        errorToaster("Unauthorized! Please login.");
        navigate("/login");
        return;
      }

      try {
        const res = await getMethod(
          `${POST_DETAILS_API}/${postId}`,
          token.token
        );
        if (res?.isSuccess) {
          setPost(res.data);
          setTitle(res.data.title);
          setDescription(res.data.description);
        } else {
          errorToaster(res.message || "Failed to fetch post details!");
        }
      } catch (error) {
        errorToaster("Error fetching post details!");
      }
      setIsLoading(false);
    };
    fetchPost();
  }, [postId, navigate]);

  const updatePostHandler = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const token = decodeData(localStorage.getItem("r_c_a"));

    if (!token) {
      errorToaster("Unauthorized! Please login.");
      navigate("/login");
      return;
    }

    const data = { title, description };
    try {
      const res = await postMethod(
        `${UPDATE_POST_API}/${postId}`,
        data,
        token.token
      );
      if (res?.isSuccess) {
        successToaster("Post updated successfully!");
        navigate("/posts");
      } else {
        errorToaster(res.message || "Failed to update post!");
      }
    } catch (error) {
      errorToaster("Error updating post!");
    }
    setIsLoading(false);
  };

  const deletePostHandler = async () => {
    setIsLoading(true);

    const token = decodeData(localStorage.getItem("r_c_a"));

    if (!token) {
      errorToaster("Unauthorized! Please login.");
      navigate("/login");
      return;
    }

    try {
      const res = await postMethod(
        `${DELETE_POST_API}/${postId}`,
        {},
        token.token
      );
      if (res?.isSuccess) {
        successToaster("Post deleted successfully!");
        navigate("/posts");
      } else {
        errorToaster(res.message || "Failed to delete post!");
      }
    } catch (error) {
      errorToaster("Error deleting post!");
    }
    setIsLoading(false);
  };

  return (
    <Template title="Post Details" isLoading={isLoading}>
      <Card>
        <form onSubmit={updatePostHandler}>
          <Input
            title="Title"
            type="text"
            value={title}
            event={(e) => setTitle(e.target.value)}
          />
          <Input
            title="Description"
            type="text"
            value={description}
            event={(e) => setDescription(e.target.value)}
          />
          <SubmitBtn
            type="submit"
            name="Update"
            title="Update Post"
            isLoading={isLoading}
          />
        </form>
        <button className="btn btn-danger mt-3" onClick={deletePostHandler}>
          Delete Post
        </button>
      </Card>
    </Template>
  );
};

export default PostDetails;
