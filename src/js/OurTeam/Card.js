import { Global } from "../GlobalSettings";

import { useContext } from "react";
const Card = (props) => {
	const { name, title, img, skills } = props;
	const context = useContext(Global);
	const fontTheme =
		context.theme === "dark" ? "text-white-50" : "text-black-50";
	return (
		<div className="card  mx-2">
			<div className="img">
				<img src={img} alt={name} className="img-fluid" />
			</div>
			<div className="lower pb-3">
				<div className="bio my-3">
					<h2 className={context.theme}>{name}</h2>
					<span className={fontTheme}>{title}</span>
				</div>
				<div className="fs-5">
					{context.language === "english"
						? "Skills "
						: context.language === "arabic"
						? "المهارات"
						: ""}{" "}
					:
				</div>
				<div className="skills-container d-flex flex-wrap my-2">
					{skills.map((skill) => (
						<span className={"skill " + context.theme}>{skill}</span>
					))}
				</div>
			</div>
		</div>
	);
};
export default Card;
