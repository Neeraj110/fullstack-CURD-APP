import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import { useUpdateCoverImageMutation } from "../../slices/usersApiSlice";
import { setCredentials } from "../../slices/authSlices";
import { useNavigate } from "react-router-dom";

const UpdateCoverImage = () => {
  const [coverImage, setCoverImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.auth.userInfo);

  const [updateCoverImage, { isLoading }] = useUpdateCoverImageMutation();

  const handleAvatarChange = (e) => {
    setCoverImage(e.target.files[0]);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (!coverImage) {
      toast.error("Please select a cover image.");
      return;
    }
    setLoading(true);
    try {
      const formData = new FormData();
      formData.append("coverImage", coverImage);
      formData.append("_id", userInfo._id);

      const res = await updateCoverImage(formData).unwrap();
      dispatch(setCredentials(res));
      toast.success("Cover image updated successfully.");
      navigate("/profile");
    } catch (err) {
      toast.error(err?.data?.message || "Failed to update cover image.");
    }
    setLoading(false);
  };

  return (
    <div className="mt-24 Cover-Image">
      <div className="max-w-md mx-auto mt-20 p-6 text-white bg-black rounded-lg shadow-md">
        <h1 className="text-2xl font-semibold mb-6">Update Cover Image</h1>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label className="block text-gray-700">Select Cover Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleAvatarChange}
              className="mt-2 block w-full text-sm text-white bg-black p-2 rounded-lg border border-gray-300 cursor-pointer focus:outline-none"
            />
          </div>
          <button
            type="submit"
            className={`w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none ${
              isLoading || loading ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={isLoading || loading}
          >
            {isLoading || loading ? "Updating..." : "Update"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateCoverImage;
