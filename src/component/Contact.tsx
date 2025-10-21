"use client";

import { FormEvent, JSX } from "react";
import { motion } from "framer-motion";
import Container from "@/layer/Container";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import Title from "@/layer/Title";
import { IoLogoWhatsapp } from "react-icons/io";
import TextField from '@mui/material/TextField';

export default function Contact(): JSX.Element {
  // Optional: Handle form submission
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <div id="contact" className="min-h-screen py-20 px-6 bg-gray-100 border-b border-gray-200">
      <Container>
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Title sparkClassName="text-black!" className="text-black!">
            Contact Me
          </Title>

          <h2 className="text-2xl md:text-4xl font-black mb-3 leading-tight">
            <span className="bg-gradient-to-r from-cyan-600 to-purple-400  bg-clip-text text-transparent animate-gradient">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Have a question, proposal, or just want to say hello? Feel free to
            reach out!
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 md:space-x-5 xl:space-x-20 space-y-5 md:space-y-0">
          {/* Contact Info */}
          <div className="order-2 md:order-1 md:col-span-5 flex flex-col items-center justify-center space-y-5 md:space-y-10 text-black xl:ml-10">
            <motion.div
              className="w-full p-6 flex flex-col items-start bg-white/20 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm border border-white/30 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <a
                href="https://wa.me/8801518403693"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-x-3 items-start justify-around w-full"
              >
                <div className=" bg-blue-500/20 p-3 rounded-lg">
                  <IoLogoWhatsapp className="w-6 h-6 text-green-600"/>
                </div>
                <div className=" text-gray-600 text-sm sm:text-lg">
                  <h3 className="text-black font-semibold text-lg mb-2">
                    WhatsUp
                  </h3>
                  <p>+8801518403693</p>
                  <p>Mon-Fri, 9AM-6PM</p>
                </div>
                <motion.div
                  className=" text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <ArrowUpRight className="w-5 h-5 relative z-10 group-hover:rotate-45 transition-transform duration-300" />
                </motion.div>
              </a>
            </motion.div>

            <motion.div
              className="w-full p-6 flex flex-col items-start bg-white/20 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm border border-white/30 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <a 
                href="mailto:basarbr7@gmail.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-x-3 items-start justify-around w-full "
              >
                <div className="bg-purple-500/20 p-3 rounded-lg">
                  <Mail className="w-6 h-6 text-purple-400" />
                  
                </div>
                <div className="text-gray-600 text-sm sm:text-lg">
                  <h3 className="text-black font-semibold text-lg mb-2">
                    Email Us
                  </h3>
                  <p>basarbr7@gmail.com</p>
                  <p>basar.dev@gmail.com</p>
                </div>
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <ArrowUpRight className="w-5 h-5 relative z-10 group-hover:rotate-45 transition-transform duration-300" />
                </motion.div>
              </a>
            </motion.div>

            <motion.div
              className="w-full p-6 flex flex-col items-start space-y-3 bg-white/20 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm border border-white/30 group"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex gap-x-3 items-start justify-around w-full ">
                <div className="bg-pink-500/20 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-pink-400" />
                </div>
                <div className="text-gray-600 text-sm sm:text-lg">
                  <h3 className="text-black font-semibold text-lg mb-2">
                    Visit Us
                  </h3>
                  <p>Road: 12/A, Block-C</p>
                  <p>Dhaka, Bangladesh</p>
                </div>
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                >
                  <ArrowUpRight className="w-5 h-5 relative z-10 group-hover:rotate-45 transition-transform duration-300" />
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 relative md:col-span-7 w-full py-6 px-10 flex items-center bg-white/20 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] backdrop-blur-sm border border-white/30 font-roboto mb-20 md:mb-0 ">
            <form
              className="relative z-10 space-y-6 w-full text-gray-900"
              onSubmit={handleSubmit}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 md:gap-y-0 gap-y-4">
                <div className="col-span-6">
                  <label htmlFor="name" className="text-black font-medium block mb-2">
                    Name
                  </label>
                  <TextField
                    id="name"
                    label="Your Name"
                    variant="outlined"        
                    fullWidth   
                    size="small"                 
                    required  
                    sx={{
                      "& .MuiInputBase-root": { padding: "4px 8px" },
                      "& .MuiOutlinedInput-input": { padding: "6px 8px" },
                      // "& .MuiInputLabel-root": { top: "-5px" },
                    }}
                  />
                </div>
                <div className="col-span-6">
                  <label htmlFor="email" className="text-black font-medium block mb-2">
                    Email Address
                  </label>
                  <TextField
                    id="email"
                    label="Your Email"
                    variant="outlined"        
                    fullWidth  
                    size="small" 
                    required      
                    sx={{
                      "& .MuiInputBase-root": { padding: "4px 8px" },
                      "& .MuiOutlinedInput-input": { padding: "6px 8px" },
                      // "& .MuiInputLabel-root": { top: "-5px" },
                    }}
                  />
            
                </div>
              </div>

              <div className="w-full ">
                <label htmlFor="subject" className="text-black font-medium block mb-2">
                  Subject
                </label>
                <TextField
                    id="subject"
                    label="Enter Subject"
                    variant="outlined"        
                    fullWidth   
                    size="small"                 
                    required  
                    sx={{
                      "& .MuiInputBase-root": { padding: "4px 8px" },
                      "& .MuiOutlinedInput-input": { padding: "6px 8px" },
                      // "& .MuiInputLabel-root": { top: "-5px" },
                    }}
                  />
              </div>

              <div className="w-full ">
                <label htmlFor="message" className="text-black font-medium block mb-2 ">
                  Message
                </label>
                <div>
                 <TextField
                    id="message"
                    label="Your Message"
                    variant="outlined"        
                    fullWidth   
                    size="small"
                    multiline
                    rows={5}                 
                    required  
                    sx={{
                      "& .MuiInputBase-root": { padding: "4px 8px" },
                      "& .MuiOutlinedInput-input": { padding: "6px 8px" },
                      // "& .MuiInputLabel-root": { top: "-5px" },
                    }}
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
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
