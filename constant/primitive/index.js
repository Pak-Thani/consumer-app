import styled from "styled-components";

const primitive = {
  h1: "6.857rem",
  h2: "4.286rem",
  h3: "3.429rem",
  h4: "2.429rem",
  h5: "1.714rem",
  h6: "1.429rem",
  title: "1.143rem",
  body: "1rem",
  caption: "0.857rem",
  overline: "0.714rem",
  tiny: "0.643rem",
  extratiny: "0.6rem",
};

const color = {
  primary: "#F7D100",
  secondary: "#4CB654",
  background: "#FFFFFF",
  disable_black: "rgba(0,0,0,0.6)"
};

const breakpoints = {
  mobile: () => css`
    @media (max-width: 400px) {
      width: 100%;
    }
  `,
};

export { primitive, color, breakpoints };
