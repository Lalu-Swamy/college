import React from 'react'

export const Hero = () => {
  return (
    <div>
        <section className="banner-area bg-1 jarallax" data-jarallax='{"speed": 0.3}'>
			<div className="d-table">
				<div className="d-table-cell">
					<div className="container">
						<div className="row">
							<div className="col-lg-6">
								<div className="banner-content">
									<span>Welcome to Placement Cell</span>
									<h1>Catering to the Educational Needs of Gifted Rural Youth</h1>

									<div className="banner-btn">
										<a href="/" className="default-btn">
											RGUKT-Ongole
											<i className="ri-arrow-right-line"></i>
										</a>
									</div>

								</div>
							</div>

							<div className="col-lg-6">
								<div className="banner-img">
									<img src="assets/images/banner/banner-img-1.jpg" alt=""/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    </div>
  )
}
