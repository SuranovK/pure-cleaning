import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2>Contact Us</h2>
        <p>Email: contact@purecleaning.com</p>
        <p>Phone: (314) 619-8819</p>
        <form>
          <div className="form-group">
            <label for="name">Name</label>
            <input type="text" className="form-control" id="name" />
          </div>
          <div className="form-group">
            <label for="email">Email</label>
            <input type="email" className="form-control" id="email" />
          </div>
          <div className="form-group">
            <label for="message">Message</label>
            <textarea className="form-control" id="message"></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
