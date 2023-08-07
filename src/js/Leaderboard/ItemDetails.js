import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
// import {  useParams } from "react-router-dom";
import axios from "axios";
import { Global } from "../GlobalSettings";
import geek from "../../imgs/geek.png";
import perfect from "../../imgs/perfect.png";
import hacker from "../../imgs/hacker.png";
import passionate from "../../imgs/passionate.png";
import Trophy from "./Trophy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ItemDetails = () => {
  const context = useContext(Global);
  const english = context.language === "english";
  const arabic = context.language === "arabic";
  // const param = useParams();
  let [item, setItem] = useState({ trophies: [] });
  const fetchItemById = async () => {
    let response = await axios(
      `http://localhost:5500/src/data/leaderboard3.json`
      // `http://localhost:5500/src/data/leaderboard?id=${param.id}` example
    );
    setItem(response.data);
  };
  useEffect(() => {
    fetchItemById();
  }, []);
  let { name, rank, points, trophies, image } = item;
  const icons = {
    geek: {
      name: english ? "geek" : arabic ? "مهووس" : "",
      icon: geek,
    },
    passionate: {
      name: english ? "passionate" : arabic ? "شغوف" : "",
      icon: passionate,
    },
    hacker: {
      name: english ? "hacker" : arabic ? "هاكر" : "",
      icon: hacker,
    },
    perfect: {
      name: english ? "perfect" : arabic ? "مثاليّ" : "",
      icon: perfect,
    },
  };
  return (
    <div className="item-details col-11 col-md-6 col-lg-6 d-flex flex-column align-items-center	center ">
      <Link
        to="/Leaderboard"
        className="d-flex align-self-start gap-2 mt-4	 mb-3"
        dir="ltr"
      >
        <FontAwesomeIcon icon={"angle-left"} />
        {english ? "Back" : arabic ? "رجوع" : ""}
      </Link>

      <div
        dir={english ? "ltr" : arabic ? "rtl" : ""}
        className="mb-5 box items d-flex w-100 flex-column"
      >
        <div
          className="background"
          style={{
            backgroundColor:
              rank <= 5
                ? "darkgoldenrod"
                : rank > 5 && rank <= 10
                ? "silver"
                : rank > 10 && rank <= 20
                ? "#704c1f"
                : "",
          }}
        >
          <div
            style={{
              color:
                rank <= 5
                  ? "goldenrod"
                  : rank > 5 && rank <= 10
                  ? ""
                  : rank > 10 && rank <= 20
                  ? "#503716"
                  : "",
              marginTop: -5,
            }}
          >
            {rank <= 5
              ? english
                ? "Golden Tier"
                : arabic
                ? "الفئة الذّهبية"
                : ""
              : rank > 5 && rank <= 10
              ? english
                ? "Silver Tier"
                : arabic
                ? "الفئة الفضّية"
                : ""
              : rank > 10 && rank <= 20
              ? english
                ? "Bronze Tier"
                : arabic
                ? "الفئة البرونزّية"
                : ""
              : ""}
          </div>
        </div>
        <div className="img-container">
          <img
            src={image}
            alt={name}
            style={{
              border:
                rank <= 5
                  ? "solid darkgoldenrod"
                  : rank > 5 && rank <= 10
                  ? "solid silver"
                  : rank > 10 && rank <= 20
                  ? "solid #704c1f"
                  : "",
              backgroundColor:
                rank <= 5
                  ? " darkgoldenrod"
                  : rank > 5 && rank <= 10
                  ? " silver"
                  : rank > 10 && rank <= 20
                  ? " #704c1f"
                  : "",
            }}
          />
        </div>
        <div className="row mt-3 mb-5 fs-2 d-flex align-items-center justify-content-between ">
          <div className="col-12 text-center name">{name ?? ""}</div>
          <div className="info col-6">
            {`${english ? "Rank" : arabic ? "التصنيف" : ""}`}
            <span>{` #${rank ?? ""}`}</span>
          </div>
          <div
            className={`info col-6 ${
              english ? "text-end" : arabic ? "text-start" : ""
            }`}
          >
            {`${english ? "Points" : arabic ? "النقاط" : ""} `}
            <span>{`${points ?? ""}`}</span>
          </div>
        </div>
        <div className="container">
          <h4 className="">
            {trophies.length > 0 && english
              ? "Trophies:"
              : arabic
              ? "الألقاب:"
              : ""}
          </h4>
          {trophies.length > 0 && (
            <div className="d-flex justify-content-start align-items-center trophies gap-1 align-self-start">
              {trophies.map((trophy) => {
                return (
                  <div className="position-relative">
                    <Trophy
                      name={icons[trophy].name}
                      src={icons[trophy].icon}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ItemDetails;
