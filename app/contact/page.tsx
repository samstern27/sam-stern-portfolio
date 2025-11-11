"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

/**
 * Contact component
 *
 * Renders a contact form with Name, Company, Email, and Message fields.
 * Uses EmailJS to send form submissions and provides success/error feedback.
 * Includes basic client-side validation and responsive styling.
 */
export default function Contact() {
  // Form state
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // UI state for loading and feedback messages
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  /**
   * Handles form submission
   * Validates required fields and sends email via EmailJS
   * Shows success or error messages with temporary visibility
   */
  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSuccess("");
    setError("");

    // Basic validation for required fields
    if (!name || !email || !message) {
      setError(
        !name
          ? "Please enter your name"
          : !email
          ? "Please enter your email"
          : "Please enter a message"
      );
      return;
    }

    const templateParams = {
      from_name: name,
      from_email: email,
      company,
      to_name: "Sam Stern",
      message,
    };

    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ""
      )
      .then(() => {
        // Clear form and show success message
        setName("");
        setEmail("");
        setCompany("");
        setMessage("");
        setSuccess("Your message has been sent successfully.");
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 10000);
      })
      .catch(() => {
        // Show error message if email fails
        setError(
          "An error occurred. Please email me directly at stern7@outlook.com."
        );
        setShowError(true);
        setTimeout(() => setShowError(false), 20000);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="isolate px-6 py-24 sm:pt-27 lg:px-8 page-swipe">
      {/* Page header with title and description */}
      <header className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl fade-in-down">
          Get in touch
        </h1>
        <p className="mt-2 text-lg/8 text-gray-400 fade-in-down delay-0-3">
          I’m happy to answer any questions or explore ways we could work
          together.
        </p>
      </header>

      {/* Contact form */}
      <form
        action="#"
        method="POST"
        onSubmit={sendEmail}
        className="mx-auto mt-16 max-w-xl sm:mt-20"
      >
        {/* Form fields */}
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          {/* Name input */}
          <div className="fade-in-down delay-0-6">
            <label
              htmlFor="name"
              className="block text-sm/6 font-semibold text-white"
            >
              Name<span className="text-cyan-500 ml-1">*</span>
            </label>
            <div className="mt-2.5">
              <input
                id="name"
                name="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                autoComplete="given-name"
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-500"
              />
            </div>
          </div>

          {/* Company input */}
          <div className="sm:col-span-1 fade-in-down delay-0-6">
            <label
              htmlFor="company"
              className="block text-sm/6 font-semibold text-white"
            >
              Company
            </label>
            <div className="mt-2.5">
              <input
                id="company"
                name="company"
                type="text"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                autoComplete="organization"
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-500"
              />
            </div>
          </div>

          {/* Email input */}
          <div className="sm:col-span-2 fade-in-down delay-0-9">
            <label
              htmlFor="email"
              className="block text-sm/6 font-semibold text-white"
            >
              Email<span className="text-cyan-500 ml-1">*</span>
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-500"
              />
            </div>
          </div>

          {/* Message input */}
          <div className="sm:col-span-2 fade-in-down delay-1">
            <label
              htmlFor="message"
              className="block text-sm/6 font-semibold text-white"
            >
              Message<span className="text-cyan-500 ml-1">*</span>
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                name="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="block w-full rounded-md bg-white/5 px-3.5 py-2 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-cyan-500"
              />
            </div>
          </div>
        </div>

        {/* Submit button */}
        <div className="mt-10 fade-in-down delay-2">
          <button
            type="submit"
            disabled={loading}
            aria-busy={loading}
            className={`block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs
              ${
                loading
                  ? "bg-cyan-400 cursor-not-allowed animate-pulse"
                  : "bg-cyan-500 hover:bg-cyan-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
              }`}
          >
            {loading ? "Sending message..." : "Send message"}
          </button>
        </div>

        {/* Error message */}
        {error && showError && (
          <div className="mt-10">
            <p
              role="alert"
              className="block w-full rounded-md bg-red-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs"
            >
              {error}
            </p>
          </div>
        )}

        {/* Success message */}
        {success && showSuccess && (
          <div className="mt-10">
            <p
              role="status"
              className="block w-full rounded-md bg-green-500 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs"
            >
              {success}
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
