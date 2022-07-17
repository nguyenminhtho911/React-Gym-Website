/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import Nav from "../Navbar/Nav";
// import Video from "./Video";
import KeyVisual from "./KeyVisual";
import Overlay from "./Overlay";
import Info from "./Info";
import GoToTop from "./GoToTop";

const Main = () => (
  <section css={styles} className="main" id="home">
    <Overlay />
    <Nav />
    <Info />
    <KeyVisual />
    <GoToTop/>
  </section>
);

const styles = css`
  width: 100%;
  height: 100vh;
`;

export default Main;
