// components/LoginScreen.js
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useLoginMutation } from "../../slices/usersApiSlice";
import { setCredentials } from "../../slices/authSlices";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();

  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    if (userInfo) {
      navigate("/profile");
    }
  }, [navigate, userInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await login({ email, password }).unwrap();
      console.log(data);
      dispatch(setCredentials({ ...data }));
      navigate("/profile");
      toast.success("login successfully");
      setLoading(true);
    } catch (err) {
      if (err.status === 401) toast.error("Invalid Password");
      else toast.error("User does not exist");
      setLoading(false);
    }
  };

  return (
    <div className=" flex items-center justify-center mt-[5rem] md:w-[100%] md:h-[100%]">
      <div className="md:w-[100%]  md:max-w-[25%] space-y-6 bg-black shadow-md rounded-md text-white">
        <h1 className="text-2xl font-bold text-center">Sign In</h1>
        <form onSubmit={submitHandler}>
          <div className="mb-2">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-400"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md text-black"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-400"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 mt-1 border border-gray-300 rounded-md text-black"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {!loading ? (
            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50 md:max-w-[40%] md:ml-[8vw]"
            >
              Sign In
            </button>
          ) : (
            "Loging...."
          )}
        </form>
        {isLoading && <Loader />}
        <div className="text-center">
          <p>
            New Customer?{" "}
            <Link to="/register" className="text-blue-600">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
