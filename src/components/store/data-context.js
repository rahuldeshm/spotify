import React, { useState } from "react";

export function ContextProvider(props) {
  const [category, setCategory] = useState([]);
  const [active, setActive] = useState(1);
  const [activeSong, setActiveSong] = useState({
    artist: "Coldplay",
    duration: 645,
    photo:
      "https://i.pinimg.com/originals/1d/a7/9a/1da79a9ed751285378a05535ddb71ec8.png",
    title: "A Head Full Of Dreams",
    url: "https://storage.googleapis.com/similar_sentences/Imagine%20Dragons%20-%20West%20Coast%20(Pendona.com).mp3",
    __typename: "Song",
    _id: "61b6f14dc2f7cafd968c31f2",
  });
  const setActiveC = (c) => {
    setActive(c);
  };
  const setActiveS = (c) => {
    setActiveSong(c);
  };
  const setCat = (c) => {
    setCategory(c);
  };

  return (
    <DataContext.Provider
      value={{
        category,
        active,
        activeSong,
        setCat: setCat,
        setActiveC,
        setActiveS,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
}

const DataContext = React.createContext({
  category: [],
  activeSong: {},
  active: {},
  setCat: () => {},
  setS: () => {},
  setActiveC: () => {},
  setActiveS: () => {},
});

export default DataContext;
