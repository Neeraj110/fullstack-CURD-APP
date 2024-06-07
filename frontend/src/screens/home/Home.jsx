import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineLike } from "react-icons/ai";
import parse from "html-react-parser";
import { useDispatch, useSelector } from "react-redux";
import { formatDistanceToNow } from "date-fns";
import "./home.css";

function Home() {
  const [posts, setPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  const { userInfo } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (userInfo) {
      const getPosts = async () => {
        try {
          const { data } = await axios.get("/api/v1/posts/allposts");
          setPosts(data.data);
        } catch (error) {
          console.error("Error fetching posts:", error);
        }
      };

      getPosts();
    } else {
      navigate("/login");
    }
  }, []);

  const handleLike = async (postId) => {
    try {
      const response = await axios.get(`/api/v1/posts/likes/${postId}`);
      const message = response.data.message;

      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post._id === postId
            ? {
                ...post,
                likes:
                  message === "Post liked"
                    ? [...post.likes, "currentUserId"]
                    : post.likes.filter((id) => id !== "currentUserId"),
              }
            : post
        )
      );

      setLikedPosts((prevLikedPosts) =>
        prevLikedPosts.includes(postId)
          ? prevLikedPosts.filter((id) => id !== postId)
          : [...prevLikedPosts, postId]
      );
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  const formatRelativeTime = (timestamp) => {
    return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
  };

  return (
    <div className="Home text-white h-auto  w-auto mt-[4.4rem] ">
      <br />
      {posts
        .slice()
        .reverse()
        .map(
          (
            post // Reversing the posts array
          ) => (
            <div
              className="Posts mt-[2rem] border-gray-500 border-b-[1.1px]  flex  h-auto "
              key={post._id}
            >
              <div className="Avatar-Image ">
                <img
                  src={post.owner.avatar}
                  alt=""
                  className="avatarImg rounded-full object-cover w-[2.5rem] h-[2.5rem] "
                />
              </div>
              <div className="upload-posts">
                <div className="Name flex flex-col">
                  <Link to={`user/${post.owner._id}`}>
                    <span className="text-[1.2rem] font-semibold">
                      {post.owner.fullName}
                    </span>
                    <span className="text-gray-500 text-[1rem] flex items-center gap-4">
                      @{post.owner.username}
                      <p className="text-gray-400 text-sm">
                        {formatRelativeTime(post.createdAt)}
                      </p>
                    </span>
                  </Link>
                  <Link
                    to={`post/${post._id}`}
                    className="text-white no-underline"
                  >
                    <p className="md:my-5 my-4">{parse(post.caption)}</p>
                    <div className="overflow-hidden">
                      <img
                        src={post.image || ""}
                        alt=""
                        className={`${
                          post.image
                            ? "border object-cover h-[18rem] w-[20rem] rounded-md"
                            : ""
                        }`}
                      />
                    </div>
                  </Link>
                </div>
                <button
                  onClick={() => handleLike(post._id)}
                  className={`flex items-center mt-2 space-x-2 text-gray-400 text-xl hover:text-blue-400 transition-colors ${
                    likedPosts.includes(post._id) ? "text-blue-600" : ""
                  }`}
                >
                  <AiOutlineLike size={20} />
                  Like
                </button>

                <br />
              </div>
            </div>
          )
        )}
    </div>
  );
}

export default Home;
