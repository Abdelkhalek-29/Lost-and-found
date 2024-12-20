import { Router } from "express";
//import {  updateLocationSchema } from "./dar.validation.js";
import { allPosrInDar, darProfile, info } from "./dar.controller.js";
//import { isValid } from "../../Middleware/validation.middleware.js";
import { isAuthenticated } from "../../Middleware/authentication.middleware.js";
import { isAuthorized } from "../../Middleware/authorizaion.middleware.js";
import { allPosts } from "../posts/post.controller.js";


const router=Router()


router.get("/allpostindar" , isAuthenticated , isAuthorized("dar") , allPosrInDar)
router.get("/allpost" , isAuthenticated , isAuthorized("dar") , allPosts)
router.get("/profile/:address",isAuthenticated,isAuthorized('user','admin','police','dar'),darProfile)
// profile info
router.get("/profileinfo",isAuthenticated,isAuthorized("dar"),info)

export default router