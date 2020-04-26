import { useRouter } from "next/router";

const Footer = () => {
  const router = useRouter();

  return (
    <div
      className="footer"
      style={{ display: router.pathname === "/" ? "none" : "" }}
    >
      <h1 className="bg-light">Footer</h1>
    </div>
  );
};

export default Footer;
