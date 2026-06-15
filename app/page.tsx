'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Search, 
  MapPin, 
  Home, 
  BedDouble, 
  Bath, 
  Ruler, 
  Menu, 
  X, 
  ChevronRight, 
  Star, 
  ShieldCheck, 
  Clock,
  ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const FEATURED_PROPERTIES = [
  {
    id: 1,
    title: "Modern Glass Villa",
    price: "$2,450,000",
    address: "142 Foxglove Lane, Beverly Hills, CA",
    beds: 4,
    baths: 3.5,
    sqft: "3,800",
    image: "https://picsum.photos/seed/villa1/800/600",
    tag: "For Sale"
  },
  {
    id: 2,
    title: "Urban Loft Lakeside",
    price: "$895,000",
    address: "88 Water Street, Seattle, WA",
    beds: 2,
    baths: 2,
    sqft: "1,450",
    image: "https://picsum.photos/seed/loft1/800/600",
    tag: "Just Listed"
  },
  {
    id: 3,
    title: "Countryside Estate",
    price: "$1,120,000",
    address: "550 Oakwood Drive, Austin, TX",
    beds: 5,
    baths: 4,
    sqft: "4,200",
    image: "https://picsum.photos/seed/estate1/800/600",
    tag: "For Sale"
  },
  {
    id: 4,
    title: "Minimalist Townhouse",
    price: "$675,000",
    address: "12 Maple Ave, Portland, OR",
    beds: 3,
    baths: 2.5,
    sqft: "1,850",
    image: "https://picsum.photos/seed/town1/800/600",
    tag: "Under Contract"
  },
  {
    id: 5,
    title: "Luxury Penthouse",
    price: "$3,200,000",
    address: "1 N Main St, New York, NY",
    beds: 3,
    baths: 3,
    sqft: "2,600",
    image: "https://picsum.photos/seed/pent1/800/600",
    tag: "For Sale"
  },
  {
    id: 6,
    title: "Cozy Suburban Cottage",
    price: "$450,000",
    address: "812 Willow Way, Denver, CO",
    beds: 3,
    baths: 2,
    sqft: "1,600",
    image: "https://picsum.photos/seed/cottage1/800/600",
    tag: "Price Drop"
  }
];

export default function RealEstateLanding() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <header>
      {/* Navigation */}
      <nav aria-label="Main Navigation" className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
              <div className="relative w-10 h-10 overflow-hidden rounded-lg shadow-sm">
                <Image 
                  src="https://i.ibb.co/MkqMk3Kd/688525843-1781520463088851.jpg"
                  alt="nivasa logo"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight text-slate-900">
                nivasa
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors">Buy</a>
              <a href="#rent" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Rent</a>
              <a href="#sell" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Sell</a>
              <a href="#agents" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Find an Agent</a>
            </div>

            {/* CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <button className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
                Log in
              </button>
              <button className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors">
                Sign up
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex md:hidden items-center">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-slate-600 hover:text-slate-900 focus:outline-none"
                aria-expanded={isMobileMenuOpen}
                aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-200 overflow-hidden"
            >
              <div className="px-4 pt-2 pb-6 space-y-1">
                <a href="#home" className="block px-3 py-3 rounded-md text-base font-medium text-slate-900 hover:bg-slate-50">Buy</a>
                <a href="#rent" className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:bg-slate-50">Rent</a>
                <a href="#sell" className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:bg-slate-50">Sell</a>
                <a href="#agents" className="block px-3 py-3 rounded-md text-base font-medium text-slate-600 hover:bg-slate-50">Find an Agent</a>
                <div className="pt-4 flex flex-col gap-3">
                  <button className="w-full text-center px-4 py-3 border border-slate-300 rounded-xl font-medium text-slate-700 bg-white">Log in</button>
                  <button className="w-full text-center px-4 py-3 rounded-xl font-medium text-white bg-slate-900">Sign up</button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      </header>

      <main className="flex-1">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        {/* Background Decorative blob */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-blue-100 rounded-full blur-3xl opacity-50 pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[600px] h-[600px] bg-teal-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display font-bold text-5xl md:text-6xl lg:text-7xl tracking-tight text-slate-900 mb-6 leading-tight"
            >
              Find a home that <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">suits your lifestyle.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-slate-600"
            >
              Discover the most outstanding properties, connect with top agents, and find the perfect place to call your own.
            </motion.p>
          </div>

          {/* Search Box */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl shadow-blue-900/5 p-2 border border-slate-100"
          >
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1 right-divider relative flex items-center bg-slate-50/50 rounded-2xl md:rounded-l-2xl md:rounded-r-none px-4 py-3 md:py-4">
                <MapPin className="text-slate-400 h-5 w-5 mr-3" />
                <input 
                  type="text" 
                  placeholder="City, Neighborhood, or ZIP"
                  aria-label="Search by City, Neighborhood, or ZIP"
                  className="w-full bg-transparent border-none focus:ring-0 text-slate-900 placeholder:text-slate-500 font-medium outline-none"
                />
              </div>
              <div className="hidden md:block w-px bg-slate-200 my-4"></div>
              <div className="flex-1 relative flex items-center bg-slate-50/50 px-4 py-3 md:py-4">
                <Home className="text-slate-400 h-5 w-5 mr-3" />
                <select aria-label="Select Property Type" className="w-full bg-transparent border-none focus:ring-0 text-slate-900 font-medium outline-none appearance-none cursor-pointer">
                  <option value="">Property Type</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="condo">Condo</option>
                  <option value="townhouse">Townhouse</option>
                </select>
              </div>
              <div className="hidden md:block w-px bg-slate-200 my-4"></div>
              <div className="flex-1 relative flex items-center bg-slate-50/50 rounded-2xl md:rounded-r-2xl md:rounded-l-none px-4 py-3 md:py-4 mb-2 md:mb-0">
                <Search className="text-slate-400 h-5 w-5 mr-3" />
                <select aria-label="Maximum Price" className="w-full bg-transparent border-none focus:ring-0 text-slate-900 font-medium outline-none appearance-none cursor-pointer">
                  <option value="">Max Price</option>
                  <option value="500000">Up to $500k</option>
                  <option value="1000000">Up to $1M</option>
                  <option value="2000000">Up to $2M</option>
                  <option value="5000000">Up to $5M</option>
                </select>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-2xl px-8 py-4 font-medium transition-colors flex justify-center items-center gap-2">
                <Search className="w-5 h-5 hidden md:block" />
                <span>Search</span>
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-10 flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-500"
          >
            <span>Popular:</span>
            <button className="hover:text-blue-600 transition-colors">Miami Beach</button>
            <button className="hover:text-blue-600 transition-colors">Austin, TX</button>
            <button className="hover:text-blue-600 transition-colors">New York Condos</button>
            <button className="hover:text-blue-600 transition-colors">California Villas</button>
          </motion.div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-slate-900 mb-4">Featured Properties</h2>
              <p className="text-lg text-slate-600 max-w-2xl">Explore our hand-picked selection of premium real estate options across the country.</p>
            </div>
            <button className="group flex items-center gap-2 font-medium text-blue-600 hover:text-blue-700 transition-colors">
              View all listings
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {FEATURED_PROPERTIES.map((property, idx) => (
              <motion.div 
                key={property.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-3xl overflow-hidden border border-slate-200 hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-300"
              >
                <div className="relative h-64 overflow-hidden bg-slate-100">
                  <Image 
                    src={property.image} 
                    alt={property.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-semibold text-slate-900 shadow-sm">
                    {property.tag}
                  </div>
                  <button aria-label={`Save ${property.title} to favorites`} className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full text-slate-400 hover:text-red-500 hover:bg-white shadow-sm transition-colors">
                    <Star className="w-4 h-4" />
                  </button>
                </div>
                <div className="p-6">
                  <div className="text-2xl font-display font-bold text-slate-900 mb-2">
                    {property.price}
                  </div>
                  <h3 className="text-lg font-medium text-slate-900 mb-2">{property.title}</h3>
                  <div className="flex items-start gap-1 font-medium text-slate-500 text-sm mb-6">
                    <MapPin className="w-4 h-4 shrink-0 mt-0.5 text-slate-400" />
                    <span>{property.address}</span>
                  </div>
                  
                  <div className="flex items-center gap-6 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-slate-600">
                      <BedDouble className="w-4 h-4 text-slate-400" />
                      <span className="text-sm font-medium">{property.beds} Beds</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Bath className="w-4 h-4 text-slate-400" />
                      <span className="text-sm font-medium">{property.baths} Baths</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Ruler className="w-4 h-4 text-slate-400" />
                      <span className="text-sm font-medium">{property.sqft} sqft</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlight / Trust Section */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/arch/1920/1080')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight">
                Why choose Nivasa for your next home?
              </h2>
              <p className="text-slate-400 text-lg mb-10 pb-10 border-b border-slate-800">
                We bring transparency, expertise, and a premium experience to the real estate journey, ensuring you make the best decision for your future.
              </p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="mt-1 bg-blue-500/10 p-3 rounded-2xl shrink-0 h-fit">
                    <ShieldCheck className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Verified Properties</h3>
                    <p className="text-slate-400">All our listings undergo a rigorous verification process to ensure accuracy and zero surprises.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="mt-1 bg-teal-500/10 p-3 rounded-2xl shrink-0 h-fit">
                    <Clock className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Save Time</h3>
                    <p className="text-slate-400">With intuitive filters, neighborhood insights, and dedicated agents, find what you need faster.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/20">
                <Image 
                  src="https://picsum.photos/seed/interior1/1000/800" 
                  alt="Modern interior"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              {/* Floating stat card */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="absolute -bottom-8 -left-8 bg-white text-slate-900 p-6 rounded-3xl shadow-xl shadow-slate-900/20 max-w-[200px]"
              >
                <div className="font-display font-bold text-4xl mb-1 text-blue-600">4.9/5</div>
                <div className="flex text-yellow-400 mb-2">
                  <Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" /><Star className="w-4 h-4 fill-current" />
                </div>
                <p className="font-medium text-sm text-slate-600">Reviews from over 10,000 happy home buyers.</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-1">
               <div className="flex-shrink-0 flex items-center gap-2 mb-6">
                <div className="relative w-8 h-8 overflow-hidden rounded-lg shadow-sm">
                  <Image 
                    src="https://i.ibb.co/MkqMk3Kd/688525843-1781520463088851.jpg"
                    alt="nivasa logo"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="font-display font-bold text-xl tracking-tight text-slate-900">
                  nivasa
                </span>
              </div>
              <p className="text-sm text-slate-500 mb-6">
                Reimagining real estate to make it easier to unlock life&apos;s next chapter.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Properties</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><a href="#" className="hover:text-blue-600 transition-colors">Houses for Sale</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Apartments for Rent</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">New Construction</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Luxury Real Estate</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Company</h4>
              <ul className="space-y-3 text-sm text-slate-500">
                <li><a href="#" className="hover:text-blue-600 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Press</a></li>
                <li><a href="#" className="hover:text-blue-600 transition-colors">Contact Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-slate-900 mb-4">Newsletter</h4>
              <p className="text-sm text-slate-500 mb-4">Subscribe to our newsletter to get the latest properties and real estate news.</p>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email address" 
                  aria-label="Email address"
                  className="bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 w-full text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
                />
                <button className="bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-xl text-sm font-medium transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Nivasa Real Estate. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-slate-500">
              <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Cookie Settings</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
