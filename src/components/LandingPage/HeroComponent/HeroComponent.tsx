import React, {useEffect} from 'react';

// Add SCSS
import './HeroComponent.scss'

export default function HeroComponent() {
  // const ScrollAnimation = () => {
    useEffect(() => {
      const scrollElements = document.querySelectorAll('.scroll-element');

      const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
          elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
      };

      const handleScroll = () => {
        scrollElements.forEach((el) => {
          if (elementInView(el)) {
            el.classList.add('in-view');
          } else {
            el.classList.remove('in-view');
          }
        });
      };

      window.addEventListener('scroll', handleScroll);

      // Clean up the event listener on component unmount
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  // }

  // this.ScrollAnimation();

  return (
    <div>
      <div id="home" className="hero-section scroll-element">
        <div className="hero-content">
          <h1 className="hero-title">Innovating Technology, Empowering Your Business.</h1>
          <p className="hero-subtitle">Empowering businesses with cutting-edge technology solutions in web development, AI & ML, and innovative IT products.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </div>
    </div>
  )
}
