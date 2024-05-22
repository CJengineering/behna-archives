'use client';
import Link from "next/link";
import { ArrowRightIcon } from '@heroicons/react/20/solid'
import { EnvelopeIcon } from '@heroicons/react/24/outline'

export default function ContactForm() {
  return (
    <form className="">
      <div className="">
      <h2 className="text-3xl font-bold mb-4 text-gray-900 font-ibmSans">
        Get in touch
      </h2>
        <p className="text-sm leading-6 text-gray-600">
        If you wish to get in touch, please provide details in the form below and submit.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
              Name
            </label>
            <div className="">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="content" className="block text-sm font-medium leading-6 text-gray-900">
              Message
            </label>
            <div className="">
              <textarea
                id="content"
                name="content"
                rows={4}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
