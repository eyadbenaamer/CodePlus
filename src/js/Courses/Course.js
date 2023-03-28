import { Global } from "../GlobalSettings";
import { useContext } from "react";
const Course = (props) => {
	const { img, title, language, startsIn, endsIn } = props;
	const context = useContext(Global);
	const english = context.language === "english";
	const arabic = context.language === "arabic";
	const monthInArabic = {
		jan: "يناير",
		feb: "فبراير",
		mar: "مارس",
		apr: "أبريل",
		may: "مايو",
		jun: "يونيو",
		jul: "يوليو",
		aug: "أغسطس",
		sep: "سبتمبر",
		oct: "أكتوبر",
		nov: "نوفمبر",
		dec: "ديسمبر",
	};
	return (
		<div className="card mx-1">
			<img src={img} alt={title} className="img-fluid" />
			<div className={"details " + context.theme}>
				<a href="/">
					<h3 className={`text-capitalize `} dir="ltr">
						{title}
					</h3>
				</a>
				<span className="text-capitalize " dir="ltr">
					{language}
				</span>
				<div className="date mt-4">
					<span
						className={`${english ? "me-2" : arabic ? "ms-2" : ""} ${
							context.theme
						}`}>
						{english ? "from" : arabic ? "من" : ""}
					</span>
					{english
						? `${startsIn.day} ${startsIn.month}, ${startsIn.year}`
						: arabic
						? `${startsIn.day} ${monthInArabic[startsIn.month]}، ${
								startsIn.year
						  }`
						: ""}
					<span className={`mx-2 ${context.theme}`}>
						{english ? "to" : arabic ? "إلى" : ""}
					</span>
					{english
						? `${endsIn.day} ${endsIn.month}, ${endsIn.year}`
						: arabic
						? `${endsIn.day} ${monthInArabic[endsIn.month]}، ${endsIn.year}`
						: ""}
				</div>
			</div>
		</div>
	);
};
export default Course;
