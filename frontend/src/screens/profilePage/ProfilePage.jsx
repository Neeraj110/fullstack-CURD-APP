import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaCalendarAlt, FaPen } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./profile.css";
import parser from "html-react-parser";
import { formatDistanceToNow } from "date-fns";

const ProfilePage = () => {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const { userInfo } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`api/v1/users/posts`);
        console.log(data.data[0]);
        setUserDetails(data.data[0]);
        setPosts(data.data[0].posts);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchUserDetails();
  }, [userInfo]);

  const formatDate = (timestamp) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const date = new Date(timestamp);
    const month = months[date.getMonth()];
    const year = date.getFullYear().toString().slice(2);

    return `${month} ${year}`;
  };

  const formatRelativeTime = (timestamp) => {
    return formatDistanceToNow(new Date(timestamp), { addSuffix: true });
  };

  return (
    <div className="Profile">
      {!loading ? (
        <div>
          <>
            <div className="">
              <div className="relative" style={{ height: "15rem " }}>
                {userDetails?.coverImage ? (
                  <img
                    src={userDetails?.coverImage}
                    alt="Cover"
                    className="w-full h-full object-cover border-b-[1.5px] border-gray-300 rounded-[1rem]"
                  />
                ) : (
                  <div className="w-full h-full bg-blue-500 border-b-[1.5px] border-gray-300 rounded-[1rem] blur-lg"></div>
                )}
                <span className="absolute bottom-1 right-2">
                  <Link
                    to="/editcover"
                    className="bg-white text-black grid place-content-center rounded-full w-[3rem] h-[3rem]"
                  >
                    <FaPen />
                  </Link>
                </span>
              </div>
              <div className="Avatar">
                <img
                  src={userDetails?.avatar}
                  alt="Avatar"
                  className="border-4 rounded-full w-20 h-20 object-cover border-gray-500"
                />
                <span className="ml-2">
                  <Link
                    to="/editavatar"
                    className="bg-white text-black rounded-full Pen "
                  >
                    <FaPen />
                  </Link>
                </span>
              </div>
            </div>

            <div className="">
              <section className="Info  md:mt-[2rem] md:mx-[2rem]">
                <div>
                  <h1 className="text-white text-2xl font-semibold">
                    {userDetails?.fullName}
                  </h1>
                  <p className="text-gray-400 text-[1.2rem]">
                    @{userDetails?.username}
                  </p>
                </div>
                <button className="bg-blue-500 text-white rounded Edit-btn md:px-[2rem] md:mt-[1rem] md:py-[.4rem]">
                  <Link to="/editprofile" className="text-white no-underline">
                    Edit Profile
                  </Link>
                </button>
              </section>
              <section className="Bio md:mt-[2rem] md:mx-[2rem]">
                <div className="text-white rounded shadow-md Bio-area">
                  {parser(userDetails?.bio || "")}
                </div>
              </section>
              <section className="text-gray-500 Joined md:mt-[2rem] md:mx-[2rem] md:flex md:items-center">
                <FaCalendarAlt className="mr-2" />
                Joined {formatDate(userDetails?.createdAt)}
              </section>
              <section className="text-gray-500 Follow md:mt-[2rem] md:mx-[2rem] md:flex md:items-center md:gap-5">
                <div>
                  <span className="font-bold text-white">
                    {userDetails?.following?.length}
                  </span>{" "}
                  Following
                </div>
                <div>
                  <span className="font-bold text-white">
                    {userDetails?.followers?.length}
                  </span>{" "}
                  Followers
                </div>
              </section>
            </div>
          </>
          <hr />
          <>
            <h1 className="text-center text-white">Posts</h1>
            <div className="text-white h-auto w-auto">
              <br />
              {posts
                .slice()
                .reverse()
                .map((post) => (
                  <div
                    className="mb-[2rem] md:mx-[2rem] flex h-auto mx-[1rem]"
                    key={post._id}
                  >
                    <div className="Avatar-Image">
                      <img
                        src={post.owner.avatar}
                        alt=""
                        className="avatarImg rounded-full object-cover w-[2.5rem] h-[2.5rem]"
                      />
                    </div>
                    <div className="upload-posts">
                      <div className="Name flex flex-col">
                        <span className="text-[1.2rem] font-semibold">
                          {post.owner.fullName}
                        </span>
                        <span className="text-gray-500 text-[1rem] flex items-center gap-4">
                          @{post.owner.username}
                          <p className="text-gray-400 text-sm">
                            {formatRelativeTime(post.createdAt)}
                          </p>
                        </span>
                        <Link
                          to={`post/${post._id}`}
                          className="text-white no-underline"
                        >
                          <p className="md:my-5 my-4">
                            {parser(post.caption || "")}
                          </p>
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
                    </div>
                  </div>
                ))}
            </div>
          </>
        </div>
      ) : (
        <div className="text-white">
          <h1>Waiting... fetch your data </h1>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;
