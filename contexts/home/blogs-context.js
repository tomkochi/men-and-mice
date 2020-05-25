import { createContext, useState } from "react";

export const BlogsContext = createContext();

const BlogsContextProvider = (props) => {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(0);
  // first, keep blogs null to help easily fetch the data
  return (
    <BlogsContext.Provider
      value={{
        blogs,
        page,
        setBlogs,
        setPage,
      }}
    >
      {props.children}
    </BlogsContext.Provider>
  );
};

export default BlogsContextProvider;
