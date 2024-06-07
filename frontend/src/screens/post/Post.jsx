import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import { toast } from "react-toastify";
import parser from "html-react-parser";
import axios from "axios";
import { setCredentials } from "../../slices/authSlices";
import "./post.css";

function Post() {
  const [post, setPost] = useState(null);
  const [user, setUser] = useState(null);
  const [id, setId] = useState(null);
  const [followedUsers, setFollowedUsers] = useState([]);
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();
  const { postId } = useParams();
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await axios.get(`/api/v1/posts/${postId}`);
        setPost(data.data);
        setUser(data.data.owner);
        setId(data.data.owner._id);
      } catch (error) {
        console.error("Error fetching post or user data:", error);
        toast.error("Error fetching post or user data");
      }
    };

    fetchPost();
  }, [postId, userInfo]);

  const handleDelete = async (postId) => {
    setLoader(true);
    try {
      await axios.delete(`/api/v1/posts/${postId}`);
      toast.success("Post deleted successfully");
      navigate(`/`);
      setLoader(false);
    } catch (error) {
      console.error("Error deleting post:", error);
      toast.error("Error deleting post");
      setLoader(false);
    }
  };

  const handleFollowToggle = async (userId) => {
    try {
      const { data } = await axios.get(`/api/v1/follow/${userId}`);
      const message = data.message.message;

      dispatch(setCredentials(data));
      setFollowedUsers((prevFollowedUsers) =>
        message === "Followed successfully"
          ? [...prevFollowedUsers, userId]
          : prevFollowedUsers.filter((id) => id !== userId)
      );
    } catch (error) {
      console.error("Error following user:", error);
    }
  };

  if (!post || !user) {
    return <Loader />;
  }

  return (
    <div className="Result py-[1rem] px-[1rem] bg-black min-h-[90vh] mt-[4.4rem]  md:mx-[4rem]">
      <div className="flex items-center justify-between mb-4">
        <Link to={`/user/${id}`}>
          <div className="flex items-center">
            <img
              src={user.avatar || ""}
              alt="User Avatar"
              className="avatar w-10 h-10 rounded-full border-gray-500 object-cover md:w-[3.5rem] md:h-[3.5rem] "
            />
            <div className="ml-2 text-white">
              <span className="block font-bold md:text-[1.5rem]">
                {user.fullName}
              </span>
              <span className="text-sm md:text-lg">@{user.username}</span>
            </div>
          </div>
        </Link>

        {userInfo?.data?._id !== user?._id ? (
          <button
            className={`bg-blue-500 text-white font-semibold text-sm rounded-full  md:px-[3rem] md:py-[.7rem] md:text-[1rem] FollowBtn`}
            onClick={() => handleFollowToggle(user._id)}
          >
            {userInfo?.data?.following?.includes(user._id)
              ? "Following"
              : "Follow"}
          </button>
        ) : (
          <div className="flex">
            <button className="bg-green-500 text-white font-semibold text-sm rounded-full px-4 py-1 mr-2">
              <Link
                to={`/edit-post/${post._id}`}
                className="no-underline text-white"
              >
                Edit
              </Link>
            </button>
            {loader ? (
              <div className="text-white">
                <Loader width={"2rem"} height={"2rem"} />
              </div>
            ) : (
              <button
                className="bg-red-500 text-white font-semibold text-sm rounded-full px-3 py-1 "
                onClick={() => handleDelete(post._id)}
              >
                Delete
              </button>
            )}
          </div>
        )}
      </div>
      <div className="ml-[2rem]">
        {post.caption && (
          <div className="text-lg font-semibold mb-4 text-white overflow-x-hidden">
            {parser(post.caption)}
          </div>
        )}
      </div>
      <div className="rounded-lg p-1 mb-6 grid place-content-center">
        {post.image && (
          <img
            src={post.image}
            alt="Post"
            className="w-full h-auto object-cover rounded-lg mb-4 border-[1.5px]  md:w-[25rem]"
          />
        )}
      </div>
    </div>
  );
}

export default Post;
