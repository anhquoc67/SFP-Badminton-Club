import React, { useState, useEffect } from 'react';

const Banner = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const backgroundImages = [
    'https://res.cloudinary.com/duj4e3i6z/image/upload/v1730519482/logonew_m5jozi.jpg',
    'https://res.cloudinary.com/duj4e3i6z/image/upload/v1730353871/Screenshot_2024-10-14_162202_v0ftxi.png',
    'https://res.cloudinary.com/duj4e3i6z/image/upload/v1730519481/logonew1_rvtzrj.jpg'
  ];

  // Change background every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % backgroundImages.length);
    }, 2000);

    return () => clearInterval(intervalId);
  }, [backgroundImages.length]);

  const images = [
    "https://res.cloudinary.com/duj4e3i6z/image/upload/v1730439529/boctham_cgrtqz.jpg",
    "https://res.cloudinary.com/duj4e3i6z/image/upload/v1730439529/boctham1_qwu6oy.jpg",
    "https://res.cloudinary.com/duj4e3i6z/image/upload/v1730439528/traigiai_jcvzvv.jpg",
    "https://res.cloudinary.com/duj4e3i6z/image/upload/v1729413593/bn8_v0kwk7.jpg"
  ];

  const handleLearnMore = () => {
    window.location.href = '/HOT';
  };

  return (
    <div>
      {/* Rotating Background Images */}
      <div 
        style={{ 
          backgroundImage: `url(${backgroundImages[currentImage]})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: '650px',
          width: '100%',
          position: 'relative',
          color: 'white',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          transition: 'background-image 4s ease-in-out'
        }}
      >
        <h1 style={{ 
          fontSize: '2.5rem',
          fontWeight: 'bold',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.8)' 
        }}>
          SFP 2024<br />Badminton Club
        </h1>
      </div>

      {/* Banner Content Below the Background Image */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'flex-start', padding: '20px', flexWrap: 'wrap' }}>
        {/* Carousel Section */}
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" style={{ maxWidth: '350px', margin: '10px', width: '100%' }}>
          <div className="carousel-inner" style={{ maxHeight: '350px' }}>
            {images.map((image, index) => (
              <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                <img
                  src={image}
                  className="d-block w-100"
                  alt={`Slide ${index}`}
                  style={{ objectFit: 'cover', height: '250px', width: '100%' }} 
                />
              </div>
            ))}
            <div style={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              backgroundColor: 'rgba(255, 0, 0, 0.7)',
              color: 'white',
              padding: '5px 10px',
              borderRadius: '5px',
              fontWeight: 'bold',
              fontSize: '14px'
            }}>
              Event
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>

        {/* Text Section */}
        <div style={{ marginLeft: '20px', maxWidth: '300px', flexGrow: 1 }}>
          <h3>Description</h3>
          <p className="text-black mt-3">
            Event new
          </p>
          <button onClick={handleLearnMore} style={{ 
            padding: '10px 20px', 
            backgroundColor: '#007bff', 
            color: 'white', 
            border: 'none', 
            borderRadius: '5px', 
            cursor: 'pointer' 
          }}>
            See More
          </button>
        </div>
      </div>

      {/* Media Queries for Responsive Design */}
      <style jsx>{`
        @media (max-width: 768px) {
          .carousel-item img {
            height: 200px;
          }

          h1 {
            font-size: 2rem;
          }

          .carousel-control-prev, .carousel-control-next {
            display: none;
          }
        }

        @media (max-width: 576px) {
          h1 {
            font-size: 1.8rem;
          }

          .text-black {
            font-size: 0.9rem;
          }

          button {
            padding: 8px 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;
