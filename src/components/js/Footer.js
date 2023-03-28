import "../css/Footer.css";
import logo from "../../imgs/logo-alt.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Global } from "../../js/GlobalSettings";
import { Link } from "react-router-dom";

const Footer = () => {
	const context = useContext(Global);
	const english = context.language === "english";
	const arabic = context.language === "arabic";
	return (
		<div>
			<footer dir={english ? "ltr" : arabic ? "rtl" : ""}>
				<div className="container">
					<div className="row gap-5 gap-sm-0">
						<div className="col-12 col-md-6 col-lg-4 my-5">
							<section className="about">
								<div className="logo">
									<Link
										onClick={() =>
											window.scrollTo({ top: 0, behavior: "instant" })
										}
										to="/">
										<img src={logo} alt="Code+" />
									</Link>
								</div>
								<div className="social">
									<Link
										to="https://www.facebook.com/profile.php?id=100083504794775"
										alt="Code+ on Facebook!"
										className="facebook">
										<FontAwesomeIcon icon="fab fa-facebook-f"></FontAwesomeIcon>
									</Link>
									<Link
										to="https://api.whatsapp.com/send/?phone=00218920068117&text&type=phone_number&app_absent=0"
										alt="Reach out to our Whatsapp!"
										className="whatsapp">
										<FontAwesomeIcon icon="fab fa-whatsapp"></FontAwesomeIcon>
									</Link>
								</div>
								<p id="About">
									{english
										? "Code Plus Club seeks to provide a community of programmers able to learn effectively and share expierence and work on software projects to raise the efficiency of programmers in Libya."
										: arabic
										? "يعمل نادي كود بلس على إنشاء مجتمع من المبرمجين قادر على التعلم بشكل فعّال ومشاركة الخبرات بالإضافة إلى العمل على مشاريع برمجية لرفع الكفاءة لدى المبرمجين في ليبيا"
										: ""}
								</p>
							</section>
						</div>
						<div className="col-12 col-md-6 col-lg-4 my-5">
							<section className="links">
								<ul onClick={() => window.scrollTo({ top: 0 })}>
									<li>
										<FontAwesomeIcon
											icon={`fa-solid fa-angles-${
												english ? "right" : arabic ? "left" : ""
											}`}
										/>
										<Link alt="Courses" to="/Courses">
											{english ? "Courses" : arabic ? "الدورات" : ""}
										</Link>
									</li>
									<li>
										<FontAwesomeIcon
											icon={`fa-solid fa-angles-${
												english ? "right" : arabic ? "left" : ""
											}`}
										/>
										<Link alt="Our Team" to="/Our-Team">
											{english ? "Our Team" : arabic ? "فريق العمل" : ""}
										</Link>
									</li>
									<li>
										<FontAwesomeIcon
											icon={`fa-solid fa-angles-${
												english ? "right" : arabic ? "left" : ""
											}`}
										/>
										<Link alt="Leader Board" to="/Leaderboard">
											{english ? "Leaderboard" : arabic ? "لوحة الصّدارة" : ""}
										</Link>
									</li>
									<li>
										<FontAwesomeIcon
											icon={`fa-solid fa-angles-${
												english ? "right" : arabic ? "left" : ""
											}`}
										/>
										<Link to="/Why-Code-Plus" alt="Why Code+">
											{english ? "Why Code+?" : arabic ? "لماذا كود بلس؟" : ""}
										</Link>
									</li>
								</ul>
							</section>
						</div>
						<div
							id="contact-us"
							className="d-flex justify-content-lg-center col-12 col-md-6 col-lg-4 my-5">
							<section className="info">
								<div className="location">
									<FontAwesomeIcon icon="fa fa-map-location-dot"></FontAwesomeIcon>
									{english ? "Benghazi, Libya" : arabic ? "بنغازي، ليبيا" : ""}
								</div>
								<div>
									<FontAwesomeIcon icon="fa-regular fa-envelope" />
									info@codeplus.ly
								</div>
								<div className="contact-info">
									<FontAwesomeIcon icon="fa fa-phone"></FontAwesomeIcon>
									<div>
										<span> +(218)92-0068-117 </span>
									</div>
								</div>
							</section>
						</div>
					</div>
				</div>
				<span className="line"></span>
				<div className="closing">
					{english
						? "Made by Eyad Binamir"
						: arabic
						? "بواسطة إياد بن عامر"
						: ""}
				</div>
			</footer>
		</div>
	);
};
export default Footer;
