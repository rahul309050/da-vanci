import Header from "./header";
import Footer from "./footer";

const BaseLayout = (props) => {
  return (
    <>
      <Header />

      <main className="main_wrapper" style={{ overflow: "hidden" }}>{props.children}</main>
      <Footer />
    </>
  );
};

export default BaseLayout;
