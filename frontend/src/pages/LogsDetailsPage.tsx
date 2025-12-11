import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import type { EmailLog } from "@/type/email";
import { formatDate, formatEmailDate } from "@/utils/format/formatDate";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

const LogsDetailsPage = () => {
  const { id } = useParams();
  const [log, setLog] = useState<EmailLog | null>(null);

  async function gatherSingleLog() {
    try {
      const res = await fetch(`http://localhost:3333/api/logs/${id}`, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const resultado = await res.json();

      if (!res.ok) {
        toast.warning("Somethin went wrong", {
          description: formatEmailDate(new Date()),
        });
      }
      setLog(resultado);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    gatherSingleLog();
  }, [id]);

  return (
    <div className='flex justify-center w-full'>
      <Card className='w-full max-w-3xl'>
        <CardHeader>
          <CardTitle className='text-2xl'>{`Email #${log?.id}`}</CardTitle>
          <CardDescription className='text-sm'>
            Below you can find all recorded details for this email
          </CardDescription>
        </CardHeader>
        <CardContent className='space-y-6'>
          <div className='flex flex-col justify-center items-center gap-3 md:flex-row md:items-start md:gap-4'>
            <div>
              <Badge
                variant='outline'
                className='px-5 py-2 text-xs sm:text-sm md:text-base sm:px-6'
              >
                <span className='text-muted-foreground'>Sender</span>
                <span className='font-medium'>{log?.sender}</span>
              </Badge>
            </div>
            <div>
              <Badge className='px-4 py-2 text-xs sm:text-sm md:text-base sm:px-4 '>
                <p className='text-muted-foreground'>Recipient</p>
                <p className='font-medium'>{log?.recipient}</p>
              </Badge>
            </div>
          </div>
          <Separator />
          <div className='flex justify-around items-center'>
            <div>
              <p className='text-xs text-muted-foreground'>Subject</p>
              <p className='font-medium'>{log?.subject}</p>
            </div>
            <div>
              <p className='text-xs text-muted-foreground'>Date</p>
              <p className='font-medium'>
                {log?.sent_at ? formatDate(log.sent_at) : "-"}
              </p>
            </div>
          </div>

          <Separator />
          <div>
            <p className='text-xs text-muted-foreground'>Content</p>
            <p className='font-medium'>{log?.content}</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LogsDetailsPage;
