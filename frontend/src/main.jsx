import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { store } from "./store/store";
import { Provider } from "react-redux";
import LoginScreen from "./screens/login/LoginPage.jsx";
import RegisterScreen from "./screens/register/RegisterPage.jsx";
import ProfileScreen from "./screens/profilePage/ProfilePage.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import EditProfile from "./screens/editProfile/EditProfile.jsx";
import UpdateAvatar from "./screens/updateimage/UpdateAvatar.jsx";
import UpdateCoverImage from "./screens/updateimage/UpdateCover.jsx";
import AddPost from "./screens/addPost/AddPost.jsx";
import Post from "./screens/post/Post.jsx";
import EditPost from "./screens/editPost/EditPost.jsx";
import Home from "./screens/home/Home.jsx";
import UserProfile from "./screens/selectuser/UserProfile.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<Home />} />
      <Route path="/login" element={<LoginScreen />} />
      <Route path="/register" element={<RegisterScreen />} />
      <Route path="" element={<PrivateRoute />}>
        <Route path="/profile" element={<ProfileScreen />} />
        <Route path="/editprofile" element={<EditProfile />} />
        <Route path="/editavatar" element={<UpdateAvatar />} />
        <Route path="/editcover" element={<UpdateCoverImage />} />
        <Route path="/addpost" element={<AddPost />} />
        <Route path="/post/:postId" element={<Post />} />
        <Route path="/user/:userId/post/:postId" element={<Post />} />
        <Route path="/profile/post/:postId" element={<Post />} />
        <Route path="/edit-post/:postId" element={<EditPost />} />
        <Route path="/user/:userId" element={<UserProfile />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
