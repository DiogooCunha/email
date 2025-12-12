import EmailsTable from "@/components/shared/EmailsTable";
import EmptyComp from "@/components/shared/EmptyComp";
import { formatEmailDate } from "@/utils/format/formatDate";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const Logs = () => {
  const [logs, setLogs] = useState([]);

  async function gatherLogs() {
    try {
      const res = await fetch("https://email-6tlo.onrender.com", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const resultado = await res.json();

      if (!res.ok) {
        toast.warning("Something went wrong", {
          description: formatEmailDate(new Date()),
        });
      }
      setLogs(resultado);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    gatherLogs();
  }, []);

  return (
    <div className='flex justify-center w-full'>
      {logs.length > 0 ? (
        <EmailsTable logs={logs} />
      ) : (
        <div className='flex justify-center items-center min-h-[60vh] w-full'>
          <EmptyComp />
        </div>
      )}
    </div>
  );
};

export default Logs;
