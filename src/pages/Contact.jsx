import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaClock } from 'react-icons/fa';
import Dynamic from "../assets/images/dynamic.png";

const Contact = () => {
  return (
    <div className="w-full">

      {/* Hero Section */}
      <div className="relative h-[316px]">
        <img src={Dynamic} alt="" className="h-[316px] opacity-70 w-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-5xl font-bold Shop">Contact</h1>
          <div className="flex Shop space-x-2 mt-2">
            <h2 className="text-lg">Home</h2>
            <span className="text-lg">&gt;</span>
            <h2 className="text-lg text-gray-600 mb-12">Contact</h2>
          </div>
        </div>
      </div>

      {/* Contact Information and Form */}
      <div className="py-16 bg-[#F9F1E7]">
        <div className="container mx-auto px-4 lg:px-16">
          <h2 className="text-3xl font-bold text-center mb-8">Get In Touch With Us</h2>
          <p className="text-center text-gray-600 mb-12">
            For More Information About Our Products & Services, Please Feel Free To Drop Us An Email. <br />
            Our Staff Always Here To Help You Out. Reach Us Instantly!
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Side: Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <FaMapMarkerAlt className="text-2xl" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Address</h3>
                  <p>236 5th SE Avenue, New York, <br /> NY100000, United States</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaPhoneAlt className="text-2xl" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Phone</h3>
                  <p>Mobile: +1 (84) 546-6789</p>
                  <p>Hotline: +1 (84) 456-6789</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <FaClock className="text-2xl" />
                <div>
                  <h3 className="text-lg font-bold mb-2">Working Time</h3>
                  <p>Monday – Friday: 9:00 – 22:00</p>
                  <p>Saturday – Sunday: 9:00 – 21:00</p>
                </div>
              </div>
            </div>

            {/* Right Side: Contact Form */}
            <form className="space-y-6 bg-white p-8 rounded-lg shadow-md">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#B88E2F] focus:border-[#B88E2F]"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#B88E2F] focus:border-[#B88E2F]"
                    placeholder="example@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#B88E2F] focus:border-[#B88E2F]"
                  placeholder="This is an optional field"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#B88E2F] focus:border-[#B88E2F]"
                  placeholder="Write something you'd like to talk about"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-[#B88E2F] text-white font-bold rounded-lg hover:bg-[#a67d25] transition duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
