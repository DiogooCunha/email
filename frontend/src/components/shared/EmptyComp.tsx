import { ArchiveX } from "lucide-react";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "../ui/empty";
import { Button } from "../ui/button";
import { NavLink } from "react-router-dom";

const EmptyComp = () => {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant='icon'>
          <ArchiveX />
        </EmptyMedia>
        <EmptyTitle>No Emails yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t sent any emails yet. Get started by sending your
          first email.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>
          <NavLink to="/send-email">Send Email</NavLink>
        </Button>
      </EmptyContent>
    </Empty>
  );
};

export default EmptyComp;
