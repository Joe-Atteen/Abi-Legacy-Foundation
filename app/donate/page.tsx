"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Donate = () => {
  const [amount, setAmount] = useState("");

  const handleContinue = async () => {
    const totalAmount = parseFloat(amount);

    if (isNaN(totalAmount) || totalAmount < 1) {
      toast.error("Please enter a valid amount not less than GH₵5");
      return;
    }

    try {
      const response = await fetch("/api/initiate-donation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          totalAmount,
          description: "Donation to Abi Legacy Foundation",
          callbackUrl: "http://localhost:3000/api/hubtel-callback",
          returnUrl:
            "http://localhost:3000 || https://abi-legacy-foundation.vercel.app/",
          cancellationUrl:
            "http://localhost:3000 || https://abi-legacy-foundation.vercel.app/",
          merchantAccountNumber: "11684",
          clientReference: `Abrantie-${Date.now()}`,
        }),
      });

      const data = await response.json();

      if (response.ok && data?.data?.checkoutUrl) {
        window.location.href = data.data.checkoutUrl;
      } else {
        toast.error("Failed to initiate donation.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container mx-auto px-4 py-10 donate">
      <h1 className="text-lg md:text-2xl font-bold text-center mb-8 max-w-[600px] mx-auto text-primary">
        The Abi Legacy Foundation depends on Partners and Donors like you to
        continue its outreach.
      </h1>
      <div className="max-w-[450px] mx-auto w-full">
        <div className="glasscard p-5 rounded-md border border-gray-100 shadow-md">
          <h2 className="text-xl font-bold text-center mb-8">
            Enter Donation Amount
          </h2>
          <Input
            type="number"
            min="5"
            placeholder="Enter amount (minimum GH₵5)"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full appearance-none rounded-md px-4 py-6 text-base font-bold no-focus placeholder:text-[#9d9d9d] placeholder:font-light placeholder:opacity-100"
          />

          <Button
            className="btn btn-primary mt-4 w-full"
            onClick={handleContinue}
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Donate;
