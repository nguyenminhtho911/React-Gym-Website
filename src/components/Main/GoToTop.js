/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import React, { useState, useEffect } from "react";

const GoToTop = () => {
  const [showGoToTop, setShowGoTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 200) {
        setShowGoTop(true);
      } else {
        setShowGoTop(false);
      }
      //setShowGoTop(window.scrollY >= 200)
    };
    window.addEventListener("scroll", handleScroll);

    //Cleaup function (3. khắc phục)
    return () => {
      window.removeEventListener("scroll", handleScroll);
      //console.log('removeEventListener')
    };
  }, []);

  return (
    <React.Fragment>
      {showGoToTop && (
        <a href="#home" css={styles}>
          <i class="fa fa-chevron-up" aria-hidden="true"></i>
        </a>
      )}
    </React.Fragment>
  );
};

const styles = css`
  width: 45px;
  height: 45px;
  position: fixed;
  right: 20px;
  bottom: 20px;
  border-radius: 50%;
  background: #ed563b;
  z-index: 999;
  color: #fff;
  text-decoration: none;
  &:hover {
    background: #666;
  }
  i {
    display: block;
    vertical-align: middle;
    text-align: center;
    line-height: 42px;
    font-size: 12px
  }
`;

export default GoToTop;
