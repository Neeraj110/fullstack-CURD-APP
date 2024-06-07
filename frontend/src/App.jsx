// components/App.js
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import axios from "axios";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchRefreshToken = async () => {
      try {
        const { data } = await axios.post("/api/v1/users/refresh-token");
      } catch (error) {
        console.error("Error refreshing access token:", error);
      }
    };

    fetchRefreshToken();
    const refreshTokenInterval = setInterval(fetchRefreshToken, 30 * 60 * 1000);

    return () => {
      clearInterval(refreshTokenInterval);
    };
  }, [dispatch]);

  return (
    <div className="bg-black">
      <div className="">
        <Header />
      </div>
      <div className="">
        <ToastContainer className="px-[1rem] h-[2rem] py-[2rem]" />
        <Outlet />
      </div>
    </div>
  );
};

export default App;
