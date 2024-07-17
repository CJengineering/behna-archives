"use client";
import React, { use, useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
import { EnvelopeIcon } from "@heroicons/react/24/outline";

export default function ContactForm() {
  const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '';
  const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '';
  const userID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || '';

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  
  });
  useEffect(() => {
    console.log('this is', serviceID, templateID, userID);
  }
  , [serviceID, templateID, userID]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData, userID, serviceID, templateID);


    emailjs
      .send(
        serviceID, // Replace with your EmailJS service ID
        templateID||"", // Replace with your EmailJS template ID
        formData,
      userID // Replace with your EmailJS user ID
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        // Optionally, show a success message to the user
        alert("Message sent successfully!");
      })
      .catch((err) => {
        console.log("FAILED...", err);
        // Optionally, show an error message to the user
        alert("Failed to send the message. Please try again.");
      });

    // Optionally, reset the form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="">
      <div className="">
        <p className="text-base leading-6 text-gray-600 plexSans">
          If you wish to get in touch, please provide details in the form below
          and submit.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label
              htmlFor="message"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Message
            </label>
            <div className="">
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                className="block w-full rounded-md px-2 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 flex items-center justify-start gap-x-6">
        <button
          type="submit"
          className="inline-flex items-center gap-x-2 mt-4 rounded-md plexMono bg-black px-6 py-4 text-sm text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          Submit
          <EnvelopeIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </form>
  );
}
