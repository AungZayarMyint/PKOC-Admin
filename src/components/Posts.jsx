import React, { useEffect, useState } from "react";
import Template from "../utils/Template";
import Input from "../utils/Input";
import SubmitBtn from "../utils/SubmitBtn";
import Card from "../utils/Card";
import { decodeData, errorToaster, successToaster } from "../utils/Helper";
import { useNavigate } from "react-router-dom";
import { getMethod } from "../service";
import { POST_API } from "../service/constant";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const fetchPosts = async () => {
    const token = decodeData(localStorage.getItem("r_c_a"));

    if (!token) {
      navigate("/login");
      throw new Error("Unauthenticated!");
    }

    const response = await getMethod(POST_API, token.token);

    if (response?.isSuccess) {
      return response.data;
    } else {
      throw new Error("Failed to fetch posts.");
    }
  };

  useEffect(() => {
    const getData = async () => {
      setIsLoading(true);
      try {
        const result = await fetchPosts();
        setPosts(result);
      } catch (error) {
        errorToaster(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, []);

  const handleClick = (id) => {
    navigate(`/post/${id}`);
  };

  return (
    <Template title="All Posts" isLoading={isLoading}>
      <div className="row">
        {posts.map((post) => (
          <div className="col-md-4" key={post.id}>
            <Card>
              <h5>{post.title}</h5>
              <p>{post.description}</p>
              <SubmitBtn onClick={() => handleClick(post.id)}>
                View Details
              </SubmitBtn>
            </Card>
          </div>
        ))}
      </div>
    </Template>
  );
};

export default Posts;
