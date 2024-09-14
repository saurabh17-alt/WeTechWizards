import React from 'react';

// Add SCSS
import './AboutComponent.scss';

// Adding Images
import aboutImage from "../../../assets/img/about.png";

export default function AboutComponent() {
  return (
    <div>
        <section id="about-section">
            <div className="about-container">

                <div className="flex-box">
                    <div className="left scroll-left">
                        <img src={aboutImage} alt="About" />
                    </div>
                    <div className="right scroll-right">
                        {/* <h3 className="title">About Us</h3> */}
                        <p> <span style={{ fontSize: '26px', color: '#7B68EE'}}>At <b>WeTechWizards</b></span> , we are a dynamic IT service and product-based company dedicated to delivering cutting-edge solutions that empower businesses to thrive in the digital age. Our team of experienced professionals specializes in web development, AI & ML, and tailored IT solutions that align with your unique needs. We pride ourselves on innovation, quality, and customer-centricity, ensuring that each project we undertake drives tangible results and enhances your competitive edge.</p>
                        <br />
                    </div>
                </div>

                <div className="flex-box flex-row-reverse">
                    <div className="left scroll-right">
                        <img src={aboutImage} alt="About" />
                    </div>
                    <div className="right scroll-left">
                        <p>Founded with a vision to transform how businesses leverage technology, we have continuously evolved to meet the growing demands of the industry. Our portfolio spans across a diverse range of industries, and our commitment to excellence is reflected in our long-standing client relationships. Whether you're looking to develop a robust online presence or implement advanced IT solutions, <b style={{color: '#7B68EE'}}>WeTechWizards</b> is here to help you navigate the complexities of technology with confidence and success.</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}
