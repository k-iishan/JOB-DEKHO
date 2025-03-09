"use client"
import React, { useState, useEffect, useRef } from 'react';


const AutoInfiniteCarousel = () => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [studentCount, setStudentCount] = useState(0);
  const carouselRef = useRef(null);
  const counterStarted = useRef(false);
  
  // Expanded company data with more top companies
  const companies = [
    { id: 1, name: 'TATA AIG', logo: 'https://logos-world.net/wp-content/uploads/2020/09/Google-Logo.png', color: '#0057A6' },
    { id: 2, name: 'ICICI Bank', logo: 'https://logos-world.net/youtube-logo/', color: '#F47920' },
    { id: 3, name: 'HDFC Bank', logo: '/api/placeholder/200/100', color: '#004C8F' },
    { id: 4, name: 'Bisleri', logo: '/api/placeholder/200/100', color: '#00A3E0' },
    { id: 5, name: 'BAJAJ ALLIANZ', logo: '/api/placeholder/200/100', color: '#1A4784' },
    { id: 6, name: 'MRF Tyres', logo: '/api/placeholder/200/100', color: '#E4002B' },
    { id: 7, name: 'TCS', logo: '/api/placeholder/200/100', color: '#0033A0' },
    { id: 8, name: 'Infosys', logo: '/api/placeholder/200/100', color: '#007CC3' },
    { id: 9, name: 'Wipro', logo: '/api/placeholder/200/100', color: '#12B5E6' },
    { id: 10, name: 'Amazon', logo: '/api/placeholder/200/100', color: '#FF9900' },
    { id: 11, name: 'Microsoft', logo: '/api/placeholder/200/100', color: '#00A4EF' },
    { id: 12, name: 'Google', logo: '/api/placeholder/200/100', color: '#4285F4' },
    { id: 13, name: 'Accenture', logo: '/api/placeholder/200/100', color: '#A100FF' },
    { id: 14, name: 'Deloitte', logo: '/api/placeholder/200/100', color: '#86BC25' },
    { id: 15, name: 'IBM', logo: '/api/placeholder/200/100', color: '#0530AD' },
  ];
  
  // Duplicate the array to create the infinite effect
  const extendedCompanies = [...companies, ...companies];
  
  // Stats
  const stats = [
    { icon: "🎓", label: "Students Placed", targetValue: 2345 },
    { icon: "🏢", label: "Partner Companies", targetValue: companies.length },
    { icon: "💼", label: "Placement Rate", targetValue: 95, suffix: "%" },
    { icon: "📈", label: "Avg. Package", targetValue: 8, prefix: "₹", suffix: "LPA" }
  ];
  
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    
    // Auto scroll animation
    const animationId = setInterval(() => {
      setCurrentPosition(prev => {
        // Reset position when we've scrolled through the original set
        if (prev >= companies.length * 200) {
          return 0;
        }
        return prev + 1;
      });
    }, 20);
    
    return () => clearInterval(animationId);
  }, [companies.length]);
  
  // Student count animation
  useEffect(() => {
    if (counterStarted.current) return;
    counterStarted.current = true;
    
    // Duration in ms
    const duration = 3000;
    // Target value
    const targetValue = 2345;
    // Frame rate
    const frameRate = 30;
    // Step value
    const step = targetValue / (duration / 1000 * frameRate);
    
    const animate = () => {
      setStudentCount(prev => {
        if (prev >= targetValue) {
          return targetValue;
        }
        return Math.min(prev + step, targetValue);
      });
    };
    
    const intervalId = setInterval(animate, 1000 / frameRate);
    
    return () => clearInterval(intervalId);
  }, []);
  
  return (
    <div className="w-full max-w-6xl mx-auto my-8">
      {/* Stats in one line */}
      <div className="mb-12 bg-blue-50 p-4 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">Our Placement Success</h2>
        
        <div className="flex flex-wrap justify-around items-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-center px-4 py-2">
              <div className="flex items-center justify-center">
                <span className="mr-2 text-xl">{stat.icon}</span>
                <div>
                  <div className="text-2xl font-bold text-blue-600">
                    {stat.prefix && <span>{stat.prefix}</span>}
                    {stat.label === "Students Placed" ? 
                      Math.floor(studentCount) : 
                      stat.targetValue}
                    {stat.suffix && <span>{stat.suffix}</span>}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Company Carousel */}
      <h2 className="text-2xl font-bold mb-6 text-center">Placement Partners</h2>
      
      <div className="relative overflow-hidden">
        <div 
          ref={carouselRef}
          className="flex"
          style={{ 
            transform: `translateX(-${currentPosition}px)`,
            transition: currentPosition === 0 ? 'none' : 'transform 0.1s linear'
          }}
        >
          {extendedCompanies.map((company, index) => (
            <div 
              key={`${company.id}-${index}`}
              className="flex-shrink-0 w-48 h-32 mx-4 rounded-lg flex flex-col items-center justify-center shadow-md"
              style={{ backgroundColor: 'white', border: `2px solid ${company.color}` }}
            >
              <div 
                className="w-32 h-20 flex items-center justify-center"
                style={{ backgroundColor: 'white' }}
              >
                <img 
                  src={company.logo} 
                  alt={`${company.name} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              
            </div>
          ))}
        </div>
      </div>
      
      <div className="flex justify-center mt-4">
        <div className="bg-gray-200 h-1 w-40 rounded-full overflow-hidden">
          <div 
            className="bg-blue-600 h-1 rounded-full"
            style={{ 
              width: `${(currentPosition / (companies.length * 200)) * 100}%`,
              transition: 'width 0.1s linear'
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default AutoInfiniteCarousel;