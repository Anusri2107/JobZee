import express from "express";
import {
  deleteJobs,
  getAllJobs,
  getMyJobs,
  postJob,
  updateJobs,
} from "../controllers/jobController.js";
import { isAuthorized } from "../middlewares/auth.js";

const router = express.Router();

router.get("/getAll", getAllJobs);
router.post("/post", isAuthorized, postJob);
router.get("/getmyjobs", isAuthorized, getMyJobs);
router.put("/update/:id", isAuthorized, updateJobs);
router.delete("/delete/:id", isAuthorized, deleteJobs);

export default router;
