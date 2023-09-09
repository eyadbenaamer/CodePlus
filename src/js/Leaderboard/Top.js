import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Global } from "../GlobalSettings";
const Top = () => {
  let [top, setTop] = useState([]);
  const context = useContext(Global);
  const { windowWidth } = context;
  const fetchList = async () => {
    let response = await axios(
      `https://raw.githubusercontent.com/eyadbinamir/CodePlus/master/src/data/leaderboard1.json`
    );
    setTop(response.data);
  };
  useEffect(() => {
    fetchList();
  }, []);
  console.log(windowWidth);
  return (
    <div className="top w-100 d-flex justify-content-between my-5">
      {top.map((item, index) => {
        if (index <= 2) {
          return (
            <div
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "instant" });
              }}
              className="d-flex flex-column align-items-center"
              rank={item.rank}
            >
              <Link to={`/Leaderboard/${item.id}`}>
                <div className="image-container">
                  {item.rank === 1 ? (
                    <FontAwesomeIcon icon="fa-solid fa-crown" />
                  ) : null}
                  <img
                    src={item.image}
                    alt={item.name}
                    width={windowWidth <= "360" ? "70px" : "100px"}
                  />
                  <span className="">{item.rank}</span>
                </div>
                <h2 className="mt-3">{item.name}</h2>
              </Link>
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};
export default Top;
