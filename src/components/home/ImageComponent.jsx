import React, { useState, useEffect } from "react";

const ImageComponent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const images = [
    {
      src: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Coiffeur",
      buttonText: "Découvrir",
      link: "/coiffeur"
    },
    {
      src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Barbier",
      buttonText: "Explorer",
      link: "/barbier"
    },
    {
      src: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      title: "Instituts",
      buttonText: "En savoir plus",
      link: "/instituts"
    },
    {
      src: "https://images.unsplash.com/photo-1554424518-336ec861b705?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Spa & Hammam",
      buttonText: "Réserver",
      link: "/spa-hammam"
    }
  ];
// Handle click for mobile devices
const handleClick = (index) => {
    setActiveIndex(index);
  };

  // Apply media queries when component mounts
  useEffect(() => {
    // Create a style element
    const styleElement = document.createElement('style');
    
    // Add media queries for different screen sizes
    styleElement.innerHTML = `
      /* Mobile styles */
      @media (max-width: 767px) {
        .gallery-container {
          display: grid !important;
          grid-template-columns: 1fr 1fr !important;
          grid-template-rows: auto auto !important;
          gap: 8px !important;
          height: auto !important;
        }
        
        .image-container {
          height: 180px !important;
          border-radius: 0.375rem !important;
          flex: none !important;
        }
        
        .image-title {
          font-size: 18px !important;
        }
        
        .image-button {
          padding: 8px 16px !important;
          font-size: 14px !important;
        }
        
        .overlay-content {
          opacity: 1 !important;
          background: linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.2) 100%) !important;
        }
      }
      
      /* Medium screens (md) */
      @media (min-width: 768px) {
        .gallery-container {
          height: 420px !important;
          display: flex !important;
        }
        
        .image-container {
          border-radius: 0.375rem !important;
        }
      }
    `;
    
    // Append to head
    document.head.appendChild(styleElement);
    
    // Clean up function
    return () => {
      if (styleElement) {
        styleElement.remove();
      }
    };
  }, []);

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.galleryContainer} className="gallery-container">
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                ...styles.imageContainer,
                flex: index === activeIndex ? 5 : 1,
              }}
              className="image-container"
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => handleClick(index)}
            >
              <div style={styles.imageWrapper}>
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  style={styles.image}
                />
                <div 
                  style={{
                    ...styles.overlay,
                    opacity: index === activeIndex ? 1 : 0
                  }}
                  className={`overlay-content ${index === activeIndex ? 'active-overlay' : ''}`}
                >
                  <div style={styles.contentWrapper}>
                    <h3 style={styles.title} className="image-title">{image.title}</h3>
                    <button style={styles.button} className="image-button">{image.buttonText}</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Inline styles
const styles = {
  section: {
    padding: "40px 0",
    backgroundColor: "#f8f9fa",
  },
  container: {
    width: "100%",
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
  },
  galleryContainer: {
    display: "flex",
    width: "100%",
    height: "500px",
    overflow: "hidden",
    borderRadius: "8px",
    gap: "8px",
    backgroundColor: "#f0f2f5",
  },
  imageContainer: {
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    minWidth: "100px",
    transition: "all 0.5s ease",
    borderRadius: "0.375rem",
  },
  imageWrapper: {
    position: "relative",
    width: "100%",
    height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 60%, rgba(0,0,0,0.2) 100%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    transition: "opacity 0.3s ease",
    borderRadius: "0.375rem",
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    transform: "translateY(-20px)",
    padding: "0 20px",
  },
  title: {
    color: "white",
    margin: "0 0 15px 0",
    fontSize: "24px",
    fontWeight: "bold",
    textAlign: "center",
    textShadow: "1px 1px 3px rgba(0,0,0,0.5)",
  },
  button: {
    backgroundColor: "white",
    color: "#333",
    border: "none",
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "all 0.2s ease",
  }
};

export default ImageComponent;