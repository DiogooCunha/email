import EmailsTable from "@/components/shared/EmailsTable";
import EmptyComp from "@/components/shared/EmptyComp";

const Logs = () => {
  const emailQuantity = 1;

  return (
    <div className="flex justify-center w-full">
      {emailQuantity > 0 ? (
        <EmailsTable />
      ) : (
        <div className="flex justify-center items-center min-h-[60vh] w-full">
          <EmptyComp />
        </div>
      )}
    </div>
  );
};

export default Logs;
