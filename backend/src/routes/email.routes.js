import { Router } from "express";
import { email, emailHealth, emailLog, emailSend } from "../controllers/email.controllers.js";

const router = Router();

router.get("/", email);
router.get("/health", emailHealth);
router.post("/send-email", emailSend);
router.get("/logs", emailLog);

export default router;