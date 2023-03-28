import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Courses } from "./Courses/Courses";
import { Home } from "./Home/Home";
import Leaderboard from "./Leaderboard/Leaderboard";
import NotFound from "./NotFound";
import OurTeam from "./OurTeam/OurTeam";
import WhyCodePlus from "./WhyCodePlus/WhyCodePlus";
import Footer from "../components/js/Footer";
import ScrollToTop from "./ScrollToTop.js";
import { useContext } from "react";
import { Global } from "./GlobalSettings";
import ItemDetails from "./Leaderboard/ItemDetails";
import Navigation from "../components/js/Navigation";
const Page = () => {
	const context = useContext(Global);
	document.body.className = context.theme;
	return (
		<div
			className={context.theme}
			onClick={(element) => {
				if (
					(context.windowWidth > 992 && element.screenY > 155) ||
					(context.windowWidth <= 992 && element.target.offsetTop > 20)
				) {
					if (context.isMenuClicked) {
						context.setIsMenuClicked(false);
					}
					if (context.isLangMenuClicked) {
						context.setIsLangMenuClicked(false);
					}
				}
			}}>
			<BrowserRouter>
				<Navigation />
				<Routes>
					<Route path="/" element={<Home />} />

					<Route path="/Our-Team" element={<OurTeam />} />
					<Route path="/Courses" element={<Courses />} />
					<Route path="/Leaderboard/" element={<Leaderboard />} />
					<Route path="/Leaderboard/:id" element={<ItemDetails />} />
					<Route path="/Why-Code-Plus" element={<WhyCodePlus />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</BrowserRouter>
			<ScrollToTop />
		</div>
	);
};
export default Page;
