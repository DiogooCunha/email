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

const EmailsTable = () => {
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
            <TableRow>
              <TableCell className='font-bold'>3</TableCell>
              <TableCell>diogocunha.jlle@gmail.com</TableCell>
              <TableCell>TEST</TableCell>
              <TableCell className='text-right'>2020-19-01</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default EmailsTable;
