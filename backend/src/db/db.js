import Database from "better-sqlite3";

export const db = new Database("src/db/emails.db");

db.exec(`
        CREATE TABLE IF NOT EXISTS emails (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            message_id TEXT,
            sender TEXT NOT NULL,
            recipient TEXT NOT NULL,
            subject TEXT, 
            content TEXT,
            sent_at DATETIME DEFAULT CURRENT_TIMESTAMP   
        );
    `);