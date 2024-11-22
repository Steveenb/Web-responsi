import React, { useState } from "react";
import ReactDOM from "react-dom";
import Swal from "sweetalert2"; // Import SweetAlert2

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subscribe, setSubscribe] = useState(false);

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  const handleSmoothScroll = (e) => {
    e.preventDefault();
    const targetId = e.target.getAttribute("href").slice(1); // Get target section ID from href
    const target = document.getElementById(targetId); // Get the target section
    if (target) {
      target.scrollIntoView({
        behavior: "smooth", // Smooth scroll
        block: "start", // Align to the top of the section
      });
      // Close mobile menu after clicking a link
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    }
  };

  const expertise = [
    {
      title: "Strategy & Direction",
      icon: "🎯",
      description: "Planning and executing digital strategies for optimal results.",
    },
    {
      title: "Branding & Logo",
      icon: "✨",
      description: "Creating memorable brand identities and visual systems.",
    },
    {
      title: "UI & UX Design",
      icon: "🎨",
      description: "Designing intuitive and engaging user experiences.",
    },
    {
      title: "Webflow Development",
      icon: "💻",
      description: "Building responsive and dynamic websites.",
    },
  ];

  // Handle form submission with SweetAlert2 confirmation
  const handleFormSubmit = (e) => {
    e.preventDefault();
    
    if (!email || !message) {
      Swal.fire({
        title: 'Oops!',
        text: 'Please fill in all the required fields.',
        icon: 'error',
      });
      return;
    }

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, submit it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Submitted!",
          text: `You ${subscribe ? 'have' : 'have not'} subscribed to the newsletter.`,
          icon: "success",
        });

        // Handle the form submission logic
        console.log("Email:", email);
        console.log("Message:", message);
        console.log("Subscribe:", subscribe);

        // Reset the form
        setEmail('');
        setMessage('');
        setSubscribe(false);
      }
    });
  };

  // Handle the "Delete Item" action with SweetAlert2 confirmation
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };

  // Handle subscribe checkbox confirmation
  const handleSubscribeClick = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: `You want to ${subscribe ? 'unsubscribe' : 'subscribe'} to the newsletter?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: 'Yes, submit it!',
    }).then((result) => {
      if (result.isConfirmed) {
        setSubscribe(!subscribe);
        Swal.fire({
          title: 'Submitted!',
          text: `You ${subscribe ? 'have' : 'have not'} subscribed to the newsletter.`,
          icon: 'success',
        });
      } else {
        setSubscribe(subscribe); // Revert to previous state
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-lg font-bold text-indigo-600">Portfolio</div>
            <div className="hidden md:flex space-x-4">
              <a href="#home" className="nav-link text-gray-700 hover:text-indigo-600 transition-all duration-300" onClick={handleSmoothScroll}>
                Home
              </a>
              <a href="#portfolio" className="nav-link text-gray-700 hover:text-indigo-600 transition-all duration-300" onClick={handleSmoothScroll}>
                Portfolio
              </a>
              <a href="#skills" className="nav-link text-gray-700 hover:text-indigo-600 transition-all duration-300" onClick={handleSmoothScroll}>
                Skills
              </a>
              <a href="#contact" className="nav-link text-gray-700 hover:text-indigo-600 transition-all duration-300" onClick={handleSmoothScroll}>
                Contact
              </a>
            </div>
            <button className="md:hidden text-gray-500" onClick={handleMenuToggle}>
              {isMenuOpen ? "X" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden px-4 py-2 space-y-2 bg-white">
            <a href="#home" className="nav-link block text-gray-700 hover:text-indigo-600 transition-all duration-300" onClick={handleSmoothScroll}>
              Home
            </a>
            <a href="#portfolio" className="nav-link block text-gray-700 hover:text-indigo-600 transition-all duration-300" onClick={handleSmoothScroll}>
              Portfolio
            </a>
            <a href="#skills" className="nav-link block text-gray-700 hover:text-indigo-600 transition-all duration-300" onClick={handleSmoothScroll}>
              Skills
            </a>
            <a href="#contact" className="nav-link block text-gray-700 hover:text-indigo-600 transition-all duration-300" onClick={handleSmoothScroll}>
              Contact
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-r from-indigo-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold animate__animated animate__fadeIn">
            Welcome to My Portfolio
          </h1>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">My Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <div key={index} className="bg-white p-6 shadow rounded-lg text-center animate__animated animate__fadeInUp">
                <div className="text-4xl">{item.icon}</div>
                <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">My Portfolio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* portfolio data needs to be added */}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
          <form className="space-y-4" onSubmit={handleFormSubmit}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              className="w-full p-2 border rounded"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              className="w-full p-2 border rounded"
            />
            <label>
              <input
                type="checkbox"
                checked={subscribe}
                onChange={handleSubscribeClick}
              />
              Subscribe to Newsletter
            </label>
            <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">
              Submit
            </button>
          </form>
          {/* Delete Button with SweetAlert */}
          <button onClick={handleDelete} className="mt-4 bg-red-600 text-white px-4 py-2 rounded">
            Delete Item
          </button>
        </div>
      </section>
      
    </div>
  );
};

ReactDOM.render(<Portfolio />, document.getElementById("root"));
