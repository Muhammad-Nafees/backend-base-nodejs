import express from "express";
import {getAllIncentives } from "../../controller/admin_routes/index.js";

const router = express.Router();

// here will come admin routes for example

router.route("/getIncentives").post(getAllIncentives);

export default router;