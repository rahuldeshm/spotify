import React, { useState } from "react";

const ini = JSON.parse(localStorage.getItem("activeSong"));
const init = ini
  ? ini
  : {
      artist: "Coldplay",
      duration: 645,
      photo:
        "https://i.pinimg.com/originals/1d/a7/9a/1da79a9ed751285378a05535ddb71ec8.png",
      title: "A Head Full Of Dreams",
      url: "https://storage.googleapis.com/similar_sentences/Imagine%20Dragons%20-%20West%20Coast%20(Pendona.com).mp3",
      __typename: "Song",
      _id: "61b6f14dc2f7cafd968c31f2",
    };

export function ContextProvider(props) {
  const [category, setCategory] = useState([]);
  const [manu, setmanu] = useState(false);
  const [theme, setTheme] = useState("rgb(0, 28, 40)");
  const [active, setActive] = useState({ id: 1, title: "For You" });
  const [activeSong, setActiveSong] = useState(init);
  const setActiveC = (c) => {
    setActive(c);
  };
  const setActiveS = (c) => {
    setActiveSong(c);
  };
  const setCat = (c) => {
    setCategory(c);
  };
  const setT = (c) => {
    setTheme(c);
  };
  const setManu = () => {
    setmanu(!manu);
  };
  return (
    <DataContext.Provider
      value={{
        theme,
        manu,
        setManu,
        category,
        active,
        activeSong,
        setCat: setCat,
        setActiveC,
        setActiveS,
        setT,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

const DataContext = React.createContext({
  theme: {},
  category: [],
  activeSong: {},
  active: {},
  manu: true,
  setManu: () => {},
  setCat: () => {},
  setS: () => {},
  setT: () => {},
  setActiveC: () => {},
  setActiveS: () => {},
});

export default DataContext;
