import { FC } from "react";
import {
	Nav,
	Hero,
	PopularProducts,
	SuperQuality,
	Services,
	SpecialOffers,
	CustomerReviews,
	Subscribe,
	Footer,
} from "./components";

const App: FC = () => {
	return (
		<main className="relative">
			<Nav />
			<section className="xl:padding-l wide:padding-r padding-b">
				<Hero />
			</section>
			<section className="padding">
				<PopularProducts />
			</section>
			<section className="padding">
				<SuperQuality />
			</section>
			<section className="padding-x py-10">
				<Services />
			</section>
			<section className="padding">
				<SpecialOffers />
			</section>
			<section className="padding bg-pale-blue">
				<CustomerReviews />
			</section>
			<section className="padding-x sm:py-32 py-16 w-full">
				<Subscribe />
			</section>
			<section className="padding bg-black padding-x padding-t pb-8">
				<Footer />
			</section>
		</main>
	);
};

export default App;
