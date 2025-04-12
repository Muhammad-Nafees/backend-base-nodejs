import express from "express";
import { login_User, register_User, send_verification_code, } from "../../controller/auth/index.js";

const router = express.Router();

router.route("/register").post(register_User);
router.route("/login").post(login_User);
router.route("/send-code").post(send_verification_code);

export default router;