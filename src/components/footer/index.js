// components/Footer.js
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1E2A3A] text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Column 1 - Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">JOB-देखो</h3>
            <p className="text-gray-300 text-sm">
              One Stop Solution to Find Jobs and Build Your Professional Community
            </p>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/jobs" className="text-gray-300 hover:text-white transition-colors">
                  Find Jobs
                </Link>
              </li>
              <li>
                <Link href="/post-job" className="text-gray-300 hover:text-white transition-colors">
                  Post a Job
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - For Employers */}
          <div>
            <h3 className="text-lg font-medium mb-4">For Employers</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/employer" className="text-gray-300 hover:text-white transition-colors">
                  Employer Dashboard
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-gray-300 hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Connect With Us */}
          <div>
            <h3 className="text-lg font-medium mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 pt-6 border-t border-gray-700 text-center">
          <p className="text-gray-300 text-sm">
            © {currentYear} JOB-देखो. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}