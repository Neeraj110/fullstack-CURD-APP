import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import connectDB from "./db/indexDB.js";
import path from "path";

dotenv.config({
  path: "./.env",
});

const app = express();

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("app connection failed", error);
      throw error;
    });
    //process.env.PORT ||
    app.listen(process.env.PORT || 8000, () => {
      console.log(`server running at ${process.env.PORT} `);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!!", err);
  });

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// routes import
import userRouter from "./routes/user.routes.js";
import userPost from "./routes/post.routes.js";
import userFollow from "./routes/follow.routes.js";

//routes declaration
app.use("/api/v1/users", userRouter);
app.use("/api/v1/posts", userPost);
app.use("/api/v1/follow", userFollow);

// --------------------------deployment------------------------------

const __dirname1 = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname1, "/frontend/dist")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname1, "frontend", "dist", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}

// --------------------------deployment------------------------------

app.get("/", (req, res) => {
  res.send("hello");
});

export default app;
