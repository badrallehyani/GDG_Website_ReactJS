import React, { useState } from 'react';
import { sendContactUs } from './helper';

function ContactUsForm() {

	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');

	const handleSubmit = () => {
		if (name === '' || email === '' || message === '') {
			alert('Missing data');
		} else {
			sendContactUs(name, email, message);
			alert('Thank you for your message!');
		}
	}

	return (
		<section className="contactus-section">
			<div className="padding-global-contactus">
				<div className="image-container">
					<img src="images/Frame.svg" alt="Descriptive text" className="positioned-image" />
				</div>
				<div className="header-container">
					<h2 className="contactus-title">Contact Us</h2>
					<img className="yellow-decorative-underline" src="./images/yellow-undeline.svg" />
				</div>
				<div className="contactus-body">
					{/* Left side (illustration) */}
					<div className="contact-left">
						<img src="images/Screenshot_31-removebg-preview 1.svg" alt="Contact Illustration" className="contact-image" />
					</div>

					{/* Right side (form) */}
					<div className="contact-right">
						<form className="contact-form" onSubmit={(e) => e.preventDefault()}>
							<input onChange={(e) => setName(e.target.value)} id="name" type="text" placeholder="Name" />
							<input onChange={(e) => setEmail(e.target.value)} id="email" type="email" placeholder="Email" />
							<textarea onChange={(e) => setMessage(e.target.value)} id="message" placeholder="Message"></textarea>
							<button type="submit" onClick={handleSubmit}>Submit</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ContactUsForm;

