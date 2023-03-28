import "../../css/OurTeam.css";
import { useContext } from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import { Global } from "../GlobalSettings";
import eyad from "../../imgs/eyad.jpg";
const OurTeam = () => {
	const context = useContext(Global);
	const english = context.language === "english";
	const arabic = context.language === "arabic";
	return (
		<motion.div
			dir={english ? "ltr" : arabic ? "rtl" : ""}
			transition={{ duration: 0.5, delay: 0.5, ease: "linear" }}
			whileInView={{ opacity: [0, 1] }}
			className="container-fluid d-flex flex-column align-items-center our-team py-5 justify-content-center">
			<h1 className="text-center text-uppercase heading py-5">
				{english ? "Our Team" : arabic ? "فـريـق الـعـمـل" : ""}
			</h1>
			<div className="container row cards">
				<div className="col-sm-12 col-md-6 col-lg-3 my-3">
					<Card
						name={english ? "eyad binamir" : arabic ? "إياد بن عامر" : ""}
						img={eyad}
						title={
							english
								? "Front-end Developer"
								: arabic
								? "مطور واجهات أمامية."
								: ""
						}
						skills={["HTML", "CSS", "JS", "Java", "React.js"]}
					/>
				</div>
			</div>
		</motion.div>
	);
};
export default OurTeam;
