import styled from "styled-components";
import React, { useLayoutEffect, useRef } from "react";
import { useWindowScroll } from "react-use";
export function ScrollToTop() {
  const ref = useRef(null);
  const { y } = useWindowScroll();
  const scrollTo = () => {
    let element = document.getElementById("header");
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
  };

  useLayoutEffect(() => {
    if (y > 200) {
      ref.current.style.display = "flex";
    } else {
      ref.current.style.display = "none";
    }
  }, [y]);
  return (
    <Up ref={ref} onClick={scrollTo}>
      &#x2191;
    </Up>
  );
}
const Up = styled.div`
  width: 3rem;
  height: 3rem;

  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};

  font-size: ${(props) => props.theme.fontxl};
  position: fixed;
  right: 1rem;
  bottom: 1rem;

  cursor: pointer;

  display: none;
  justify-content: center;
  align-items: center;

  border-radius: 50%;
  box-shadow:1px 1px 5px rgba(0,0,0,0.4);
  transition: all 0.2s ease;
  &:hover {
    transform: scale(1.2);
  }
  &:active {
    transform: scale(0.9);
  }
`;
