import React, { useEffect } from "react";

const BookingSection = () => {
  // Apply media queries and animations when component mounts
  useEffect(() => {
    // Create a style element
    const styleElement = document.createElement('style');
    
    // Add media query for mobile and flip animation
    styleElement.innerHTML = `
      @media (max-width: 768px) {
        .booking-section-content {
          flex-direction: column !important;
          gap: 20px !important;
        }
        .booking-title {
          font-size: 32px !important;
          text-align: center !important;
        }
        .booking-description {
          text-align: center !important;
        }
        .booking-actions {
          flex-direction: column !important;
          width: 100% !important;
          align-items: center !important;
        }
        .booking-right-content {
          align-items: center !important;
        }
      }
      
      /* Flip button effect */
      .flip-button {
        perspective: 1000px;
        position: relative;
        display: inline-block;
      }
      
      .flip-button-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.6s;
        transform-style: preserve-3d;
      }
      
      .flip-button:hover .flip-button-inner {
        transform: rotateX(180deg);
      }
      
      .flip-button-front, .flip-button-back {
        position: absolute;
        width: 100%;
        height: 100%;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 5px;
      }
      
      .flip-button-front {
        background-color: #002366;
        color: white;
      }
      
      .flip-button-back {
        background-color: #001845;
        color: white;
        transform: rotateX(180deg);
      }
      
      /* Contact link hover effect */
      .contact-link {
        transition: color 0.3s ease;
      }
      
      .contact-link:hover {
        color: #002366 !important;
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
        <div style={styles.contentWrapper} className="booking-section-content">
          <div style={styles.headingContainer}>
            <h2 style={styles.title} className="booking-title">
              Réservez votre moment beauté avec <span style={styles.highlight}>Wellbe</span>
            </h2>
          </div>
          
          <div style={styles.rightContent} className="booking-right-content">
            <p style={styles.description} className="booking-description">
              Découvrez les meilleurs salons près de chez vous et prenez rendez-vous en ligne en quelques secondes. Coiffure, esthétique, bien-être… tout commence ici.
            </p>
            
            <div style={styles.actions} className="booking-actions">
              <div className="flip-button">
                <a href="/institus" style={styles.buttonWrapper} className="flip-button-inner">
                  <span style={styles.buttonFront} className="flip-button-front">
                    Réserver maintenant
                  </span>
                  <span style={styles.buttonBack} className="flip-button-back">
                    C'est parti !
                  </span>
                </a>
              </div>
              <a href="/devenir-partenaire" style={styles.contactLink} className="contact-link">
                Besoin d'infos ? Contactez-nous...
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  section: {
    padding: "80px 20px",
    backgroundColor: "#ffffff",
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "row",
    gap: "40px",
    alignItems: "flex-start",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  headingContainer: {
    flex: "1 1 400px",
  },
  rightContent: {
    flex: "1 1 400px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  title: {
    fontSize: "42px",
    fontWeight: "900",
    lineHeight: "1.2",
    marginBottom: "20px",
    color: "#000000",
    textAlign: "left",
  },
  highlight: {
    color: "#002366",
  },
  description: {
    fontSize: "18px",
    lineHeight: "1.6",
    marginBottom: "30px",
    color: "#555",
    textAlign: "left",
    maxWidth: "600px",
  },
  actions: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    alignItems: "center",
    flexWrap: "wrap",
  },
  buttonWrapper: {
    display: "inline-block",
    width: "200px",
    height: "48px",
    textDecoration: "none",
    boxShadow: "0 2px 4px rgba(0, 35, 102, 0.2)",
  },
  buttonFront: {
    padding: "12px 24px",
    fontWeight: "600",
    fontSize: "16px",
  },
  buttonBack: {
    padding: "12px 24px",
    fontWeight: "600",
    fontSize: "16px",
  },
  contactLink: {
    color: "#555",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: "500",
    transition: "color 0.3s ease",
  }
};

export default BookingSection;