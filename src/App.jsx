import React, { useState, useEffect } from 'react';
import { Palette, Brush, Droplet, Home, Users, Sparkles, Shield, Phone, Mail, MapPin, Clock, MoveRight } from 'lucide-react';
import './App.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SwiperCore from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, EffectFade } from 'swiper/modules';
SwiperCore.use([Navigation, Pagination]);


function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({...formData, [e.target.name]:[e.target.value]})
  }

  const homeInfo ={
      title: 'Bring Your Walls to Life',
      description: 'Discover a world of vibrant hues, premium finishes, and lasting impressions. At HueLine Enterprises, we blend cutting-edge technology with timeless craftsmanship to deliver exceptional paint solutions for every space — be it home, office, or industry.'
  }

  const products = [
    {
      title: 'Paint Collection',
      image: '/src/assets/products/img1.webp'
    },
    {
      title: 'Primers & Undercoats',
      image: '/src/assets/products/img2.webp'
    },
    {
      title: 'Tools & Accessories',
      image: '/src/assets/products/img3.webp'
    },
    {
      title: ' Thinners & Solvents',
      image: '/src/assets/products/img4.webp'
    },
    {
      title: 'Decorative Finishes',
      image: '/src/assets/products/img5.webp'
    },
    {
      title: 'Color Aids ',
      image: '/src/assets/products/img6.webp'
    }
  ]

  const galleryItems = [
    {
      title: 'Exterior Facade',
      image: '/src/assets/shop gallery/img1.webp',
      category: 'Exterior'
    },
    {
      title: 'Opus Bar Experience',
      image: '/src/assets/shop gallery/img2.webp',
      category: 'Commercial'
    },
    {
      title: 'Joy of Picking Paint',
      image: '/src/assets/shop gallery/img3.webp',
      category: 'Experience'
    },
    {
      title: 'Consultation Services',
      image: '/src/assets/shop gallery/img4.webp',
      category: 'Services'
    },
    {
      title: 'Paint Gallery Display',
      image: '/src/assets/shop gallery/img5.webp',
      category: 'Showroom'
    },
    {
      title: 'Paint Collection',
      image: '/src/assets/shop gallery/img6.webp',
      category: 'Products'
    },
    {
      title: 'Enterprise Gallery',
      image: '/src/assets/shop gallery/img7.webp',
      category: 'Store'
    }
  ]

  const services = [
    {
      icon: <Droplet className="icon" />,
      title: "Color Consultation",
      description: "Our expert color consultants help you choose the perfect palette for your space, considering lighting, architecture, and your personal style.",
      features: ["Personalized color schemes", "Digital color visualization", "Sample testing"]
    },
    {
      icon: <Brush className="icon" />,
      title: "Professional Application",
      description: "Skilled painters deliver flawless results with attention to detail and premium techniques for lasting beauty.",
      features: ["Surface preparation", "Expert application", "Clean finish"]
    },
    {
      icon: <Home className="icon" />,
      title: "Interior & Exterior Solutions",
      description: "Comprehensive painting solutions for both interior and exterior surfaces, using weather-resistant and durable products.",
      features: ["Weather protection", "UV resistance", "Long-lasting finish"]
    },
    {
      icon: <Users className="icon" />,
      title: "Commercial Services",
      description: "Specialized solutions for offices, retail spaces, and industrial facilities with minimal disruption to operations.",
      features: ["Project management", "Flexible scheduling", "Safety compliance"]
    },
    {
      icon: <Sparkles className="icon" />,
      title: "Special Effects & Textures",
      description: "Create unique finishes with our range of decorative painting techniques and textured coatings.",
      features: ["Metallic finishes", "Textured walls", "Custom patterns"]
    },
    {
      icon: <Shield className="icon" />,
      title: "Maintenance Programs",
      description: "Regular maintenance services to keep your painted surfaces looking fresh and protected year-round.",
      features: ["Annual inspections", "Touch-up services", "Preventive care"]
    }
  ]

  return (
    <>
      {/* Navigation Bar */}
      <nav className='navbar'>
        <div className='logo'>
          <Palette className='palette' />
          <span className='heading'>HUELINE ENTERPRISES</span>
        </div>
        <div className='nav-links'>
          <a href="#home">Home</a>
          <a href="#products">Products</a>
          <a href="#gallery">Shop Gallery</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          {/* <button>sign up/login</button> */}
        </div>
      </nav>

      {/* Home Section */}
      <div className='section' id='home'>
          <h1 className="title">{homeInfo.title}</h1>
          <p className="description">{homeInfo.description}</p>
      </div>

      {/* Products Section */}
      <div className='section' id='products'>
        <h2>Explore Products</h2>
        <p>From walls paints to painting tools, we offer everything you're looking for your painting needs.</p>
        <p><a href='#'>View products <MoveRight className='MoveRight' /></a></p>
        <Swiper
          modules={[Autoplay, EffectFade]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {products.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="slide">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />
                <div className="info">
                  <h3>{item.title}</h3>
                  {/* <p><a href={item.link}>learn more</a></p> */}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Gallery Section */}
      <div className='section' id='gallery'>
        <h2>Shop Gallery</h2>
        <p>Visit our stores and explore a spectrum of colours and designs to inspire your next paint project.<br /> Connect with our experts for an interactive colour consultation.</p>
        <Swiper
          modules={[Autoplay, EffectFade]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          {galleryItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="slide">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />
                <div className="info">
                  <h3>{item.title}</h3>
                  <span>{item.category}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Services Section */}
      <div className='section' id='services'>
        <h2>Our Services</h2>
        <div className="types">
          {services.map((service, index) => (
            <div key={index} className="service">
              <div className="title">
                {service.icon}
                <h3>{service.title}</h3>
              </div>
              <p className="description">{service.description}</p>
              <ul className="features">
                {service.features.map((feature, idx) => (
                  <li key={idx}>
                    <span></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Section */}
      <div className='section' id='contact'>
        <h2>Contact Us</h2>
        <div className="grid">
          <div className="info">
            <div className="box">
              <Phone className="icon" />
              <span>XXXXXXXXXX</span>
            </div>
            <div className="box" id='mail'>
              <Mail className="icon" />
              <span>Lorem ipsum dolor sit @Gmail.com</span>
            </div>
            <div className="box" id='branches'>
              <h3>Our Branches</h3>
              <div className="assets">
                <MapPin className="icon" />
                <div className='text'>
                  <h4>Branch 1:</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit cupiditate reprehenderit sed dolor voluptate magnam?</p>
                </div>
              </div>
              <div className="assets">
                <MapPin className="icon" />
                <div className='text'>
                  <h4>Branch 2:</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit cupiditate reprehenderit sed dolor voluptate magnam?</p>
                </div>
              </div>
            </div>
            <div className="box" id='timing'>
              <Clock className="icon" />
              <div className='text'>
                <p>Mon-Sat: 8AM-9:30PM</p>
                <p>Sun: 8AM-2:30PM</p>
              </div>
            </div>
          </div>
          <form className='form'>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter Your Email"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Enter Your Message"
              required
              rows={4}
            ></textarea>
            <button
              type="submit"
              // disabled={isSubmitting}
              className="submit_btn"
            >
              Send Message
              {/* {isSubmitting ? 'Sending...' : 'Send Message'} */}
            </button>
          </form>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-section">
          <div className='heading'>
            <Palette className="icon" />
            <h3>HUELINE ENTERPRISES</h3>
          </div>
          <p>Premium paints and expert services for your perfect space</p>
        </div>

        <div className="footer-section quick-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#products">Products</a></li>
            <li><a href="#gallery">Shop Gallery</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section branches">
          <h3>Our Branches</h3><br />
          <h4>Branch 1:</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit cupiditate reprehenderit sed dolor voluptate magnam?
          </p><br />
          <h4>Branch 2:</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit cupiditate reprehenderit sed dolor voluptate magnam?
          </p>
        </div>

        <div className="footer-section qr-code">
          <h3>📍 Find Us Easily!</h3>
          <img src="/src/assets/images/Offline Dino Runner QR Code.webp" alt="QR Code" loading="lazy" />
          <p>Scan the QR code below to get the exact location of our company on your map. We're looking forward to welcoming you!</p>
        </div>

        <div className="footer-bottom">
          <p>© 2025 HUELINE ENTERPRISES. All rights reserved.</p>
        </div>
      </footer>
    </>
  )
}

export default App
