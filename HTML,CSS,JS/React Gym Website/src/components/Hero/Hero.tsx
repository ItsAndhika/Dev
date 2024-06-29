import { FC } from "react";
import "./Hero.css";
import Header from "../Header/Header";
import HeroImage from "/images/hero_image.png";
import HeroImageBack from "/images/hero_image_back.png";
import Heart from "/images/heart.png";
import Calories from "/images/calories.png";

const Hero: FC = () => {
	return (
		<section className="hero">
			<div className="left-hero">
				<Header />
				<div className="the-best-ad">
					<div></div>
					<span>the best fitness club in the town</span>
				</div>
				<div className="hero-text">
					<div>
						<span className="stroke-text">shape </span>
						<span>your</span>
					</div>
					<div>
						<span>ideal body</span>
					</div>
					<div>
						<span>
							in here we will help you to shape and build your ideal body and
							live up your life to fullest
						</span>
					</div>
				</div>
				<div className="figures">
					<div>
						<span>+140</span>
						<span>expert coachs</span>
					</div>
					<div>
						<span>+978</span>
						<span>members joined</span>
					</div>
					<div>
						<span>+50</span>
						<span>fitness programs</span>
					</div>
				</div>
				<div className="hero-buttons">
					<button className="btn">Get Started</button>
					<button className="btn">Learn More</button>
				</div>
			</div>
			<div className="right-hero">
				<button className="btn">Join Now</button>
				<div className="heart-rate">
					<img src={Heart} alt="" />
					<span>Heart Rate</span>
					<span>116 bpm</span>
				</div>
				<img src={HeroImage} alt="" className="hero-image" />
				<img src={HeroImageBack} alt="" className="hero-image-back" />
				<div className="calories">
					<img src={Calories} alt="" />
					<div>
						<span>Calories Burned</span>
						<span>220 kcal</span>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
