import Blogs from "./blogs/Blogs";
import Heading from "./blogs/Heading";

const Home = () => {
  return (
    <div className="home">
      <Heading />
      <Blogs />
    </div>
  );
};

export default Home;
