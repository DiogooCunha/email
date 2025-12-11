export interface EmailLog {
  id: number;
  message_id: string;
  sender: string;
  recipient: string;
  subject: string;
  content: string,
  sent_at: string;
}

export interface EmailsTableProps {
  logs: EmailLog[];
}