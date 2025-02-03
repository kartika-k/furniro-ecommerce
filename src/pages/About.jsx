import React from 'react';
import Dynamic from "../assets/images/dynamic.png";
import { FaAward, FaUsers, FaHandshake } from 'react-icons/fa';
import JohnDoe from '../assets/images/johnDoe.png'
import JaneSmith from '../assets/images/JaneSmith.png';
import EmilyJohnson from '../assets/images/EmilyJohnson.png';

const About = () => {
  return (
    <div>
        {/* Hero Section */}
        <div className="relative h-[316px]">
           <img src={Dynamic} alt="" className="h-[316px] opacity-70 w-full object-cover" />
           <div className="absolute inset-0 flex flex-col items-center justify-center">
             <h1 className="text-5xl font-bold Shop">About</h1>
             <div className="flex Shop space-x-2 mt-2">
               <h2 className="text-lg">Home</h2>
               <span className="text-lg">&gt;</span>
               <h2 className="text-lg text-gray-600 mb-12">About</h2>
             </div>
           </div>
         </div>

        {/* Introduction Section */}
        <section className="py-16 bg-[#F9F1E7]">
          <div className="container mx-auto px-4 lg:px-16">
            <h2 className="text-3xl font-bold text-center mb-8">Who We Are</h2>
            <p className="text-center text-gray-600 mb-12">
              Welcome to our company! We are dedicated to providing top-notch services and quality products to our customers. 
              With a passion for excellence and innovation, we aim to build a better future for everyone.
            </p>
          </div>
        </section>

        {/* Mission, Vision, Values Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 lg:px-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="p-6 bg-[#F9F1E7] rounded-lg shadow-md">
                <FaAward className="text-4xl text-[#B88E2F] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Our Mission</h3>
                <p>
                  To deliver exceptional quality and value to our customers while promoting sustainability and innovation in everything we do.
                </p>
              </div>
              <div className="p-6 bg-[#F9F1E7] rounded-lg shadow-md">
                <FaUsers className="text-4xl text-[#B88E2F] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                <p>
                  To be a global leader in our industry, setting benchmarks for quality, customer service, and environmental responsibility.
                </p>
              </div>
              <div className="p-6 bg-[#F9F1E7] rounded-lg shadow-md">
                <FaHandshake className="text-4xl text-[#B88E2F] mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-4">Our Values</h3>
                <p>
                  Integrity, innovation, and customer-centricity are at the core of our values, guiding every decision we make.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-[#F9F1E7]">
          <div className="container mx-auto px-4 lg:px-16">
            <h2 className="text-3xl font-bold text-center mb-8">Meet Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <img src={JohnDoe} alt="John Doe" className="h-40 w-40 mx-auto rounded-full" />
                <h3 className="text-xl font-bold mt-4">John Doe</h3>
                <p className="text-gray-600">CEO & Founder</p>
              </div>
              <div className="text-center">
                <img src={JaneSmith} alt="Jane Smith" className="h-40 w-40 mx-auto rounded-full" />
                <h3 className="text-xl font-bold mt-4">Jane Smith</h3>
                <p className="text-gray-600">Head of Operations</p>
              </div>
              <div className="text-center">
                <img src={EmilyJohnson} alt="Emily Johnson" className="h-40 w-40 mx-auto rounded-full" />
                <h3 className="text-xl font-bold mt-4">Emily Johnson</h3>
                <p className="text-gray-600">Marketing Manager</p>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
};

export default About;