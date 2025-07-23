<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import './Index.css'
import { Palette, Star, Info } from 'lucide-react';

const paintProducts = [
  {
    id: 1,
    name: "Premium Interior Paint",
    brand: "ColorMaster",
    description: "High-quality interior paint with excellent coverage and durability. Perfect for living rooms and bedrooms.",
    price: 45.99,
    image: "/Hueline-Enterprises-Lead-Management-System/assets/images/products/img1.webp",
    colors: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4"],
    rating: 4.8,
    finish: "Satin",
    coverage: "400 sq ft"
  },
  {
    id: 2,
    name: "Exterior Weather Shield",
    brand: "ProCoat",
    description: "Weather-resistant exterior paint that protects against harsh elements while maintaining vibrant colors.",
    price: 52.99,
    image: "/Hueline-Enterprises-Lead-Management-System/assets/images/products/img2.webp",
    colors: ["#2C3E50", "#E74C3C", "#F39C12", "#27AE60"],
    rating: 4.6,
    finish: "Semi-Gloss",
    coverage: "350 sq ft"
  },
  {
    id: 3,
    name: "Eco-Friendly Natural Paint",
    brand: "GreenPaint Co.",
    description: "Environmentally friendly paint made from natural ingredients. Low VOC formula safe for families.",
    price: 38.99,
    image: "/Hueline-Enterprises-Lead-Management-System/assets/images/products/img3.webp",
    colors: ["#A8E6CF", "#C7CEEA", "#FFD3A5", "#FFA8A8"],
    rating: 4.7,
    finish: "Matte",
    coverage: "380 sq ft"
  },
  {
    id: 4,
    name: "Professional Grade Primer",
    brand: "BaseCoat Pro",
    description: "High-adhesion primer that ensures perfect paint application and long-lasting results.",
    price: 29.99,
    image: "/Hueline-Enterprises-Lead-Management-System/assets/images/products/img4.webp",
    colors: ["#FFFFFF", "#F8F8F8", "#E8E8E8"],
    rating: 4.9,
    finish: "Flat",
    coverage: "450 sq ft"
  },
  {
    id: 5,
    name: "Luxury Silk Finish",
    brand: "ElitePaint",
    description: "Premium silk finish paint that adds elegance and sophistication to any room.",
    price: 68.99,
    image: "/Hueline-Enterprises-Lead-Management-System/assets/images/products/img5.webp",
    colors: ["#D4AF37", "#C0392B", "#8E44AD", "#2980B9"],
    rating: 4.9,
    finish: "Silk",
    coverage: "320 sq ft"
  },
  {
    id: 6,
    name: "Quick-Dry Formula",
    brand: "FastCoat",
    description: "Revolutionary quick-drying paint that's ready for a second coat in just 2 hours.",
    price: 41.99,
    image: "/Hueline-Enterprises-Lead-Management-System/assets/images/products/img6.webp",
    colors: ["#FF7F50", "#20B2AA", "#9370DB", "#32CD32"],
    rating: 4.5,
    finish: "Eggshell",
    coverage: "375 sq ft"
  }
];

function ProductsPage() {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < Math.floor(rating) ? 'star-filled' : 'star-empty'}
        fill={index < Math.floor(rating) ? 'currentColor' : 'none'}
      />
    ));
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className='navbar'>
        <div className='logo'>
          <Palette className='palette' />
          <span className='heading'>HUELINE ENTERPRISES</span>
        </div>
        <div className='nav-links'>
          <Link to="/#home">Home</Link>
          <Link to="/#products">Products</Link>
          <Link to="/#gallery">Shop Gallery</Link>
          <Link to="/#services">Services</Link>
          <Link to="/#contact">Contact</Link>
        </div>
      </nav>

      <div className="paint-products-container">
        <header className="page-header">
          <div className="header-content">
            <h1 className="page-title">Premium Paint Collection</h1>
            <p className="page-subtitle">Discover our extensive range of high-quality paints for every project</p>
          </div>
        </header>

        <div className="products-grid">
          {paintProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-badge">{product.finish}</div>
              </div>

              <div className="product-content">
                <div className="product-header">
                  <span className="product-brand">{product.brand}</span>
                  <div className="rating-container">
                    <div className="stars">
                      {renderStars(product.rating)}
                    </div>
                    <span className="rating-text">{product.rating}</span>
                  </div>
                </div>

                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>

                <div className="color-swatches">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="color-swatch"
                      style={{ backgroundColor: color }}
                      title={`Color option ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="product-details">
                  <div className="detail-item">
                    <Info size={14} />
                    <span>Coverage: {product.coverage}</span>
                  </div>
                </div>

                <div className="product-footer">
                  <div className="price">${product.price}</div>
                  <button className="view-details-btn">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

=======
import React from 'react';
import { Link } from 'react-router-dom';
import './Index.css'
import { Palette, Star, Info } from 'lucide-react';

const paintProducts = [
  {
    id: 1,
    name: "Premium Interior Paint",
    brand: "ColorMaster",
    description: "High-quality interior paint with excellent coverage and durability. Perfect for living rooms and bedrooms.",
    price: 45.99,
    image: "/Hueline-Enterprises-Lead-Management-System/assets/images/products/img1.webp",
    colors: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#96CEB4"],
    rating: 4.8,
    finish: "Satin",
    coverage: "400 sq ft"
  },
  {
    id: 2,
    name: "Exterior Weather Shield",
    brand: "ProCoat",
    description: "Weather-resistant exterior paint that protects against harsh elements while maintaining vibrant colors.",
    price: 52.99,
    image: "/Hueline-Enterprises-Lead-Management-System/assets/images/products/img2.webp",
    colors: ["#2C3E50", "#E74C3C", "#F39C12", "#27AE60"],
    rating: 4.6,
    finish: "Semi-Gloss",
    coverage: "350 sq ft"
  },
  {
    id: 3,
    name: "Eco-Friendly Natural Paint",
    brand: "GreenPaint Co.",
    description: "Environmentally friendly paint made from natural ingredients. Low VOC formula safe for families.",
    price: 38.99,
    image: "/Hueline-Enterprises-Lead-Management-System/assets/images/products/img3.webp",
    colors: ["#A8E6CF", "#C7CEEA", "#FFD3A5", "#FFA8A8"],
    rating: 4.7,
    finish: "Matte",
    coverage: "380 sq ft"
  },
  {
    id: 4,
    name: "Professional Grade Primer",
    brand: "BaseCoat Pro",
    description: "High-adhesion primer that ensures perfect paint application and long-lasting results.",
    price: 29.99,
    image: "/Hueline-Enterprises-Lead-Management-System/assets/images/products/img4.webp",
    colors: ["#FFFFFF", "#F8F8F8", "#E8E8E8"],
    rating: 4.9,
    finish: "Flat",
    coverage: "450 sq ft"
  },
  {
    id: 5,
    name: "Luxury Silk Finish",
    brand: "ElitePaint",
    description: "Premium silk finish paint that adds elegance and sophistication to any room.",
    price: 68.99,
    image: "/Hueline-Enterprises-Lead-Management-System/assets/images/products/img5.webp",
    colors: ["#D4AF37", "#C0392B", "#8E44AD", "#2980B9"],
    rating: 4.9,
    finish: "Silk",
    coverage: "320 sq ft"
  },
  {
    id: 6,
    name: "Quick-Dry Formula",
    brand: "FastCoat",
    description: "Revolutionary quick-drying paint that's ready for a second coat in just 2 hours.",
    price: 41.99,
    image: "/Hueline-Enterprises-Lead-Management-System/assets/images/products/img6.webp",
    colors: ["#FF7F50", "#20B2AA", "#9370DB", "#32CD32"],
    rating: 4.5,
    finish: "Eggshell",
    coverage: "375 sq ft"
  }
];

function ProductsPage() {
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < Math.floor(rating) ? 'star-filled' : 'star-empty'}
        fill={index < Math.floor(rating) ? 'currentColor' : 'none'}
      />
    ));
  };

  return (
    <>
      {/* Navigation Bar */}
      <nav className='navbar'>
        <div className='logo'>
          <Palette className='palette' />
          <span className='heading'>HUELINE ENTERPRISES</span>
        </div>
        <div className='nav-links'>
          <Link to="/#home">Home</Link>
          <Link to="/#products">Products</Link>
          <Link to="/#gallery">Shop Gallery</Link>
          <Link to="/#services">Services</Link>
          <Link to="/#contact">Contact</Link>
        </div>
      </nav>

      <div className="paint-products-container">
        <header className="page-header">
          <div className="header-content">
            <h1 className="page-title">Premium Paint Collection</h1>
            <p className="page-subtitle">Discover our extensive range of high-quality paints for every project</p>
          </div>
        </header>

        <div className="products-grid">
          {paintProducts.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image-container">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
                <div className="product-badge">{product.finish}</div>
              </div>

              <div className="product-content">
                <div className="product-header">
                  <span className="product-brand">{product.brand}</span>
                  <div className="rating-container">
                    <div className="stars">
                      {renderStars(product.rating)}
                    </div>
                    <span className="rating-text">{product.rating}</span>
                  </div>
                </div>

                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>

                <div className="color-swatches">
                  {product.colors.map((color, index) => (
                    <div
                      key={index}
                      className="color-swatch"
                      style={{ backgroundColor: color }}
                      title={`Color option ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="product-details">
                  <div className="detail-item">
                    <Info size={14} />
                    <span>Coverage: {product.coverage}</span>
                  </div>
                </div>

                <div className="product-footer">
                  <div className="price">${product.price}</div>
                  <button className="view-details-btn">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

>>>>>>> c0f4065 (initial commit)
export default ProductsPage;