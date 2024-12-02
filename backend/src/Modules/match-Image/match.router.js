import { Router } from "express";
import { isAuthenticated } from "../../Middleware/authentication.middleware.js";
import { isAuthorized } from "../../Middleware/authorizaion.middleware.js";
import { matchImage, matchPost } from "./match.controller.js";

const router =Router();

router.get("/matchImage" , isAuthenticated , isAuthorized("user") , matchImage)

router.get(
    "/matchImage/:postId",
    isAuthenticated,
    isAuthorized("user"),
    matchPost
  );

export default router;
