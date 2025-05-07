"use client";

import React, { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const Message = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); // Start loading

    try {
      const response = await fetch("/api/send-general-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Your message has been submitted successfully!", {
          style: { backgroundColor: "#4caf50", color: "#fff" }
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error("Failed to send your message. Please try again.", {
          style: { backgroundColor: "#f44336", color: "#fff" },
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Something went wrong. Please try again.", {
        style: { backgroundColor: "#f44336", color: "#fff" },
      });
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="w-full">
      <h1 className="text-xl md:text-3xl text-center md:text-start font-bold mb-10">Send Us a Message</h1>
      <form onSubmit={handleSubmit} className="space-y-6 w-full">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
            <span className="text-red-500">*</span>
          </label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full appearance-none rounded-md px-4 py-6 text-base font-bold no-focus placeholder:text-[#9d9d9d] placeholder:font-light placeholder:opacity-100"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email Address
            <span className="text-red-500">*</span>
          </label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full appearance-none rounded-md px-4 py-6 text-base font-bold no-focus placeholder:text-[#9d9d9d] placeholder:font-light placeholder:opacity-100"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700"
          >
            Phone Number
            <span className="text-red-500">*</span>
          </label>
          <Input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full appearance-none rounded-md px-4 py-6 text-base font-bold no-focus placeholder:text-[#9d9d9d] placeholder:font-light placeholder:opacity-100"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Type Your Message
            <span className="text-red-500">*</span>
          </label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            required
            className="w-full appearance-none rounded-md p-4 text-base font-bold no-focus placeholder:text-[#9d9d9d] placeholder:font-light placeholder:opacity-100"
          />
        </div>
        <Button
          type="submit"
          className={`btn btn-primary w-full ${
            loading ? "cursor-not-allowed" : ""
          }`}
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <svg
                className="animate-spin h-5 w-5 text-white mr-2"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                ></path>
              </svg>
              Submitting...
            </div>
          ) : (
            "Send Message"
          )}
        </Button>
      </form>
    </div>
  );
};

export default Message;
