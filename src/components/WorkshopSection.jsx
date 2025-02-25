import React from 'react';
import WorkshopsSwiper from './smaller_components/WorkshopsSwiper';

function WorkshopSection() {

	const workshops = [
		{
			title: 'Flutter Mastery',
			description: 'Learning the basics of app development and fast paced components.',
			time: '3pm',
			date: '7th of January',
			iconURL: "/images/jj.svg"
		},
		{
			title: 'Flutter Mastery',
			description: 'Learning the basics of app development and fast paced components.',
			time: '3pm',
			date: '7th of January',
			iconURL: "/images/react.svg"
		},
		{
			title: 'Flutter Mastery',
			description: 'Learning the basics of app development and fast paced components.',
			time: '3pm',
			date: '7th of January',
			iconURL: "/images/git.svg"
		},
		{
			title: 'Flutter Mastery',
			description: 'Learning the basics of app development and fast paced components.',
			time: '3pm',
			date: '7th of January',
			iconURL: "/images/jj.svg"
		},
		{
			title: 'Flutter Mastery',
			description: 'Learning the basics of app development and fast paced components.',
			time: '3pm',
			date: '7th of January',
			iconURL: "/images/git.svg"
		},
	]

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