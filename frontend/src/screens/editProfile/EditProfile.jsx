import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import { useUpdateUserMutation } from "../../slices/usersApiSlice";
import { setCredentials } from "../../slices/authSlices";
import { useNavigate } from "react-router-dom";

const ProfileScreen = () => {
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [bio, setBio] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state) => state.auth);

  const [updateProfile, { isLoading }] = useUpdateUserMutation();

  useEffect(() => {
    const userData = userInfo.data?.user || userInfo.data || userInfo;
    setFullName(userData.fullName);
    setEmail(userData.email);
    setBio(userData.bio);
  }, [userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await updateProfile({
        _id: userInfo._id,
        fullName,
        email,
        bio,
      }).unwrap();
      dispatch(setCredentials(res));
      toast.success("Profile updated successfully");
      setLoading(true);
      navigate("/profile");
    } catch (err) {
      toast.error(err?.data?.message || err.error);
      setLoading(false);
    }
    setLoading(false);
  };

  return (
    <div className="bg-black px-[2rem] text-white md:mx-[15rem] mt-[5.5rem]">
      <h1 className="text-3xl font-bold mb-4 mt-2">Update Profile</h1>
      <form onSubmit={submitHandler}>
        <div className="mb-2">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="name"
            id="name"
            className="mt-1 p-2 block w-full border rounded-md text-black"
            placeholder="Enter name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <div className="mb-2">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 p-2 block w-full border rounded-md text-black"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-1">
          <label
            htmlFor="bio"
            className="block text-sm font-medium text-gray-700"
          >
            Bio
          </label>
          <textarea
            id="bio"
            className="mt-1 p-2 block w-full border rounded-md text-black"
            placeholder="Bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </div>
        <br />
        <button
          type="submit"
          className={`w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none `}
          disabled={isLoading || loading}
        >
          {isLoading || loading ? "Updating..." : "Update"}
        </button>
      </form>
      <br />
    </div>
  );
};

export default ProfileScreen;
