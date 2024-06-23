import React, { useEffect, useState } from "react";
import { getResponsive } from "../constants"

import MealCard from "../../../../components/Menu/MealCard";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./categoryStyle.css";

const Category = ({category, slogan, dishes,}) => {
	const [mobileView, setMobileView] = useState(false);

	useEffect(() => {
		if (window.innerWidth < 664) {
			setMobileView(true);
		} else {
			setMobileView(false);
		}
	}, []);

	return (
		<article>
				<div className="container-salad">
					<div className="head-section">
						<h2>{category}</h2>
						{mobileView ? "" : <p>{slogan}</p>}
					</div>
					<Carousel
						swipeable={false}
						draggable={false}
						showDots={true}
						infinite={true}
						autoPlay={mobileView ? true : false}
						autoPlaySpeed={3000}
						keyBoardControl={true}
						customTransition="all .15"
						transitionDuration={100}
						containerClass="carousel-container"
						removeArrowOnDeviceType={["tablet", "mobile"]}
						dotListClass="custom-dot-list-style"
						itemClass="carousel-item-padding-40-px menu-dish"
						responsive={getResponsive()}
					>
						{dishes.map((dish) => (
							<MealCard key={dish.id} meal={dish} />
						))}
					</Carousel>
				</div>
		</article>
	);
};

export default Category;
