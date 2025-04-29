// app/contact/page.tsx
"use client";
import React, { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now, just log the form data
    console.log("Contact Form Submission:", form);
    // You might want to clear the form or show a success message
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <>
      <div className="container mx-auto px-4">
        <h1 className="text-5xl font-bold text-center text-oceanLight dark:text-blue-100 mb-8">
          Contact Me
        </h1>
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto bg-sky-700 dark:bg-sky-50 p-8 rounded-lg shadow-md"
        >
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-lg font-medium text-sky-50 dark:text-ocean mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 text-sky-800 font-mono border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-lg font-medium text-sky-50 dark:text-ocean mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 text-sky-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-lg font-medium text-sky-50 dark:text-ocean mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={6}
              className="w-full px-4 py-2 text-sky-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full btn-grad font-medium py-3 rounded-md transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
}
