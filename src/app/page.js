"use client"
import { useState } from 'react';

export default function LandingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
    setSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });
    
    // Reset submission message after 5 seconds
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };
  
  // Product data - you can replace these with your actual products
  const products = [
    {
      id: 1,
      name: "Buyu Classic Mix",
      description: "Our signature blend of traditional buyu flavors, perfectly balanced for an authentic taste experience.",
      imageUrl: "/ukwaju.jpeg" 
    },
    {
      id: 2,
      name: "Spicy Buyu Delight",
      description: "A fiery twist on our classic recipe, perfect for those who love an extra kick of flavor.",
      imageUrl: "/ubuyu1.webp" 
    },
    {
      id: 3,
      name: "Sweet Buyu Treats",
      description: "A sweet and tangy variation that combines traditional buyu with fruity undertones.",
      imageUrl: "/ubuyu2.webp" 
    }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-amber-100">
      {/* Hero Section */}
      <header className="w-full py-16 px-4 flex flex-col items-center text-center">
        <h1 className="text-5xl font-bold text-amber-800 mb-6">Tasty Buyu by Lizzie</h1>
        <p className="text-xl text-amber-700 max-w-2xl">
          Authentic, flavorful, and crafted with love. Experience the taste of tradition with our premium buyu products.
        </p>
      </header>
      
      {/* Product Showcase */}
      <section className="py-12 px-4 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-amber-800 text-center mb-10">Our Products</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-transform hover:scale-105">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-amber-800 mb-2">{product.name}</h3>
                <p className="text-gray-700">{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* About Section */}
      <section className="py-12 px-4 bg-amber-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">About Our Buyu</h2>
          <p className="text-lg mb-6">
            At Tasty Buyu by Lizzie, we pride ourselves on using only the freshest ingredients and traditional recipes
            passed down through generations. Each product is carefully crafted to ensure exceptional quality and taste.
          </p>
          <p className="text-lg">
            Our commitment to authenticity and excellence makes our buyu products stand out. Whether you're a long-time
            buyu lover or trying it for the first time, we guarantee a delightful experience with every bite.
          </p>
        </div>
      </section>
      
      {/* Contact Form */}
      <section className="py-12 px-4 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-amber-800 text-center mb-8">Get in Touch</h2>
        <p className="text-center text-gray-700 mb-6">
          Interested in our products? Fill out the form below and we'll get back to you soon!
        </p>
        
        <div className="bg-white rounded-lg shadow-md p-6">
          {submitted ? (
            <div className="text-center py-8">
              <p className="text-green-600 text-xl font-medium">Thank you for your interest!</p>
              <p className="text-gray-700 mt-2">We'll contact you shortly about our delicious buyu products.</p>
            </div>
          ) : (
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-gray-700 mb-2">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                ></textarea>
              </div>
              
              <button
                onClick={handleSubmit}
                className="w-full bg-amber-700 text-white py-3 px-4 rounded-md hover:bg-amber-800 transition-colors font-medium"
              >
                Submit
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-amber-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-semibold">Tasty Buyu by Lizzie</h3>
            <p className="mt-2">Authentic taste, delivered to your doorstep</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p>© {new Date().getFullYear()} Tasty Buyu by Lizzie. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}