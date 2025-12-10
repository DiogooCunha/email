import { db } from "../db/db.js";

export const saveEmail = (data) => {
  const stmt = db.prepare(
    `INSERT INTO emails (message_id, sender, recipient, subject)
     VALUES (?, ?, ?, ?)
    `
  );
  return stmt.run(data.messageId, data.senderEmail, data.to, data.subject);
};