import ReactPaginate from "react-paginate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Global } from "../GlobalSettings";
import Item from "./Item";
import Top from "./Top";
import "../../css/LeaderBoard.css";
const Leaderboard = () => {
  let [pagesCount, setPagesCount] = useState(0);
  let [list, setList] = useState([]);
  const fetchList = async (pageCount) => {
    let response = await axios.get(
      `http://localhost:5500/src/data/leaderboard${pageCount}.json`
    );
    setList(response.data);
  };
  const search = async (query) => {
    let response = await axios.post(
      `http://localhost:5500/src/data/leaderboard?q=${query}`
    );
    setPagesCount(response.data.count);
    setList(response.data.entries);
  };
  const fetchCount = async () => {
    let response = await axios.get(
      "http://localhost:5500/src/data/count.json"
    );
    setPagesCount(response.data.pagesCount);
  };
  useEffect(() => {
    fetchCount();
    fetchList(1);
    fetchCount();
  }, []);

  const context = useContext(Global);
  const english = context.language === "english";
  const arabic = context.language === "arabic";
  const handlePageClick = (data) => {
    fetchList(data.selected + 1);
  };
  return (
    <div className={context.windowWidth > 768 ? " py-5" : "py-5"}>
      {context.windowWidth > 768 && <div></div>}
      <div className="container leader-board">
        {context.windowWidth < 768 && <div className="d-flex"></div>}
        <h1 className="-5 text-center heading">
          {english ? "Leaderboard" : arabic ? "لوحة الصّدارة" : ""}
        </h1>
        <div
          className={`items d-flex col-11 col-md-6 col-lg-6 flex-column align-items-center gap-4 ${context.theme === "dark" ? "text-light" : "text-dark"
            }`}
        >
          <div className={`search my-5 w-100 ${context.theme}`}>
            <input
              className="w-100"
              placeholder={english ? "Search" : arabic ? "ابحث" : ""}
              dir={english ? "ltr" : arabic ? "rtl" : ""}
              type="text"
              onChange={(element) => {
                let value = element.target.value;
                if (value === "") {
                  fetchList(1);
                  fetchCount();
                } else {
                  search(value);
                }
              }}
            />
            <FontAwesomeIcon
              style={english ? { right: 0 } : arabic ? { left: 0 } : {}}
              icon="fa-solid fa-magnifying-glass"
            />
          </div>
          <Top />
          {list.map((item) => {
            return (
              <Item
                id={item.id}
                rank={item.rank}
                img={item.image}
                name={item.name}
                points={item.points}
                trophies={item.trophies}
              />
            );
          })}
        </div>
        <ReactPaginate
          containerClassName={`pagination flex-wrap ${context.theme === "dark" ? "text-light" : "text-dark"
            } justify-content-center align-items-center my-5`}
          pageClassName="page P-2"
          pageLinkClassName={`link px-2 ${context.theme === "dark" ? "text-light" : "text-dark"
            } ${context.theme}`}
          breakClassName="page p-2"
          breakLinkClassName={`link px-2 ${context.theme === "dark" ? "text-light" : "text-dark"
            } ${context.theme}`}
          nextClassName="page"
          nextLinkClassName="link"
          previousClassName="page"
          previousLinkClassName="link"
          activeClassName="active"
          marginPagesDisplayed={2}
          breakLabel="..."
          nextLabel={
            <div className="next d-flex align-items-center gap-1">
              <span className="d-none d-sm-block">
                {english ? "Next" : arabic ? "التالي" : ""}
              </span>
              <FontAwesomeIcon icon="fa-solid fa-angle-right"></FontAwesomeIcon>
            </div>
          }
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pagesCount}
          previousLabel={
            <div className="prev d-flex align-items-center gap-1">
              <FontAwesomeIcon icon="fa-solid fa-angle-left"></FontAwesomeIcon>
              <span className="d-none d-sm-block">
                {english ? "Previous" : arabic ? "السابق" : ""}
              </span>
            </div>
          }
          renderOnZeroPageCount={null}
        />

      </div>
    </div>
  );
};
export default Leaderboard;
