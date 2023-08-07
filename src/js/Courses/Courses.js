import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Global } from "../GlobalSettings";
import Course from "./Course";
import "../../css/Courses.css";
export const Courses = () => {
  let [courses, setCourses] = useState([]);
  useEffect(() => {
    const fetchCourses = async (url) => {
      let response = await axios(url);
      setCourses(response.data);
    };
    fetchCourses(
      "https://raw.githubusercontent.com/eyadbinamir/CodePlus/master/src/data/courses.json"
    );
  }, []);
  const context = useContext(Global);
  const english = context.language === "english";
  const arabic = context.language === "arabic";

  return (
    <div className={context.windowWidth > 768 ? " py-5" : "py-5"}>
      {context.windowWidth > 768 && <div></div>}
      <div className="container " dir={english ? "ltr" : arabic ? "rtl" : ""}>
        {context.windowWidth < 768 && <div className="d-flex"></div>}
        <h1 className="my-5 heading text-center">
          {english ? "Courses" : arabic ? "الـدورات" : ""}
        </h1>
        <div className=" courses row justify-content-center justify-content-md-start">
          {courses.map((course) => {
            return (
              <div className="col-11 col-md-6 col-lg-3 ">
                <Course
                  title={course.title}
                  img={course.image}
                  language={course.language}
                  startsIn={course.startsIn}
                  endsIn={course.endsIn}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
