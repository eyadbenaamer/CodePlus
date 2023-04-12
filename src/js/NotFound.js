import { Link } from "react-router-dom";
import { Global } from "./GlobalSettings";
import error from "../imgs/404.png";
import "../css/NotFound.css";
import { useContext } from "react";
const NotFound = () => {
  const context = useContext(Global);
  const english = context.language === "english";
  const arabic = context.language === "arabic";
  return (
    <div className="py-5 container mt-0 mb-0 m-auto not-found ">
      <div className="row align-items-center justify-content-center">
        <div className="col-12 col-md-6 ">
          <img src={error} alt="Page not found" className="img-fluid" />
        </div>
        <div
          dir={english ? "ltr" : arabic ? "rtl" : ""}
          className="col-12 col-md-6 d-flex flex-column align-items-center d-md-block "
        >
          <h2 className="mb-5 mt-5 justify-content-center d-flex justify-content-md-start">
            {english
              ? "Error 404.page is not found."
              : arabic
              ? "خطأ 404. الصحفة غير موجودة."
              : ""}
          </h2>
          <Link to="/">
            <button className={`p-2 ${context.theme}`}>
              {english ? "Go to Home" : arabic ? "الصّفحة الرئيسية" : ""}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default NotFound;
