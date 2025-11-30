import React, { useEffect } from 'react';

// Function to scroll to the top START
function scrollToTheTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
// Function to scroll to the top END

export const Footer = () => {
  
  // useEffect Hook runs DOM code AFTER render
  useEffect(() => {
    // 1. Get the element (now that it's rendered)
    const scrollTopBtn = document.querySelector(".scroll-top-btn ul");
    
    // 2. Define the handler function
    const handleClick = () => {
      scrollToTheTop();
    };

    // 3. Attach the event listener
    if (scrollTopBtn) {
      scrollTopBtn.addEventListener('click', handleClick);
    }

    // 4. Cleanup function: Runs when the component is unmounted
    return () => {
      if (scrollTopBtn) {
        // Remove the listener to prevent memory leaks and unexpected behavior
        scrollTopBtn.removeEventListener('click', handleClick);
      }
    };
  }, []);

  return (
    <footer>
      <section>
        
        <div className="top-footer">
          <h3>
            &copy;Danny Brogno. All rights reserved.
          </h3>
        </div>
        
        <div className="middle-footer">
          <ul>
            <li className="gone">
              <a href="home.html">Home</a>
            </li>
            <li className="gone">
              <a href="about-me.html">About me</a>
            </li>
            <li className="gone">
              <a href="gallery.html">Gallery</a>
            </li>
            <li className="gone">
              <a href="work-experience.html">Work experience</a>
            </li>
            <li className="gone">
              <a href="contact-me.html">Contact me</a>
            </li>
            
          </ul>
        </div>
        
        <div className="bottom-footer">
          
          <span>
            <a href="https://www.facebook.com/danny.brogno/" target="_blank">
              <i className="fa-brands fa-square-facebook"></i>
            </a>
          </span>
          
          <span>
            <a href="https://www.instagram.com/danny__shark/" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </span>
          
          <span>
            <a href="https://www.linkedin.com/in/danny-b-713745213" target="_blank">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </span>
          
          <span>
            <a href="https://x.com/" target="_blank">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </span>
          
          <span>
            <a href="https://www.tiktok.com/en/" target="_blank">
              <i className="fa-brands fa-tiktok"></i>
            </a>
          </span>
        </div>
        
        <div id="signature">
          <ul>
            <li>D</li>
            <li>a</li>
            <li>n</li>
            <li>n</li>
            <li>
              <h2>Y</h2>
            </li>
          </ul>
          
        </div>
        
        <div className="scroll-top-btn">
          
          <ul>
            <li>
              UP
            </li>
          </ul>
          
        </div>
        
      </section>
      
    </footer>
  )
}