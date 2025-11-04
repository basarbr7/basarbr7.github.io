"use client"

import React, { useState } from 'react';
// import { MessageCircle, X } from 'lucide-react';

export default function Message() {
  const [isHovered, setIsHovered] = useState(false);

  const contacts = [
    {
      name: 'Facebook Messenger',
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.145 2 11.243c0 2.912 1.45 5.51 3.717 7.201V22l3.472-1.905c.926.257 1.907.395 2.911.395 5.523 0 10-4.145 10-9.243C22 6.145 17.523 2 12 2zm.994 12.457l-2.561-2.73-5.001 2.73 5.501-5.838 2.622 2.73 4.94-2.73-5.501 5.838z"/>
        </svg>
      ),
      color: 'from-blue-500 to-blue-600',
      hoverColor: 'hover:from-blue-600 hover:to-blue-700',
      shadowColor: 'hover:shadow-blue-500/50',
      link: 'https://m.me/your-page'
    },
    {
      name: 'WhatsApp',
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      ),
      color: 'from-green-500 to-green-600',
      hoverColor: 'hover:from-green-600 hover:to-green-700',
      shadowColor: 'hover:shadow-green-500/50',
      link: 'https://wa.me/+8801518403693'
    },
    {
      name: 'Telegram',
      icon: (
        <svg className="w-full h-full" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
        </svg>
      ),
      color: 'from-sky-400 to-sky-600',
      hoverColor: 'hover:from-sky-500 hover:to-sky-700',
      shadowColor: 'hover:shadow-sky-500/50',
      link: 'https://t.me/+8801518403693'
    }
  ];

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-50">
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 backdrop-blur-lg
          pl-5 pr-6 py-6 rounded-tr-lg rounded-br-lg
          shadow-2xl border-r-2 border-t border-b border-gray-700
          transition-all duration-500 ease-out
          ${isHovered ? 'translate-x-0' : '-translate-x-[calc(100%-1.8rem)]'}
        `}
      >
        {/* Floating indicator */}
        <div className="absolute right-2 top-1/2 -translate-y-1/2 flex flex-col gap-2">
          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 
            ${isHovered ? 'animate-pulse' : ''}`}></div>
          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 
            ${isHovered ? 'animate-pulse delay-75' : ''}`}></div>
          <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 
            ${isHovered ? 'animate-pulse delay-150' : ''}`}></div>
        </div>

        {/* Contact buttons */}
        <div className="flex flex-col gap-y-5">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group/btn relative"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Glow effect */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${contact.color} 
                opacity-0 group-hover/btn:opacity-20 blur-xl transition-opacity duration-300`}></div>
              
              {/* Button */}
              <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${contact.color}
                flex items-center justify-center text-white cursor-pointer
                transform transition-all duration-300 ease-out
                ${contact.hoverColor}
                shadow-lg ${contact.shadowColor} group-hover/btn:shadow-2xl
              `}>
                <div className="w-6 h-6 transform group-hover/btn:scale-110 transition-transform duration-300">
                  {contact.icon}
                </div>
              </div>

              {/* Tooltip */}
              <div className={`absolute left-full ml-4 top-1/2 -translate-y-1/2
                px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg
                shadow-xl border border-gray-700 whitespace-nowrap
                opacity-0 invisible group-hover/btn:opacity-100 group-hover/btn:visible
                transition-all duration-300 pointer-events-none
              `}>
                {contact.name}
                <div className="absolute right-full top-1/2 -translate-y-1/2 
                  border-8 border-transparent border-r-gray-900"></div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}