import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Global } from "./../GlobalSettings";

const Card = (props) => {
	const { className, title, description, icon } = props;
	const context = useContext(Global);
	const fontTheme =
		context.theme === "dark" ? "text-white-50" : "text-black-50";
	return (
		<div className={`${className} card text-center mx-2`}>
			<h3 className={`title`}>{title}</h3>

			<div className={fontTheme}>
				<FontAwesomeIcon icon={icon} />
			</div>
			<p className={`my-2 ${fontTheme}`}>{description}</p>
		</div>
	);
};
export default Card;
