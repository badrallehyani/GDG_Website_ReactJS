import React from 'react';

function Workshop({ title, description, time, date, iconURL, i }) {
    return (
        <div class="swiper-slide slide-custom">
            <div className={"upper upper" + (i + 1)}></div>
            <img class="workshop-icon" src={iconURL} />
            <div class="text-container">
                <h3>{title}</h3>
                <p>
                    {description}
                </p>
            </div>
            <div class="time-details">
                <div class="time-item">
                    <img class="xx" src="/images/mingcute_time-line.svg" />
                    <p class="time-text">
                        {time}
                    </p>
                </div>
                <div class="time-item">
                    <img class="xx" src="/images/typcn_calendar-outline.svg" />
                    <p class="time-text">
                        {date}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Workshop;