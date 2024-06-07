import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import parser from "html-react-parser";
import { FaCalendarAlt } from "react-icons/fa";
import { formatDistanceToNow } from "date-fns";
import { useDispatch, useSelector } from "react-redux";
import { setCredentials } from "../../slices/authSlices";

function UserProfile() {
  const [userDetails, setUserDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
  const [followedUsers, setFollowedUsers] = useState([]);
  const { userId } = useParams();
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUserPost = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(`/api/v1/users/${userId}`);
        setUserDetails(data.data);
        setPosts(data.data.posts);
        setLoading(false);
      } catch (err) {
        console.log(err.response?.data?.message || "An error occurred");
        setLoading(false);
      }
    };

    fetchUserPost();
  }, [userId]);

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
      {loading ? (
        <div>
          <h1>Waiting... fetch your data </h1>
        </div>
      ) : (
        <div>
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
            </div>
            <div className="Avatar">
              <img
                src={userDetails?.avatar || ""}
                alt="Avatar"
                className="border-4 rounded-full w-20 h-20 object-cover border-gray-500"
              />
            </div>
          </div>
          <div className="">
            <section className="Info  md:mt-[2rem] md:mx-[2rem]">
              <div className="">
                <h1 className="text-white text-2xl font-semibold">
                  {userDetails?.fullName}
                </h1>
                <p className="text-gray-400 text-[1.2rem]">
                  @{userDetails?.username}
                </p>
              </div>
              {userInfo?.data?._id !== userDetails?._id ? (
                <button
                  className={`bg-blue-500 text-white font-semibold text-sm rounded-full  md:px-[3rem] md:py-[.7rem] md:text-[1rem] FollowBtn mr-[2rem]`}
                  onClick={() => handleFollowToggle(userDetails._id)}
                >
                  {userInfo?.data?.following?.includes(userDetails._id)
                    ? "Following"
                    : "Follow"}
                </button>
              ) : (
                <button className="bg-blue-500 text-white rounded Edit-btn md:px-[2rem] md:mt-[1rem] md:py-[.4rem]">
                  <Link to="/editprofile" className="text-white no-underline">
                    Edit Profile
                  </Link>
                </button>
              )}
            </section>
            <section className="Bio md:mt-[2rem] md:mx-[2rem]">
              <div className="text-white rounded shadow-md Bio-area">
                <p>{parser(userDetails?.bio || "")}</p>
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
          <hr />
          <div>
            <h1 className="text-center text-white text-2xl">Posts</h1>
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
                          {post.image && (
                            <div className="overflow-hidden">
                              <img
                                src={post.image}
                                alt=""
                                className="border object-cover h-[18rem] w-[20rem] rounded-md"
                              />
                            </div>
                          )}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UserProfile;
