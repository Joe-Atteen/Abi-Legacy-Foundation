import Donate from "@/components/Donate";
import React from "react";

const DonatePage = () => {
  return (
    <div className="container mx-auto px-4 py-10 donate">
      <h1 className="text-lg md:text-2xl font-bold text-center mb-8 max-w-[600px] mx-auto text-primary">
        The Abi Legacy Foundation depends on Partners and Donors like you to
        continue its outreach.
      </h1>
      <Donate />
    </div>
  );
};

export default DonatePage;
