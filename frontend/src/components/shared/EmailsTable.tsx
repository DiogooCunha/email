import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

interface log {
  id: number;
  message_id: string;
  sender: string;
  recipient: string;
  subject: string;
  sent_at: string;
}

interface EmailsTableProps {
  logs: log[];
}

const EmailsTable = ({ logs }: EmailsTableProps) => {
  return (
    <Card className='w-full'>
      <CardHeader>
        <CardTitle className='text-2xl'>Emails Log</CardTitle>
        <CardDescription className='text-sm'>
          This is all the emails you sent
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table className='text-md'>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Recipient</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead className='text-right'>Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {logs.map((log) => (
              <TableRow key={log.id}>
                <TableCell className='font-bold'>{log.id}</TableCell>
                <TableCell>{log.recipient}</TableCell>
                <TableCell>{log.subject}</TableCell>
                <TableCell className='text-right'>{log.sent_at}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default EmailsTable;
