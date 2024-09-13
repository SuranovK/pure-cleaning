import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h6 className='still-unsure'>Still Unsure?</h6>
        <h2>See What People Say About Us!</h2>
        <blockquote>
          <header>Nancy</header>
          "Pure Cleaning did an excellent job at our office!"
          <footer>- John Doe, CEO of XYZ Corp</footer>
        </blockquote>
        {/* More testimonials */}
      </div>
    </section>
  );
};

export default Testimonials;
