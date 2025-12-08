import { Router } from "express";
import { email, emailHealth, emailSend } from "../controllers/email.controllers.js";

const router = Router();

router.get("/", email);
router.get("/health", emailHealth);
router.post("/send-email", emailSend);

export default router;