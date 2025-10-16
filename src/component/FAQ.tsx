"use client";

import { JSX, useState } from "react";
import { ChevronDown, Code, Briefcase, Mail, Coffee } from "lucide-react";
import Container from "@/layer/Container";
import { motion } from "framer-motion";
import Title from "@/layer/Title";
import { archivo } from "@/fonts";

interface FAQ {
  icon: JSX.Element;
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQ[] = [
    {
      icon: <Briefcase className="w-5 h-5" />,
      question: "What services do you offer?",
      answer:
        "I specialize in full-stack web development, including responsive website design, custom web applications, API development, and UI/UX design. I work with modern technologies like React, Next.js, Node.js, and TypeScript to create scalable and performant solutions.",
    },
    {
      icon: <Code className="w-5 h-5" />,
      question: "What technologies do you work with?",
      answer:
        "I'm proficient in JavaScript/TypeScript, React, Next.js, Node.js, Express, MongoDB, PostgreSQL, Tailwind CSS, and various other modern web technologies. I'm always learning and adapting to new tools and frameworks to deliver the best solutions.",
    },
    {
      icon: <Coffee className="w-5 h-5" />,
      question: "What's your development process?",
      answer:
        "I follow an agile approach: starting with discovery and planning, moving through design and prototyping, then development with regular check-ins, testing, and finally deployment with ongoing support. Communication and collaboration are key throughout the entire process.",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      question: "How long does a typical project take?",
      answer:
        "Project timelines vary based on complexity and requirements. A simple landing page might take 1-2 weeks, while a full web application could take 2-3 months. After our initial consultation, I'll provide a detailed timeline and milestone schedule.",
    },
    {
      icon: <Briefcase className="w-5 h-5" />,
      question: "Do you work on existing projects?",
      answer:
        "Absolutely! I'm happy to help with bug fixes, feature additions, performance optimization, or complete redesigns of existing projects. I can work with your current tech stack or suggest improvements where beneficial.",
    },
    {
      icon: <Coffee className="w-5 h-5" />,
      question: "Are you available for freelance work?",
      answer:
        "Yes, I'm currently available for freelance projects and contract work. I'm open to both short-term and long-term collaborations. Feel free to reach out to discuss your project requirements and see how we can work together.",
    },
    {
      icon: <Code className="w-5 h-5" />,
      question: "Do you provide ongoing support?",
      answer:
        "Yes! I offer post-launch support and maintenance packages to ensure your project runs smoothly. This includes bug fixes, updates, performance monitoring, and feature enhancements as needed.",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      question: "What's the best way to get in touch?",
      answer:
        "The easiest way to reach me is through the contact form on this site or via email. I typically respond within 24 hours. For urgent inquiries, you can also connect with me on LinkedIn or schedule a call.",
    },
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <div className="py-20 px-4 relative overflow-hidden">
      <Container className="relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Title sparkClassName="text-black!" className="text-black!">
            FAQ
          </Title>

          <h2 className="text-2xl md:text-4xl font-black mb-3 leading-tight">
            <span
              className={`bg-gradient-to-r from-cyan-600 to-purple-400 bg-clip-text text-transparent animate-gradient ${archivo.className}`}
            >
              Frequently Asked Questions
            </span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to know about working with me. Can't find what
            you're looking for? Feel free to reach out!
          </p>
        </motion.div>

        {/* FAQ List */}
        <motion.div
          className="max-w-3xl mx-auto space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={{itemVariants}}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 35, duration: 0.8 }}
              className="bg-white rounded-2xl shadow-md border border-gray-200 hover:shadow-xl transition overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full p-5 flex items-start gap-4 text-left transition-colors cursor-pointer"
              >
                {/* Icon */}
                <motion.div
                  transition={{ duration: 0.4 }}
                  className="flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-slate-800"
                >
                  <motion.div
                    animate={{
                      color: openIndex === index ? "#fff" : "#a855f7",
                      scale: openIndex === index ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.icon}
                  </motion.div>
                </motion.div>

                {/* Question */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-black group-hover:text-purple-400 transition-colors">
                    {faq.question}
                  </h3>
                </div>

                {/* Arrow */}
                <div className="flex-shrink-0">
                  <ChevronDown
                    className={`w-5 h-5 text-purple-400 transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>
              </button>

              {/* Answer */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  openIndex === index
                    ? { height: "auto", opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <div className="px-6 pb-6 pl-20">
                  <p className="text-gray-500 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-block bg-gradient-to-r from-slate-800 to-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-3">
              Still have questions?
            </h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              I'd love to hear about your project and discuss how we can work
              together.
            </p>
            <button className="group relative inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-3 rounded-full font-semibold overflow-hidden transition-all hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105">
              <span className="relative z-10">Get in Touch</span>
              <Mail className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </button>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
