import authRouter from "./Modules/auth/auth.router.js";
import postRouter from "./Modules/posts/post.router.js";
import adminRouter from "./Modules/admin/admin.router.js";
import userprofileRouter from "./Modules/userProfile/userprofile.router.js";
import policeRouter from "./Modules/police/police.router.js";
import darRouter from "./Modules/dar/dar.router.js";
import matchRouter from "./Modules/match-Image/match.router.js";
import ganRouter from "./Modules/gan/gan.router.js"
import { globalErrorHandling } from "./utils/errorHandling.js";
import cors from "cors";
//import cookieParser from "cookie-parser";

export const appRouter = (app, express) => {
  // CORS
  const whitelist = ["http://localhost:3000"];
  const corsOptions = {
    origin: function (origin, callback) {
      if (!origin || whitelist.indexOf(origin) !== -1) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
    exposedHeaders: ["Access-Control-Allow-Private-Network"],
  };
  app.use(cors(corsOptions));
  //app.use(cookieParser())
  app.use(express.json());

  // Auth
  app.use("/auth", authRouter);

  //Post
  app.use("/post", postRouter);

  // User Profile
  app.use("/userprofile", userprofileRouter);

  // Admin
  app.use("/admin", adminRouter);

  // Police
  app.use("/police", policeRouter);

  // Dat
  app.use("/dar", darRouter);

  // Match-Image
  app.use("/match", matchRouter);

  app.use("/gan",ganRouter)
  app.use("/", (req, res, next) => {
    return res.json({ Message: "Welcome to backend server" });
  });
  app.use("*", (req, res, next) => {
    return res.json({ Message: "In-valid routing" });
  });

  app.use(globalErrorHandling);
};
