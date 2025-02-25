import React, { useState } from "react";
import { getDepartments } from "./helper";

function DepartmentSection() {
	const [activeButtonIndex, setActiveButtonIndex] = useState(0);
	
	const changeActive = (e) => {
		const id = e.target.id;
		setActiveButtonIndex(id)
		setCurrentDepartment(departments[id]);
	}

	const departments = getDepartments();
	const [currentDepartment, setCurrentDepartment] = useState(departments[0]);

	return (
		<section class="tab-section">
			<div class="department-background"></div>
			<div class="padding-global relative">
				<div class="container">
					<div class="wrapperd">
						<div class="header-container">
							<h2 class="department-title">
								Departments
							</h2>
							<img class="decorative-underline" src="/images/ssa.svg" />
						</div>
					</div>
					<div class="departments-grid">
						<div class="stacker">
							<div class="stack-item active">
								<div>
									<h3 class="summary-title-large">
										{currentDepartment.titleLarge}
									</h3>
									<p>
										{currentDepartment.paragraph}
									</p>
								</div>
								<div>
									<h3 class="summary-title-small">
										{currentDepartment.titleSmall}
									</h3>
									<ul>

										{
											currentDepartment.items.map(item=>
												<li>{item}</li>
											)
										}

									</ul>
								</div>
							</div>
						</div>
						<div class="tab-buttons-container">
							{
								departments.map((department, i)=>
									<button 
									onClick={changeActive} 
									id={i} 
									className={"tab-but " + (activeButtonIndex == i ? "active-but" : "")}>
									{department.name}
								</button>
								)
							}
						</div>
					</div>
				</div>
			</div>
		</section>

	)
}

export default DepartmentSection