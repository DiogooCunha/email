import { Router } from "express";
import { email, emailHealth, emailLogs, emailSend, singleEmailLog } from "../controllers/email.controllers.js";

const router = Router();

router.get("/", email);
router.get("/health", emailHealth);
router.post("/send-email", emailSend);
router.get("/logs", emailLogs);
router.get("/logs/:id", singleEmailLog)

export default router;