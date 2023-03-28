import { useContext, useState } from "react";
import { Global } from "../GlobalSettings";
const Trophy = (props) => {
	const [isHovered, setIsHovered] = useState();

	const { src, name } = props;
	const context = useContext(Global);
	return (
		<div className="trophy">
			<img
				onMouseOver={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				src={src}
				alt={name}
				className="img-fluid"
			/>
			{isHovered && (
				<div className={"trophy-descreption text-capitalize " + context.theme}>
					{name}
				</div>
			)}
		</div>
	);
};
export default Trophy;
