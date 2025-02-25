import React from 'react';
import { getPortfolios } from './helper';

function PortfoliosSection(){

	const portfoliosSectionData = getPortfolios();

	return (
		<section class="portofolios-section">
			<div>
				<div class="padding-global-portofolios">
					<div class="container-portofolios">
						<div class="portfolios-flex-container">
							{/* <!-- Left side --> */}
							<div class="portfolios-left">
								<div class="header-container">
									<h2 class="portofolios-title">
										Portofolios
									</h2>
									<img class="yellow-decorative-underline" src="/images/yellow-undeline.svg"/>
								</div>
								<div class="portfolios-body">
									<div class="portfolios">

										{
											portfoliosSectionData.map((item, index) => {
												return (
													<div class="card">
														<div class="avatar">
															<img src={item.avatar} alt="avatar"/>
														</div>
														<div class="name">{item.name}</div>
														<div class="role">{item.role}</div>
													</div>
												)
											})
										}
										
									</div>
									<a href="#" class="view-button">
										View Portfolios
										<img src="images/ei_arrow-right.svg" alt="arrow"/>
									</a>
								</div>
							</div>

							{/* <!-- Right side --> */}
							<div class="portfolios-right">
								<div class="image-wrapper">
									<img src="images/Group 37325.svg" alt="Portfolio image"/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default PortfoliosSection;
