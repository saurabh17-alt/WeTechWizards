import React from 'react';

//Add CSS
import './ServicesComponent.scss'

export default function ServicesComponent() {
  return (
    <div>
        <section id="services-section">
            <div className="services-container">
                <div className="services-header">
                    <h3>The majority our customers do not understand their workflows.</h3>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

                <div className="services-main">

                    <div className="services-content">
                        <div className="services-item">
                            <div className="services-icon">
                                <i className="fas fa-solid fa-code"></i>
                            </div>
                            <h3>Web Development</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, nostrum excepturi harum modi ullam repudiandae voluptate esse natus iste perferendis eveniet voluptatibus. Veniam ab tempore temporibus exercitationem unde officia ducimus?</p>
                        </div>

                        <div className="services-item">
                            <div className="services-icon">
                                <i className="fa-solid fa-chalkboard"></i>
                            </div>
                            <h3>ML & Artificial Inteligence</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio architecto voluptas accusantium quaerat aut repellat maiores eius neque? Omnis eveniet perferendis nulla molestias placeat perspiciatis! Pariatur veritatis ipsum non odio.</p>
                        </div>

                        <div className="services-item">
                            <div className="services-icon">
                                <i className="fa-solid fa-user-graduate"></i>
                            </div>
                            <h3>Education</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod esse quis debitis voluptate aperiam iusto adipisci ullam. Qui aperiam quasi accusamus sint quibusdam est voluptate aspernatur quia, unde earum error.</p>
                        </div>
                      </div>
                </div>
            </div>
        </section>
    </div>
  )
}
