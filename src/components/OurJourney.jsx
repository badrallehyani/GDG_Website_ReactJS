import React from 'react';

function OurJourney() {
	return (
		<section className="our-journey">
			<h2>Our Journey</h2>
			<p>
				Fostering a vibrant community of tech enthusiasts, providing hands-on workshops to fuel innovation. We host
				engaging events and competitions to challenge creativity and showcase talent. Together, we grow, explore, and
				shape the future of technology.
			</p>
			<div className="gallery">
				<div className="circle">
					<img src="/images/image (7).png" alt="" />
				</div>
				<div className="circle">
					<img src="/images/image 19 (1).png" alt="" />
				</div>
				<div className="circle">
					<img src="/images/image 20 (1).png" alt="" />
				</div>
			</div>
			<button className="btn-gallery">View Gallery</button>
		</section>
	);
}

export default OurJourney;
