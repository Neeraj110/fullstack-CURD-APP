// utils/refreshToken.js
import axios from "axios";

export const refreshAccessToken = async () => {
  try {
    const { data } = await axios.post("/api/v1/users/refresh-token", null, {
      withCredentials: true, // Include cookies with the request
    });
    const { accessToken } = data;
    sessionStorage.setItem("accessToken", accessToken);
    return accessToken;
  } catch (error) {
    console.error("Error refreshing access token:", error);
    throw error;
  }
};
