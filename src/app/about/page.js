"use client"
// pages/about.js

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function About() {
  const [darkMode, setDarkMode] = useState(false);

  const founders = [
    {
      name: "Rahul Sharma",
      position: "Founder & CEO",
      bio: "With over 10 years of experience in HR tech, Rahul founded JOB-देखो with a vision to transform the job search experience in India.",
      image: "/founder.jpg"
    },
    {
      name: "Priya Patel",
      position: "Co-Founder & CTO",
      bio: "Priya brings 8 years of technical expertise from leading tech companies and is passionate about building scalable platforms.",
      image: "/cofounder.jpg"
    }
  ];

  const teamMembers = [
    {
      name: "Amit Kumar",
      position: "Head of Operations",
      image: "/team1.jpg"
    },
    {
      name: "Neha Singh",
      position: "Lead Developer",
      image: "/team2.jpg"
    },
    {
      name: "Vijay Rawat",
      position: "Marketing Director",
      image: "/team3.jpg"
    }
  ];

  return (
    <div className={darkMode ? "dark" : ""}>
      
        <main className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <section className="mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-black dark:text-white">About JOB-देखो</h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
                One Stop Solution to Find Jobs and Build Your Professional Community
              </p>
              <div className="h-1 w-32 bg-black dark:bg-white mx-auto"></div>
            </div>
          </section>

          {/* Mission Section */}
          <section className="mb-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-black dark:text-white">Our Mission</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Founded in 2021, JOB-देखो aims to revolutionize how job seekers and employers connect in India. We believe finding the right job shouldn't be complicated.
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Our platform simplifies the job search process by providing a seamless experience for both job seekers and employers, creating meaningful professional connections.
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  We're committed to helping professionals at every stage of their career journey find opportunities that match their skills and aspirations.
                </p>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden shadow-xl">
                <Image 
                  src="/mission.jpg" 
                  alt="Our mission" 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </section>

          {/* Founders Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center text-black dark:text-white">Meet Our Founders</h2>
            <div className="grid md:grid-cols-2 gap-10">
              {founders.map((founder, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
                  <div className="grid md:grid-cols-2">
                    <div className="relative h-64 md:h-auto">
                      <Image 
                        src={founder.image} 
                        alt={founder.name} 
                        fill 
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-1 text-black dark:text-white">{founder.name}</h3>
                      <p className="text-blue-600 dark:text-blue-400 mb-4">{founder.position}</p>
                      <p className="text-gray-600 dark:text-gray-300">{founder.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center text-black dark:text-white">Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg text-center">
                  <div className="relative h-64 w-full">
                    <Image 
                      src={member.image} 
                      alt={member.name} 
                      fill 
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-1 text-black dark:text-white">{member.name}</h3>
                    <p className="text-blue-600 dark:text-blue-400">{member.position}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="bg-gray-50 dark:bg-gray-800 rounded-lg p-8 mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center text-black dark:text-white">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-3 text-black dark:text-white">Our Office</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    JOB-देखो Headquarters<br />
                    404, Sunrise Tower, Sector 15<br />
                    Gurugram, Haryana 122001<br />
                    India
                  </p>
                </div>
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-3 text-black dark:text-white">Email Us</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    General Inquiries: info@job-dekho.com<br />
                    Support: support@job-dekho.com<br />
                    Careers: careers@job-dekho.com
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-3 text-black dark:text-white">Call Us</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Phone: +91 98765 43210<br />
                    Toll-Free: 1800-123-4567
                  </p>
                </div>
              </div>
              
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-20">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="text-4xl font-bold text-black dark:text-white mb-2">500+</h3>
                <p className="text-gray-600 dark:text-gray-300">Companies</p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="text-4xl font-bold text-black dark:text-white mb-2">10,000+</h3>
                <p className="text-gray-600 dark:text-gray-300">Job Listings</p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="text-4xl font-bold text-black dark:text-white mb-2">50,000+</h3>
                <p className="text-gray-600 dark:text-gray-300">Job Seekers</p>
              </div>
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
                <h3 className="text-4xl font-bold text-black dark:text-white mb-2">25+</h3>
                <p className="text-gray-600 dark:text-gray-300">Cities</p>
              </div>
            </div>
          </section>
        </main>

        <footer className="bg-gray-50 dark:bg-gray-800 py-10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-black dark:text-white">JOB-देखो</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  One Stop Solution to Find Jobs and Build Your Professional Community
                </p>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4 text-black dark:text-white">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link href="/" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Home</Link></li>
                  <li><Link href="/about" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">About</Link></li>
                  <li><Link href="/jobs" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Find Jobs</Link></li>
                  <li><Link href="/post-job" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Post a Job</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4 text-black dark:text-white">For Employers</h3>
                <ul className="space-y-2">
                  <li><Link href="/employer" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Employer Dashboard</Link></li>
                  <li><Link href="/pricing" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Pricing Plans</Link></li>
                  <li><Link href="/resources" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white">Resources</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium mb-4 text-black dark:text-white">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-2xl">
                    <span role="img" aria-label="facebook">📘</span>
                  </a>
                  <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-2xl">
                    <span role="img" aria-label="twitter">🐦</span>
                  </a>
                  <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-2xl">
                    <span role="img" aria-label="linkedin">📊</span>
                  </a>
                  <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white text-2xl">
                    <span role="img" aria-label="instagram">📷</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-10 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
              <p className="text-gray-600 dark:text-gray-300">
                © {new Date().getFullYear()} JOB-देखो. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
  );
}