// import { useState } from 'react';

// const Landing = () => {
//   const [formData, setFormData] = useState({ firstName: '', email: '', message: '', acceptTerms: false });

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', formData);
//     // Here you would typically send the data to a server
//   };

//   return (
//     <div className="min-h-screen bg-blue-50">
//       {/* Header */}
//       <header className="bg-white shadow-sm">
//         <div className="container mx-auto px-4 py-6 flex justify-between items-center">
//           <h1 className="text-2xl font-bold text-gray-800">Crypto & Stock Tracker</h1>
//           <nav className="hidden md:flex space-x-6">
//             <a href="#" className="text-gray-600 hover:text-gray-800">Home</a>
//             <a href="#" className="text-gray-600 hover:text-gray-800">About</a>
//             <a href="#" className="text-gray-600 hover:text-gray-800">Service</a>
//             <a href="#" className="text-gray-600 hover:text-gray-800">Testimonial</a>
//             <a href="#" className="text-gray-600 hover:text-gray-800">Contact</a>
//           </nav>
//           <div className="flex space-x-4">
//             <button className="text-blue-600 hover:text-blue-700 font-semibold">Get Started</button>
//             <button className="bg-blue-600 text-white font-semibold py-2 px-4 rounded-full hover:bg-blue-700">
//               Track Now
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Main content */}
//       <main>
//         {/* Hero Section */}
//         <section className="py-20 text-center">
//           <h2 className="text-5xl font-bold mb-6">Track Crypto and Stocks with Precision</h2>
//           <p className="text-xl mb-10 max-w-3xl mx-auto">
//             Empower your financial journey with real-time updates on cryptocurrency and Indian stock markets.
//           </p>
//           <div className="flex justify-center space-x-4">
//             <button className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700">
//               Get Started
//             </button>
//             <button className="border border-blue-600 text-blue-600 font-semibold py-3 px-8 rounded-full hover:bg-blue-50">
//               Join Now
//             </button>
//           </div>
//         </section>

//         {/* Partners Section */}
//         <section className="bg-gray-200 py-16">
//           <div className="container mx-auto px-4">
//             <h3 className="text-2xl font-semibold text-center mb-10">Your Gateway to Market Insights</h3>
//             <div className="flex justify-between items-center flex-wrap">
//               {['logo1', 'logo2', 'logo3', 'logo4', 'logo5'].map((logo, index) => (
//                 <div key={index} className="w-1/5 px-4 mb-4">
//                   <img src={`/placeholder.svg?height=50&width=120`} alt={`Partner logo ${index + 1}`} width={120} height={50} />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Features Section */}
//         <section className="py-20">
//           <div className="container mx-auto px-4">
//             <div className="grid md:grid-cols-3 gap-8">
//               <div className="bg-blue-900 text-white p-8 rounded-lg">
//                 <h4 className="text-xl font-semibold mb-4">Harness Real-Time Market Analysis Effortlessly</h4>
//                 <p className="mb-4">Learn More →</p>
//                 <div className="text-4xl">$</div>
//               </div>
//               <div className="bg-blue-500 text-white p-8 rounded-lg">
//                 <h4 className="text-xl font-semibold mb-4">Stay Informed with Instant Alerts</h4>
//                 <p className="mb-4">Explore Alerts →</p>
//                 <div className="text-4xl">→</div>
//               </div>
//               <div className="bg-blue-300 text-blue-900 p-8 rounded-lg">
//                 <h4 className="text-xl font-semibold mb-4">Navigate Investments with Expert Guidance</h4>
//                 <p className="mb-4">Get Insights →</p>
//                 <div className="text-4xl">⚙️</div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Merging Crypto with Stocks Section */}
//         <section className="py-20 bg-blue-100">
//           <div className="container mx-auto px-4">
//             <div className="flex flex-wrap items-center">
//               <div className="w-full md:w-1/2 mb-10 md:mb-0">
//                 <h2 className="text-4xl font-bold mb-6">Crypto & Stock Tracker: Merging Crypto with Stocks</h2>
//                 <p className="text-xl mb-6">
//                   We provide real-time visibility into cryptocurrency and the Indian stock market, making informed decisions easier than ever.
//                 </p>
//                 <ul className="space-y-2">
//                   <li className="flex items-center"><span className="mr-2">✓</span> Accurate Data with Every Trade</li>
//                   <li className="flex items-center"><span className="mr-2">✓</span> Tailored Insights for Smart Investors</li>
//                   <li className="flex items-center"><span className="mr-2">✓</span> User-Friendly Interface for All Levels</li>
//                 </ul>
//               </div>
//               <div className="w-full md:w-1/2">
//                 <img src="/placeholder.svg?height=300&width=500" alt="Cryptocurrency coins" width={500} height={300} className="rounded-lg" />
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Innovative Tools Section */}
//         <section className="py-20">
//           <div className="container mx-auto px-4">
//             <div className="flex flex-wrap items-center">
//               <div className="w-full md:w-1/2 mb-10 md:mb-0">
//                 <img src="/placeholder.svg?height=400&width=400" alt="Smartphone with graph" width={400} height={400} className="rounded-lg" />
//               </div>
//               <div className="w-full md:w-1/2">
//                 <h2 className="text-4xl font-bold mb-6">Discover Innovative Tools for Market Tracking</h2>
//                 <p className="text-xl mb-6">
//                   Our platform combines cutting-edge technology with user-friendly design, ensuring a superior tracking experience for cryptocurrency and stocks.
//                 </p>
//                 <ul className="space-y-2">
//                   <li className="flex items-center"><span className="mr-2">✓</span> Instant Market Notifications for You</li>
//                   <li className="flex items-center"><span className="mr-2">✓</span> Depth of Insights for Every Investor</li>
//                   <li className="flex items-center"><span className="mr-2">✓</span> Personalized Portfolio Management Solutions</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Comprehensive Analytics Tools Section */}
//         <section className="py-20 bg-white">
//           <div className="container mx-auto px-4">
//             <h2 className="text-4xl font-bold text-center mb-12">Stay ahead of market trends with our comprehensive analytics tools.</h2>
//             <div className="grid md:grid-cols-3 gap-8">
//               {[{
//                 title: "Real-Time Market Analysis",
//                 description: "Navigate Market Fluctuations with Confidence"
//               }, {
//                 title: "Cryptocurrency Alerts",
//                 description: "Receive timely updates on cryptocurrency price changes and trends to seize market opportunities."
//               }, {
//                 title: "Stock Market Insights",
//                 description: "Get real-time updates and strategies for maximizing your stock investments with our tailored guidance."
//               }, {
//                 title: "Comprehensive Market Analytics",
//                 description: "Leverage our analytics to make data-driven decisions in the fast-paced financial landscape."
//               }, {
//                 title: "Portfolio Diversification Strategies",
//                 description: "Explore strategies designed to enhance your portfolio's performance across various markets."
//               }, {
//                 title: "Advanced Tracking Tools",
//                 description: "Utilize our advanced technology for seamless tracking across multiple assets and exchanges."
//               }].map((item, index) => (
//                 <div key={index} className="bg-gray-100 p-8 rounded-lg shadow-md">
//                   <h4 className="text-2xl font-semibold mb-4">{item.title}</h4>
//                   <p>{item.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>

//         {/* Contact Form Section */}
//         <section className="py-20 bg-blue-50">
//           <div className="container mx-auto px-4">
//             <h2 className="text-4xl font-bold text-center mb-12">Contact Us</h2>
//             <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
//               <div className="grid md:grid-cols-2 gap-6">
//                 <div className="md:col-span-1">
//                   <label htmlFor="firstName" className="block text-lg font-semibold mb-2">First Name</label>
//                   <input
//                     id="firstName"
//                     name="firstName"
//                     type="text"
//                     value={formData.firstName}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//                     required
//                   />
//                 </div>
//                 <div className="md:col-span-1">
//                   <label htmlFor="email" className="block text-lg font-semibold mb-2">Email Address</label>
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     value={formData.email}
//                     onChange={handleInputChange}
//                     className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="mt-6">
//                 <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
//                 <textarea
//                   id="message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleInputChange}
//                   className="w-full px-4 py-2 border border-gray-300 rounded-lg"
//                   rows="4"
//                   required
//                 />
//               </div>
//               <div className="mt-6 flex items-center">
//                 <input
//                   id="acceptTerms"
//                   name="acceptTerms"
//                   type="checkbox"
//                   checked={formData.acceptTerms}
//                   onChange={handleInputChange}
//                   className="mr-2"
//                   required
//                 />
//                 <label htmlFor="acceptTerms" className="text-sm">I accept the terms and conditions.</label>
//               </div>
//               <button
//                 type="submit"
//                 className="mt-6 bg-blue-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-blue-700"
//               >
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </section>
//       </main>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-10">
//         <div className="container mx-auto px-4 text-center">
//           <p className="text-sm">© 2024 Crypto & Stock Tracker. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// }
// export default Landing;
