// src/components/Appointment.js
import React from 'react';
import './AppointmentForm.css'; // Use a separate CSS file to style the Appointment section

const Appointment = () => {
    return (
        <section id="appointment" className="appointment-section">
            <div className="container">
                <h2>Book An Appointment</h2>
                <form>
                    <div className="form-group">
                        <label for="name">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                    </div>
                    <div className="form-group">
                        <label for="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                    </div>
                    <div className="form-group">
                        <label for="message">Message</label>
                        <textarea className="form-control" id="message" rows="3"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
}

export default Appointment;
