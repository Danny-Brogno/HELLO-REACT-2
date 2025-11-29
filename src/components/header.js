import React from 'react';

function navbarOnScroll() {
  // When the user scrolls down 20px from the top of the document, slide down the navbar
  window.onscroll = function() {
    scrollFunction()
  };
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
  }
}

navbarOnScroll();

export const Header = () => {
  return (
    <header>
      <div id="navbar">
        <a href="index.html">Home</a>
        <a href="about-us.html">About us</a>
        <a href="features.html">Features</a>
        <a href="pricing.html">Pricing</a>
        <a href="contact.html">Contacts</a>
      </div>
    </header>
  )
}