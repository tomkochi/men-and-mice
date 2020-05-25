import { createContext, useState, useEffect } from "react";

export const HeaderRowContext = createContext();

const HeaderRowContextProvider = (props) => {
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState({ name: "All", id: "All" });
  const sortOptions = ["Newest", "Oldest"];
  const [selectedSortOption, setSelectedSortOption] = useState(sortOptions[0]);
  const [loadData, setLoadData] = useState("");

  //api settings
  const fetchApi = true;
  const endpoint =
    "https://hlynurhalldorsson.ghost.io/ghost/api/v3/content/tags/?key=693902285ff27989f7ad281cd8";

  //Api Call
  useEffect(() => {
    fetch(endpoint)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        return response.tags;
      })
      .then((data) => {
        setTags([{ name: "All", id: "All" }, ...data]);
        console.log(data);
      })
      .catch((error) => console.log(`there was an error ${error}`));
  }, [fetchApi]);

  return (
    <HeaderRowContext.Provider
      value={{
        search,
        tags,
        setTags,
        selectedTag,
        sortOptions,
        loadData,
        selectedSortOption,
        setSearch,
        setSelectedTag,
        setSelectedSortOption,
        setLoadData,
      }}
    >
      {props.children}
    </HeaderRowContext.Provider>
  );
};

export default HeaderRowContextProvider;
