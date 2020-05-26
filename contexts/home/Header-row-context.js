import { createContext, useState } from "react";
import Axios from "axios";

export const HeaderRowContext = createContext();

const HeaderRowContextProvider = (props) => {
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");
  const sortOptions = ["Newest", "Oldest"];
  const [selectedSortOption, setSelectedSortOption] = useState(sortOptions[0]);
  const [loadData, setLoadData] = useState("");

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
