import { useContext, useEffect, useState } from "react";
import { Global } from "../../js/GlobalSettings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const LanguageToggle = (props) => {
	const { isNavElement } = props;
	const context = useContext(Global);
	const [isHovered, setIsHovered] = useState(false);
	useEffect(() => {
		localStorage.setItem("language", context.language);
	}, [context.language]);
	const english = context.language === "english";
	const arabic = context.language === "arabic";
	const fontTheme =
		context.theme === "dark" ? "text-white-50" : "text-black-50";
	return (
		<div className="position-relative ">
			<div
				className={`${
					context.theme === "dark" ? "text-white-50" : "text-black-50"
				} gap-1 language-toggler 
					${
						isNavElement
							? "language-toggler d-none d-lg-flex align-items-center "
							: ""
					}`}>
				<FontAwesomeIcon
					icon="fa-solid fa-earth-americas"
					onClick={() => {
						setIsHovered(false);
						context.setIsLangMenuClicked(
							context.isLangMenuClicked ? false : true
						);
					}}
					onMouseOver={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				/>
				{isHovered && (
					<div
						style={english ? { right: "30px" } : arabic ? { left: "30px" } : {}}
						className={[
							" position-absolute language-message ",
							" " + context.theme,
						]}>
						{arabic
							? "اللّغة الحالية هي : العربية"
							: "Current language is English"}
					</div>
				)}
				{context.isLangMenuClicked && (
					<div
						style={!isNavElement && arabic ? { left: "-20px" } : {}}
						className={`position-absolute languages-menu ${context.theme}`}>
						<div
							className={`${arabic ? "active" : ""} ${
								context.theme
							} ${fontTheme}`}
							onClick={() => {
								document.querySelector("html").lang = "ar";
								context.setLanguage("arabic");
								context.setIsLangMenuClicked(false);
							}}>
							العربية
						</div>
						<div
							className={`${english ? "active" : ""} ${fontTheme} ${
								context.theme
							}
							`}
							onClick={() => {
								document.querySelector("html").lang = "en";
								context.setLanguage("english");
								context.setIsLangMenuClicked(false);
							}}>
							English
						</div>
					</div>
				)}
			</div>
		</div>
	);
};
export default LanguageToggle;
