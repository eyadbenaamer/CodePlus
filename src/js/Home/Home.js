import Card from "../WhyCodePlus/Card";
import { Global } from "../../js/GlobalSettings";
import { motion } from "framer-motion";
import { useContext } from "react";
import "../../css/Home.css";
import logo from "../../imgs/landing-image.png";
import youthCenterDark from "../../imgs/youth-center-dark.svg";
import youthCenterLight from "../../imgs/youth-center-light.svg";
import youthCenterColored from "../../imgs/youth-center-colored.svg";
import benghaziAlamalDark from "../../imgs/benghazi-alamal-dark.svg";
import benghaziAlamalLight from "../../imgs/benghazi-alamal-light.svg";
import benghaziAlamalColored from "../../imgs/benghazi-alamal-colored.svg";
import mauColored from "../../imgs/mau-colored.svg";
import mauDark from "../../imgs/mauDark.svg";
import mauLight from "../../imgs/mauLight.svg";
export const Home = () => {
	const context = useContext(Global);
	const english = context.language === "english";
	const arabic = context.language === "arabic";
	const fontTheme =
		context.theme === "dark" ? "text-white-50" : "text-black-50";
	return (
		<div>
			<div className="container landing py-5 d-flex align-items-center mb-5">
				<motion.div
					transition={{ duration: 1, ease: "linear" }}
					whileInView={{ opacity: [0, 1] }}
					className="row align-items-center  py-5 ">
					<div className="col-md-6 col-12 ">
						<img src={logo} alt="Welcome to Code Plus" className="img-fluid" />
					</div>
					<div className="col-md-6 col-12 text-center">
						<h1 className="my-5 heading">
							{english
								? "Welcome to Code Plus Club"
								: arabic
								? "مرحبًا بكم في نادي كود بلس"
								: ""}
						</h1>
						<p className={fontTheme}>
							{english
								? "Code Plus Club seeks to provide a community of programmers able to learn effectively and share expierence and work on software projects to raise the efficiency of programmers in Libya."
								: arabic
								? "يعمل نادي كود بلس على إنشاء مجتمع من المبرمجين قادر على التعلم بشكل فعّال ومشاركة الخبرات بالإضافة إلى العمل على مشاريع برمجية لرفع الكفاءة لدى المبرمجين في ليبيا"
								: ""}
						</p>
					</div>
				</motion.div>
			</div>
			{/* <WhyCodePlus /> */}
			<motion.div
				transition={{ duration: 0.5, delay: 0.5, ease: "linear" }}
				whileInView={{ opacity: [0, 1] }}
				dir={english ? "ltr" : arabic ? "rtl" : ""}
				className=" container-fluid why-code-plus d-flex flex-column align-items-center py-5 justify-content-center my-5 ">
				<h1 className="text-center text-uppercase heading ">
					{english ? "Why Code Plus?" : arabic ? "لماذا كود بلس؟" : ""}
				</h1>
				<div className="container row justify-content-center cards ">
					<div className=" col-sm-12 col-md-6 col-lg-3 my-3">
						<Card
							className={context.theme}
							title={
								english ? "Courses Schedule" : arabic ? "جدول الدورات" : ""
							}
							icon="fa-clock"
							description={
								english
									? "Complete scheduling of club's activities for complete and convenient acsess to the courses with pre-booking system."
									: arabic
									? "جدول كامل مفصّل لنشاطات النّادي لوصول كامل ومريح للدورات مع نظام حجز مسبق."
									: ""
							}
						/>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3 my-3">
						<Card
							className={context.theme}
							title={
								english
									? "Advanced Learning System"
									: arabic
									? "نظام تعليم بأسلوب متقدّم"
									: ""
							}
							icon="fa-solid fa-school-flag"
							description={
								english
									? "A system to track the progress of the trainees with applications to improve the quality of education."
									: arabic
									? "نظام لتتبع مدى تقدم المتدربين لجعل العملية التعليمية أكثر جودة."
									: ""
							}
						/>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3 my-3">
						<Card
							className={context.theme}
							title={english ? "Workshops" : arabic ? "ورش عمل" : ""}
							icon="fa-solid fa-laptop-code"
							description={
								english
									? "Providing courses and workshops about software projects and software challenges as a part of learning."
									: arabic
									? "نقوم بتقديم تحدّيات برمجية وورش عمل ملحقة بالدورات كجزء من التعلم."
									: ""
							}
						/>
					</div>
					<div className="col-sm-12 col-md-6 col-lg-3 my-3">
						<Card
							className={context.theme}
							title={english ? "Mentorship" : arabic ? "الإرشاد" : ""}
							icon="fa-solid fa-chalkboard-user"
							description={
								english
									? "Free weekly workshops to help trainees in the learning journey."
									: arabic
									? "ورش عمل مجّانية لمساعدة المتدربين في رحلة التعلم."
									: ""
							}
						/>
					</div>
				</div>
			</motion.div>

			<motion.div
				className="our-partners container my-5 py-5"
				transition={{ duration: 1, ease: "linear" }}
				whileInView={{ opacity: [0, 1] }}>
				<h1 className="heading text-center my-5">
					{english ? "Our Partners" : arabic ? "شُركاؤنا" : ""}
				</h1>
				<div
					dir={english ? "ltr" : arabic ? "rtl" : ""}
					className="row justify-content-center py-5 gap-md-2 gap-5">
					<div className="partner">
						<a
							className="position-relative"
							href="https://www.facebook.com/benghazi.alamal.foundation?mibextid=ZbWKwL">
							<img
								className="position-absolute img-fluid"
								src={context.theme === "dark" ? mauDark : mauLight}
								alt={
									english
										? "Modern American University"
										: arabic
										? "الجامعة الأمريكية الحديثة"
										: ""
								}
							/>
							<img
								className="position-absolute img-fluid"
								src={mauColored}
								alt={
									english
										? "Modern American University"
										: arabic
										? "الجامعة الأمريكية الحديثة"
										: ""
								}
							/>
						</a>
					</div>
					<div className="partner">
						<a
							className="position-relative"
							href="https://www.facebook.com/youthcentrecommunity.org?mibextid=ZbWKwL">
							<img
								className="img-fluid position-absolute"
								src={
									context.theme === "dark" ? youthCenterDark : youthCenterLight
								}
								alt={english ? "Youth Center" : arabic ? "مركز الشباب" : ""}
							/>
							<img
								className="img-fluid position-absolute "
								src={youthCenterColored}
								alt={english ? "Youth Center" : arabic ? "مركز الشباب" : ""}
							/>
						</a>
					</div>
					<div className="partner">
						<a
							className="position-relative"
							href="https://www.facebook.com/benghazi.alamal.foundation?mibextid=ZbWKwL">
							<img
								className="position-absolute img-fluid"
								src={
									context.theme === "dark"
										? benghaziAlamalDark
										: benghaziAlamalLight
								}
								alt={
									english
										? "Benghazi Alamal Foundation"
										: arabic
										? "مؤسسسة بنغازي الأمل"
										: ""
								}
							/>
							<img
								className="position-absolute img-fluid"
								src={benghaziAlamalColored}
								alt={
									english
										? "Benghazi Alamal Foundation"
										: arabic
										? "مؤسسسة بنغازي الأمل"
										: ""
								}
							/>
						</a>
					</div>
				</div>
			</motion.div>
		</div>
	);
};
