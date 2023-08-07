import { useState, createContext } from "react";
export const Global = createContext();
const GlobalSettings = (props) => {
  let [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenuClicked, setIsMenuClicked] = useState(false);
  const [isLangMenuClicked, setIsLangMenuClicked] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");
  const [language, setLanguage] = useState(
    localStorage.getItem("language") ?? "arabic"
  );
  window.onresize = () => {
    setWindowWidth(window.innerWidth);
  };
  const { children } = props;
  return (
    <Global.Provider
      value={{
        isLangMenuClicked,
        setIsLangMenuClicked,
        language,
        setLanguage,
        windowWidth,
        setWindowWidth,
        theme,
        setTheme,
        isMenuClicked,
        setIsMenuClicked,
      }}
    >
      {children}
    </Global.Provider>
  );
};
export default GlobalSettings;
