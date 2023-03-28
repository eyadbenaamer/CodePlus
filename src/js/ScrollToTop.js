import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Global } from "./GlobalSettings";
const ScrollToTop = () => {
	window.addEventListener("scroll", () => {
		let toTop = document.querySelector(".toTop");
		if (window.scrollY >= 200 && window.scrollY <= 400) {
			toTop.style.bottom = `${(window.scrollY - 200) * 0.25}px`;
		} else if (window.scrollY <= 200) {
			toTop.style.bottom = `${(window.scrollY - 200) * 0.5}px`;
		} else if (window.scrollY >= 250) {
			toTop.style.bottom = `50px`;
		}
	});
	const context = useContext(Global);
	const english = context.language === "english";
	const arabic = context.language === "arabic";
	return (
		<div onClick={() => window.scrollTo({ top: 0 })}>
			<FontAwesomeIcon
				className="toTop"
				icon="fa fa-arrow-alt-circle-up"
				style={english ? { right: "5%" } : arabic ? { left: "5%" } : ""}
			/>
		</div>
	);
};
export default ScrollToTop;
