import React, { useState, useEffect } from 'react';

// Add CSS 
import './ReviewsComponent.scss'

export default function ReviewsComponent() {
    const reviews = [
        {
            text: "This service was absolutely amazing! Highly recommended.",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit mollitia unde ut, aspernatur nulla expedita doloribus porro dolorem doloremque cupiditate soluta, quidem tenetur. Aut similique ipsam maiores officiis? Nam, maiores?",
            author: "John Doe",
            image: "https://via.placeholder.com/50" // Optional profile image
        },
        {
            text: "Very professional and prompt. I am very satisfied.",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit mollitia unde ut, aspernatur nulla expedita doloribus porro dolorem doloremque cupiditate soluta, quidem tenetur. Aut similique ipsam maiores officiis? Nam, maiores?",
            author: "Jane Smith",
            image: "https://via.placeholder.com/50"
        },
        {
            text: "Excellent support and great value for money.",
            desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit mollitia unde ut, aspernatur nulla expedita doloribus porro dolorem doloremque cupiditate soluta, quidem tenetur. Aut similique ipsam maiores officiis? Nam, maiores?",
            author: "Michael Lee",
            image: "https://via.placeholder.com/50"
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? reviews.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === reviews.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    };

    useEffect(() => {
        const autoScroll = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(autoScroll); // Cleanup on unmount
    }, [currentIndex]);

    return (
        <div>
            <section id="reviews">
                <div className="reviews-container">
                    <div className="reviews-header">
                        <h2>From Our Customer</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis magnam assumenda nobis non corporis, dolores rerum et. Maxime quam consequatur assumenda ducimus illum dicta saepe adipisci quibusdam distinctio harum? Ducimus.</p>
                    </div>

                    <div className="reviews-main">
                        <div className="carousel">
                            <div
                                className="carousel-inner"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {reviews.map((review, index) => (
                                    <div key={index} className="carousel-slide">
                                        <p className="review-text">"{review.text}"</p>
                                        <div className="review-desc">{review.desc}</div>
                                        <h4 className="review-author">- {review.author}</h4>
                                        {review.image && (
                                            <img src={review.image} alt={review.author} className="review-image" />
                                        )}
                                    </div>
                                ))}
                            </div>
                            <button onClick={prevSlide} className="carousel-button prev">❮</button>
                            <button onClick={nextSlide} className="carousel-button next">❯</button>
                            <div className="carousel-dots">
                                {reviews.map((_, index) => (
                                    <div
                                        key={index}
                                        className={`dot ${currentIndex === index ? 'active' : ''}`}
                                        onClick={() => goToSlide(index)}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
