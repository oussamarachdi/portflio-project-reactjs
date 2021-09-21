import React from 'react'
import TestimonialsCaroussel from './TestimonialsCaroussel'

const Testimonials = () => {
    return (
        <div className="testimonials">
            <h1>My happy clients</h1>
            <div className="container">
                <div className="testimonials-content">
                    <TestimonialsCaroussel />
                </div>
            </div>
        </div>
    )
}

export default Testimonials
