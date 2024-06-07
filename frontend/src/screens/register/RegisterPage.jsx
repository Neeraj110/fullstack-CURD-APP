import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRegisterMutation } from "../../slices/usersApiSlice";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";

const RegisterScreen = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [avatar, setAvatar] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/login");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
    } else {
      try {
        const formData = new FormData();
        formData.append("fullName", fullName);
        formData.append("email", email);
        formData.append("password", password);
        formData.append("username", username);
        if (avatar) formData.append("avatar", avatar);
        const res = await register(formData).unwrap();
        toast.success("User registered successfully");
        navigate("/login");
      } catch (err) {
        toast.error(err?.data?.message || err.error);
      }
    }
  };

  return (
    <div className="grid place-content-center min-h-screen  text-white px-[4vw] md:mt-[5rem]">
      <div className="w-full max-w-md p-6 space-y-6  rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center">Sign-Up</h1>
        <form onSubmit={submitHandler} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-2 mt-1 border border-gray-600 rounded  text-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 mt-1 border border-gray-600 rounded text-black "
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">
              Username
            </label>
            <input
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 mt-1 border border-gray-600 rounded text-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 mt-1 border border-gray-600 rounded text-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full p-2 mt-1 border border-gray-600 rounded text-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300">
              Avatar
            </label>
            <input
              type="file"
              onChange={(e) => setAvatar(e.target.files[0])}
              className="w-full p-2 mt-1 border border-gray-600 rounded bg-gray-300 text-black"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 mt-4 bg-blue-500 text-white font-bold rounded hover:bg-blue-600 disabled:opacity-50"
            disabled={isLoading}
          >
            Register
          </button>

          {isLoading && <Loader />}
        </form>

        <div className="pt-4 text-center">
          <span className="text-sm text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500">
              Login
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default RegisterScreen;
