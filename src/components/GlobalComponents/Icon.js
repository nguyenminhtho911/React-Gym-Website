/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import LineIcon from "../Image/lines.png";

const Icon = () => <img css={styles} src={LineIcon} alt="icon" />;

const styles = css`
  margin: 20px 0;
`;

export default Icon;
