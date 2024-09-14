import React, { useState } from "react";
import Template from "../utils/Template";
import { useNavigate } from "react-router-dom";
import { postMultipleFormMethod } from "../service/index";
import { CREATE_POST_API } from "../service/constant";
import { successToaster, errorToaster, decodeData } from "../utils/Helper";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState([]);
  const [filePreviews, setFilePreviews] = useState([]);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFiles = e.target.files;
    setFiles(selectedFiles);

    const filePreviewsArray = [];
    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      const fileUrl = URL.createObjectURL(file);
      filePreviewsArray.push(fileUrl);
    }

    setFilePreviews(filePreviewsArray);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = decodeData(localStorage.getItem("r_c_a"));

    if (!token) {
      errorToaster("Unauthorized! Please login.");
      navigate("/login");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    for (let i = 0; i < files.length; i++) {
      formData.append("photos", files[i]);
    }

    console.log("formdata", formData);

    try {
      const res = await postMultipleFormMethod(
        CREATE_POST_API,
        formData,
        token.token
      );

      if (res && res.isSuccess) {
        successToaster("Post created successfully!");
        navigate("/posts");
      } else {
        setMessage(res?.message || "Failed to create post");
        errorToaster(res?.message || "Failed to create post");
      }
    } catch (error) {
      console.error("Error creating post:", error);
      errorToaster("Error creating post!");
    }
  };

  return (
    <Template title="Create New Post">
      <div className="text-center mb-5">
        <h3 className="display-5">Create New Post</h3>
      </div>

      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="card">
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-4">
                  <label htmlFor="title" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    className="form-control"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>

                <div className="form-group mb-4">
                  <label htmlFor="description" className="form-label">
                    Description
                  </label>
                  <textarea
                    id="description"
                    className="form-control"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  ></textarea>
                </div>

                <div className="form-group mb-4">
                  <label htmlFor="photos" className="form-label">
                    Upload Images
                  </label>
                  <input
                    type="file"
                    id="photos"
                    className="form-control"
                    onChange={handleFileChange}
                    multiple
                    required
                  />
                </div>

                {/* Image Preview Section */}
                <div className="mb-4">
                  {filePreviews.length > 0 && (
                    <div className="row">
                      {filePreviews.map((preview, index) => (
                        <div key={index} className="col-4 mb-3">
                          <img
                            src={preview}
                            alt={`Preview ${index}`}
                            className="img-thumbnail"
                            style={{ width: "100%", height: "auto" }}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  onSubmit={handleSubmit}
                >
                  Create Post
                </button>

                {message && (
                  <div className="alert alert-danger mt-3">{message}</div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
}
