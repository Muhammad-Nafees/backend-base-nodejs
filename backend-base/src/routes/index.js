import express from "express";
import auth_routes from "./auth/auth_routes.js";
// Import more route files as needed
// import admin_routes from "../../routes/admin/admin_routes.js";

const router = express.Router();

/**
 * ============================
 *  Master Router Configuration
 * ============================
 *
 * This is the parent router file where all major route modules are combined.
 * Developers can easily add their own route modules (e.g., /admin, /quiz, etc.)
 * by importing the relevant route file and attaching it below using router.use().
 *
 * 📌 Example usage:
 *  - /auth   → Handles all authentication-related routes (login, register, etc.)
 *  - /admin  → Handles admin-related operations (incentives, dashboard, etc.)
 *  - /quiz   → Quiz logic (questions, answers, scores, etc.)
 */

// 🔐 All routes related to user authentication (e.g., /auth/login, /auth/register)
router.use("/auth", auth_routes);

// 🛠️ Admin-related routes (uncomment below when admin_routes is ready)
// router.use("/admin", admin_routes);

// ➕ Add more route modules below as your app scales

export default router;