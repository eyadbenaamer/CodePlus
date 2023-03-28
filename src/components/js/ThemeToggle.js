import { useContext, useEffect, useState } from "react";
import { Global } from "../../js/GlobalSettings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ThemeToggle = (props) => {
	const { isNavElement } = props;
	const context = useContext(Global);
	const [isHovered, setIsHovered] = useState(false);
	const english = context.language === "english";
	const arabic = context.language === "arabic";
	useEffect(() => {
		localStorage.setItem("theme", context.theme);
	}, [context.theme]);
	return (
		<div className="position-relative">
			<div
				className={`${context.theme === "light" ? "text-black-50" : ""} ${
					context.theme
				}
					${isNavElement ? " d-none d-lg-flex " : ""} theme-toggler`}
				onMouseOver={() => {
					setIsHovered(true);
				}}
				onMouseLeave={() => setIsHovered(false)}
				onClick={() => {
					context.setTheme(context.theme === "dark" ? "light" : "dark");
				}}>
				<FontAwesomeIcon icon="fa fa-moon" />
			</div>
			{isHovered && (
				<div
					style={english ? { right: "30px" } : arabic ? { left: "35px" } : {}}
					className={["theme-message position-absolute ", " " + context.theme]}>
					{english ? "Dark mode is:" : "الوضع المظلم:"}{" "}
					<span className={context.theme}>
						{english
							? context.theme === "dark"
								? "on"
								: "off"
							: context.theme === "dark"
							? "مُفعّل"
							: "غير مُفعّل"}
					</span>
				</div>
			)}
		</div>
	);
};
export default ThemeToggle;
