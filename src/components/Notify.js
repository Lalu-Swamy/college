import React from 'react'

export const Notify = () => {
  return (
    <div>
        {/* <!-- Start Events Area --> */}
		<section class="events-area bg-color ptb-100">
			<div class="container">
				<div class="row align-items-center">
					<div class="col-lg-7">
						<div class="events-content mr-15">
							<span>Events</span>
							<h2>Upcoming events</h2>

							<ul class="events-list">
								<li>
									<div class="events-date">
										<span class="mb-2">01 May</span>
										<span>2021</span>
									</div>

									<span>Conference</span>
									<h3>
										<a href="event-details.html">
											Universities admission conference 2021
										</a>
									</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

									<a href="event-details.html" class="read-more">
										Find out more
										<i class="ri-arrow-right-line"></i>
									</a>
								</li>
								<li>
									<div class="events-date">
										<span class="mb-2">05 May</span>
										<span>2023</span>
									</div>

									<span>Kya matalab hona chahiye</span>
									<h3>
										<a href="event-details.html">
											History and culture open day conference 2021
										</a>
									</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

									<a href="event-details.html" class="read-more">
										Find out more
										<i class="ri-arrow-right-line"></i>
									</a>
								</li>
								<li>
									<div class="events-date">
										<span class="mb-2">02 May</span>
										<span>2021</span>
									</div>

									<span>Conference</span>
									<h3>
										<a href="event-details.html">
											History and culture open day conference 2021
										</a>
									</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

									<a href="event-details.html" class="read-more">
										Find out more
										<i class="ri-arrow-right-line"></i>
									</a>
								</li>
								<li>
									<div class="events-date">
										<span class="mb-2">12 jan</span>
										<span>2023</span>
									</div>

									<span>nocomments</span>
									<h3>
										<a href="event-details.html">
											History and culture open day conference 2021
										</a>
									</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

									<a href="event-details.html" class="read-more">
										Find out more
										<i class="ri-arrow-right-line"></i>
									</a>
								</li>

								<li>
									<div class="events-date">
										<span class="mb-2">03 May</span>
										<span>2021</span>
									</div>

									<span>Conference</span>
									<h3>
										<a href="event-details.html">
											Undergraduate and postgraduate open days 2021
										</a>
									</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

									<a href="event-details.html" class="read-more">
										Find out more
										<i class="ri-arrow-right-line"></i>
									</a>
								</li>
							</ul>
						</div>
					</div>

					<div class="col-lg-5">
						<div class="events-timer ml-15">
							<div class="event-img">
                                <img src="assets/images/event-img.jpg" alt=""/>
                            </div>

                            <span>Next Event</span>
                            
                            <div id="timer">
                                <div id="days"></div>
                                <div id="hours"></div>
                                <div id="minutes"></div>
                                <div id="seconds"></div>
                            </div>

                            <a href="application.html" class="default-btn">
                                Book now
                                <i class="ri-arrow-right-line"></i>
                            </a>
                        </div>
					</div>
				</div>
			</div>
		</section>
		{/* <!-- End Events Area --> */}
    </div>
  )
}
