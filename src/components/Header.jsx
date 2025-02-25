import React from 'react';

function Header() {
	return (
		<>
			<header class="header">
				<div class="header-content">
					<div class="text-content">
						<h1>
							<span class="google">Google </span>
							<span class="developer-group">
								Developer <span class="groups">Groups</span>
							</span>
						</h1>
						<h2>King Abdulaziz University ➶ 62 Members</h2>
						<p> </p>
						<h22>Welcome to GDG, your gateway to innovation, </h22> <br />
						<h22>exploration, and growth in the world of technology!</h22>
						<div class="buttons">
							<button class="btn-primary">Join Us</button>
							<button class="btn-secondary">View Workshops</button>
						</div>
					</div>
					<img src="/images/ship.PNG" alt="Illustration" class="main-image" />
				</div>
			</header>


			<div class="header-footer">
				<img src="/images/circles.PNG" alt="Footer Illustration"/>
			</div>



		</>
	);
};

export default Header;
