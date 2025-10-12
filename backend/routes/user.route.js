import express from "express";
import { protectRoute } from "../middleware/ProtectRoute.js";
import { followUnfollowUser, getSuggestedUsers, getUserprofile, updateUser } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/profile/:username", protectRoute, getUserprofile)
router.get("/suggested", protectRoute, getSuggestedUsers)
router.post("/follow/:id", protectRoute, followUnfollowUser)
router.post("/update", protectRoute, updateUser)


export default router;