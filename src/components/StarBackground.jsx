import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);
  const [clouds, setClouds] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check if dark mode is active
    const checkDarkMode = () => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    };

    checkDarkMode();
    
    // Listen for theme changes
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    generateStars();
    generateMeteors();
    generateClouds();

    const handleResize = () => {
      generateStars();
      generateMeteors();
      generateClouds();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      observer.disconnect();
    };
  }, []);

  const generateStars = () => {
    const numberOfStars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );

    const newStars = [];

    for (let i = 0; i < numberOfStars; i++) {
      newStars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 4;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
      newMeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 20,
        delay: Math.random() * 0,
        animationDuration: Math.random() * 3 + 3,
      });
    }

    setMeteors(newMeteors);
  };

  const generateClouds = () => {
    const numberOfClouds = 6;
    const newClouds = [];

    for (let i = 0; i < numberOfClouds; i++) {
      newClouds.push({
        id: i,
        size: Math.random() * 120 + 80,
        x: Math.random() * 120 - 10,
        y: Math.random() * 60 + 10,
        opacity: Math.random() * 0.4 + 0.3,
        animationDuration: Math.random() * 40 + 30,
        delay: Math.random() * 10,
        type: Math.random() > 0.5 ? 'fluffy' : 'wispy',
      });
    }

    setClouds(newClouds);
  };

  if (!isDarkMode) {
    // Light Mode: Sunny Day Theme
    return (
      <>
        {/* Sunny Sky Background */}
        <div 
          className="fixed inset-0 pointer-events-none z-0"
          style={{
            background: `linear-gradient(180deg, 
              #87ceeb 0%,
              #98d8e8 25%,
              #b8e6f0 50%,
              #d0f2fd 75%,
              #e8f8ff 100%
            )`
          }}
        />
        
        {/* Sun */}
        <div 
          className="fixed pointer-events-none z-0"
          style={{
            top: '10%',
            right: '15%',
            width: '120px',
            height: '120px'
          }}
        >
          <div 
            className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full"
            style={{
              background: 'radial-gradient(circle, #ffeb3b 0%, #ff9800 70%, #f57f17 100%)',
              transform: 'translate(-50%, -50%)',
              animation: 'sun-pulse 4s ease-in-out infinite',
              boxShadow: `
                0 0 20px rgba(255, 235, 59, 0.8),
                0 0 40px rgba(255, 235, 59, 0.6),
                0 0 60px rgba(255, 235, 59, 0.4)
              `
            }}
          />
          <div 
            className="absolute inset-0"
            style={{
              animation: 'sun-rotate 20s linear infinite'
            }}
          >
            {[...Array(12)].map((_, i) => (
              <div 
                key={i} 
                className="absolute bg-yellow-300"
                style={{
                  width: '3px',
                  height: '15px',
                  borderRadius: '2px',
                  top: '5px',
                  left: '50%',
                  transformOrigin: '50% 55px',
                  opacity: 0.7,
                  animation: 'sun-ray 3s ease-in-out infinite',
                  transform: `translate(-50%, 0) rotate(${i * 30}deg)`
                }}
              />
            ))}
          </div>
        </div>

        {/* Clouds */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          {clouds.map((cloud) => (
            <div
              key={`cloud-${cloud.id}`}
              className="absolute pointer-events-none"
              style={{
                width: cloud.size + "px",
                height: cloud.size * 0.6 + "px",
                left: cloud.x + "%",
                top: cloud.y + "%",
                opacity: cloud.opacity,
                animation: `cloud-drift ${cloud.animationDuration}s ease-in-out infinite ${cloud.delay}s`,
                background: cloud.type === 'fluffy' 
                  ? 'radial-gradient(ellipse 100% 60%, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.7) 50%, transparent 100%)'
                  : 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.6) 20%, rgba(255, 255, 255, 0.8) 50%, rgba(255, 255, 255, 0.6) 80%, transparent 100%)',
                borderRadius: cloud.type === 'fluffy' ? '50px' : '30px',
                filter: cloud.type === 'fluffy' ? 'blur(1px)' : 'blur(2px)',
                boxShadow: cloud.type === 'fluffy' ? '0 5px 15px rgba(255, 255, 255, 0.3)' : 'none'
              }}
            />
          ))}
        </div>

        <style jsx>{`
          @keyframes sun-rotate {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          
          @keyframes sun-pulse {
            0%, 100% { transform: scale(1); opacity: 0.9; }
            50% { transform: scale(1.05); opacity: 1; }
          }
          
          @keyframes cloud-drift {
            0% { transform: translateX(-20px); }
            50% { transform: translateX(20px); }
            100% { transform: translateX(-20px); }
          }
          
          @keyframes sun-ray {
            0%, 100% { opacity: 0.6; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.1); }
          }
        `}</style>
      </>
    );
  }

  // Dark Mode: Original Simple Theme (SAMA SEPERTI KODE AWAL)
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: star.size + "px",
            height: star.size + "px",
            left: star.x + "%",
            top: star.y + "%",
            opacity: star.opacity,
            animationDuration: star.animationDuration + "s",
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={meteor.id}
          className="meteor animate-meteor"
          style={{
            width: meteor.size * 50 + "px",
            height: meteor.size * 2 + "px",
            left: meteor.x + "%",
            top: meteor.y + "%",
            animationDelay: meteor.delay + "s",
            animationDuration: meteor.animationDuration + "s",
          }}
        />
      ))}
    </div>
  );
};