import type { NextPage } from "next";
import Footer from "../components/Footer";
import Terminal from "../components/Terminal";

const Home: NextPage = () => {
	return (
		<div>
			<Terminal />
			<Footer />
		</div>
	);
};

export default Home;
