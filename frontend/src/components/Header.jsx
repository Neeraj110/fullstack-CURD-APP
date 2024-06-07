import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlices";
import { useState } from "react";

const Header = () => {
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();
  const [isOpen, setIsOpen] = useState(false);

  const logoutHandler = async () => {
    if (window.confirm("Are you sure you want to logout?")) {
      try {
        await logoutApiCall().unwrap();
        dispatch(logout());
        navigate("/login");
      } catch (err) {
        console.error(err);
      }
    }
  };

  const handleNavLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 text-white z-40 bg-opacity-50 backdrop-filter backdrop-blur-lg border-b-[1.1px] w-full">
      <div className="container mx-auto px-3">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="text-white no-underline">
            <span
              className="text-2xl font-medium text-white"
              onClick={() => handleNavLinkClick()}
            >
              Gwitter
            </span>
          </Link>
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
          <nav
            className={`${
              isOpen
                ? "flex flex-col gap-3 absolute top-[100%] left-0 w-full bg-[#0f172a]  text-white z-40 bg-opacity-80 backdrop-filter backdrop-blur-lg border-b-[1.1px] h"
                : "hidden"
            } md:flex md:flex-row md:items-center md:gap-6 md:relative`}
          >
            {userInfo ? (
              <>
                <Link
                  to="/profile"
                  className=" no-underline py-3 px-4 md:py-0 hover:bg-blue-500 hover:py-1 rounded-md text-white"
                  onClick={handleNavLinkClick}
                >
                  Profile
                </Link>
                <Link
                  to="/addpost"
                  className="text-white no-underline py-2 px-4 md:py-0 hover:bg-blue-500 rounded-md hover:py-1"
                  onClick={handleNavLinkClick}
                >
                  Add Post
                </Link>
                <Link
                  to="/"
                  className="text-white no-underline py-2 px-4 md:py-0 hover:bg-blue-500 rounded-md hover:py-1"
                  onClick={handleNavLinkClick}
                >
                  All Posts
                </Link>
                <span
                  onClick={() => {
                    logoutHandler();
                    handleNavLinkClick();
                  }}
                  className="cursor-pointer text-white no-underline py-2 px-4 md:py-0 hover:bg-blue-500 rounded-md hover:py-1"
                >
                  Logout
                </span>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="flex items-center gap-2 text-white no-underline py-2 px-4 md:py-0 hover:bg-blue-500  hover:py-1 rounded-md"
                  onClick={handleNavLinkClick}
                >
                  <FaSignInAlt /> Sign In
                </Link>
                <Link
                  to="/register"
                  className="flex items-center gap-2 text-white no-underline hover:py-1 py-2 px-4 md:py-0 hover:bg-blue-500 rounded-md"
                  onClick={handleNavLinkClick}
                >
                  <FaSignOutAlt /> Sign Up
                </Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
