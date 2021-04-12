import Nav from "./Nav";
import Footer from "./Footer";
const Layout = ({ children }) => {
  return (
    <>
      <Nav></Nav>

      <main>{children}</main>

      <Footer></Footer>
    </>
  );
};
export default Layout;
