/** @jsx jsx */
import { jsx, css } from "@emotion/core";

const Overlay = () => <div css={styles} className="overlay"></div>;

const styles = css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(35, 45, 57, 0.8);
  z-index: 1;
`;

export default Overlay;
