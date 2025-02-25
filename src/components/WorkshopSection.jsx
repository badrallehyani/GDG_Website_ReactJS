import React from 'react';
import WorkshopsSwiper from './smaller_components/WorkshopsSwiper';
import { getWorkshops } from './helper';

function WorkshopSection() {

	const workshops = getWorkshops();

	return (
		<section class="workshops-section">
			<div>
				<div class="padding-global">
					<div class="container">
						<div class="wrapperd">
							<div class="header-container">
								<h2 class="workshop-title">
									Workshops
								</h2>
								<img class="decorative-underline" src="/images/under.svg" />
							</div>

							<a class="learn-more-link">
								<div class="learn-more-text">
									Learn More
								</div>
								<img class="arrow-icon" src="/images/ei_arrow-right.svg" />
							</a>
						</div>

						<div class="swiper mySwiper ffs">

							<WorkshopsSwiper workshops={workshops} />

						</div>
					</div>
				</div>
			</div>
			{/* </div> */}
		</section>
	)
}

export default WorkshopSection;