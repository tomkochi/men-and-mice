import Header from "./Header";
import Footer from "./Footer";
const Layout = (props) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout">{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
