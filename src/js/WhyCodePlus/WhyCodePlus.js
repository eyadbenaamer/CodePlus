import { motion } from "framer-motion";
import Card from "./Card";
import { useContext } from "react";
import { Global } from "./../GlobalSettings";
import "../../css/WhyCodePlus.css";
import whyImage1 from "../../imgs/why-code-plus-6.png";
import whyImage2 from "../../imgs/why-code-plus-7.png";
const WhyCodePlus = () => {
	const context = useContext(Global);
	const english = context.language === "english";
	const arabic = context.language === "arabic";

	return (
		<div className="why-code-plus">
			<div className="section">
				<motion.div
					transition={{ duration: 0.5, delay: 0.5, ease: "linear" }}
					whileInView={{ opacity: [0, 1] }}
					dir={english ? "ltr" : arabic ? "rtl" : ""}
					className=" container-fluid d-flex flex-column align-items-center py-5 justify-content-center my-5 ">
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
			</div>
			<div className="section">
				<motion.div
					className="container d-flex flex-wrap align-items-start align-items-md-center slide "
					transition={{ duration: 0.5, delay: 0.5, ease: "linear" }}
					whileInView={{ opacity: [0, 1] }}
					dir={english ? "ltr" : arabic ? "rtl" : ""}>
					<div className="col-6 col-md-6">
						<p>
							{english
								? "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit tempore magni harum voluptates. Ullam, deserunt quisquam unde hic labore adipisci reiciendis error optio ipsum debitis laboriosam. Reprehenderit quisquam deserunt laudantium!"
								: arabic
								? "بعباث هبثابهعث بثعب بثىاصهب بثهبت"
								: ""}
						</p>
					</div>
					<div className="col-6 col-md-6">
						<img src={whyImage1} alt="Why Code Plus" className="img-fluid" />
					</div>
				</motion.div>
			</div>

			<div className="section">
				<motion.div
					className="container d-flex flex-wrap align-items-start align-items-md-center slide"
					transition={{ duration: 0.5, delay: 0.5, ease: "linear" }}
					whileInView={{ opacity: [0, 1] }}
					dir={english ? "rtl" : arabic ? "ltr" : ""}>
					<div className="col-6 col-md-6">
						<p>
							{english
								? "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit tempore magni harum voluptates. Ullam, deserunt quisquam unde hic labore adipisci reiciendis error optio ipsum debitis laboriosam. Reprehenderit quisquam deserunt laudantium!"
								: arabic
								? "بعباث هبثابهعث بثعب بثىاصهب بثهبت"
								: ""}
						</p>
					</div>
					<div className="col-6 col-md-6">
						<img src={whyImage2} alt="Why Code Plus" className="img-fluid" />
					</div>
				</motion.div>
			</div>
		</div>
	);
};
export default WhyCodePlus;
