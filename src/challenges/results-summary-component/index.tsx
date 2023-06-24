import { useState } from "react";

import { Calendar } from "@/components/ui/calendar";

const ResultSummary = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
    />
  );
};
ResultSummary.displayName = "ResultSummary";

export { ResultSummary };
