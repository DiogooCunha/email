//index.js
import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { sendEmail } from "./utils/mail.js";

import emailRoutes from "./routes/email.routes.js";

const app = express();
const port = 3333;

// Middleware
app.use(express.json());

// Routes
app.use("/api", emailRoutes);

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});

export default app;
