import { Link } from "react-router-dom";
import { useContext } from "react";
import { Global } from "../GlobalSettings";
import Trophy from "./Trophy";
import geek from "../../imgs/geek.png";
import perfect from "../../imgs/perfect.png";
import hacker from "../../imgs/hacker.png";
import passionate from "../../imgs/passionate.png";
const Item = (props) => {
	const { rank, img, name, points, trophies, id } = props;
	const context = useContext(Global);
	const english = context.language === "english";
	const arabic = context.language === "arabic";
	const icons = {
		geek: {
			name: english ? "geek" : arabic ? "مهووس" : "",
			icon: geek,
		},
		passionate: {
			name: english ? "passionate" : arabic ? "شغوف" : "",
			icon: passionate,
		},
		hacker: {
			name: english ? "hacker" : arabic ? "هاكر" : "",
			icon: hacker,
		},
		perfect: {
			name: english ? "perfect" : arabic ? "مثاليّ" : "",
			icon: perfect,
		},
	};

	if (rank > 3) {
		return (
			<div>
				<Link
					onClick={() => {
						window.scrollTo({ top: 0, behavior: "instant" });
					}}
					to={`/Leaderboard/${id}`}>
					<div
						className={`item d-flex  gap-md-4 px-sm-3 justify-content-around align-items-center  ${
							context.theme === "dark" ? "text-light" : "text-dark"
						} ${context.theme}`}>
						<div className="img-container">
							<img src={img} alt={name} className={context.theme} />
						</div>
						<div className="rank fs-6 ">#{rank}</div>
						<div className="name fs-6 text-md-start text-center flex-md-grow-0 flex-1">
							{name}
						</div>
						<div className="d-flex justify-content-center align-items-center trophies gap-1">
							{trophies.map((trophy) => {
								return (
									<div className="position-relative">
										<Trophy
											trophy={icons[trophy].name}
											src={icons[trophy].icon}
										/>
									</div>
								);
							})}
						</div>
						<div className="points fs-5	">{points}</div>
					</div>
				</Link>
			</div>
		);
	}
};
export default Item;
