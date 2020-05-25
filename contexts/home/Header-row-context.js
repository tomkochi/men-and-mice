import { createContext, useState, useEffect } from "react";
import Axios from "axios";

export const HeaderRowContext = createContext();

const HeaderRowContextProvider = (props) => {
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState({ name: "All", id: "All" });
  const sortOptions = ["Newest", "Oldest"];
  const [selectedSortOption, setSelectedSortOption] = useState(sortOptions[0]);

  return (
    <HeaderRowContext.Provider
      value={{
        search,
        tags,
        setTags,
        selectedTag,
        sortOptions,
        selectedSortOption,
        setSearch,
        setSelectedTag,
        setSelectedSortOption,
      }}
    >
      {props.children}
    </HeaderRowContext.Provider>
  );
};

export default HeaderRowContextProvider;
