import React from 'react';

// Function to scroll to the top START
function scrollToTheTop() {
  // Scroll the window to the top (Y coordinate 0)
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}
// Function to scroll to the top END

const scrollTopBtn = document.querySelector(".scroll-top-btn ul");

if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', function(event) {
    scrollToTheTop();
  });
}

export const Footer = () => {
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