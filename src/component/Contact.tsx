"use client";

import { FormEvent, JSX } from "react";
import { FaMobileScreenButton, FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import Container from "@/layer/Container";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact(): JSX.Element {
  // Optional: Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <section id="contact" className="min-h-screen py-10 px-6 bg-gray-50">
      <Container className=" mb-10">
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4 uppercase">
            Get In Touch
          </h2>
          <p className="text-gray-600 mb-8 text-center max-w-md mx-auto">
            Have a question, proposal, or just want to say hello? Feel free to reach out!
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 md:space-x-20 space-y-5 md:space-y-0">
          {/* Contact Info */}
          <div className="md:col-span-5 flex flex-col items-center justify-center space-y-5 md:space-y-10 text-black ml-10">
            <div className="w-full p-6 flex flex-col items-start space-y-3 bg-white/20 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm border border-white/30 ">
                <div className="flex items-start space-x-7">
                    <div className="bg-blue-500/20 p-3 rounded-lg">
                        <Phone className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="text-gray-600">
                        <h3 className="text-black font-semibold text-lg mb-2">Call Us</h3>
                        <p >+8801518403693</p>
                        <p >Mon-Fri, 9AM-6PM</p>
                    </div>
              </div>
            </div>
            <div className="w-full p-6 flex flex-col items-start space-y-3 bg-white/20 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm border border-white/30 ">
              <div className="flex items-start space-x-7">
                <div className="bg-purple-500/20 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-gray-600">
                  <h3 className="text-black font-semibold text-lg mb-2">Email Us</h3>
                  <p >contact@company.com</p>
                  <p >support@company.com</p>
                </div>
              </div>
            </div>
            <div className="w-full p-6 flex flex-col items-start space-y-3 bg-white/20 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm border border-white/30 ">
              <div className="flex items-start space-x-7">
                <div className="bg-pink-500/20 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-pink-400" />
                </div>
                <div className="text-gray-600">
                  <h3 className="text-black font-semibold text-lg mb-2">Visit Us</h3>
                  <p >Road: 12/A, Block-C</p>
                  <p >Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative md:col-span-7 w-full py-6 px-10 flex items-center bg-white/20 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm border border-white/30 ">
            <form
              className="relative z-10 space-y-6 w-full text-gray-900"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-x-10 md:gap-y-0 gap-y-4">
                <div className="col-span-6 space-y-2">
                  <label htmlFor="name" className="text-black font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:text-black focus:ring-1 focus:ring-blue-500 outline-none"
                    required
                  />
                </div>
                <div className="col-span-6 space-y-2">
                  <label htmlFor="email" className="text-black font-medium">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:text-black focus:ring-1 focus:ring-blue-500 outline-none"
                    required
                  />
                </div>
              </div>

              <div className="w-full space-y-2">
                <label htmlFor="subject" className="text-black font-medium">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="Enter Subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-sm focus:text-black focus:ring-1 focus:ring-blue-500 outline-none"
                  required
                />
              </div>

              <div className="w-full space-y-2">
                <label htmlFor="message" className="text-black font-medium">
                  Message
                </label>
                <div>
                  <textarea
                    id="message"
                    rows={5}
                    placeholder="Your Message"
                    className="w-full px-4 py-2 border-[1px] border-gray-300 rounded-sm focus:border-[1px] focus:border-blue-500 outline-none transition-none"
                    required
                  />
                </div>
              </div>

              <div>
                <button
                type="submit"
                className="bg-blue-600 text-white py-4 px-4 rounded-lg hover:bg-blue-700 transition"
              >
                Send Message
              </button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}
