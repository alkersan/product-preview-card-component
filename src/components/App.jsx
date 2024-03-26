import React from "react";
import styled from "styled-components";
import ProductPreview from "./ProductPreview.jsx";
import GlobalStyles from "../GlobalStyles.js";
import DesignOverlay from "./DesignOverlay.jsx";

const App = () => {
  return (
    <>
      <Main>
        <h1 className="visually-hidden">Product preview card component solution</h1>
        <ProductPreview />
        <DesignOverlay />
      </Main>
      <GlobalStyles />
    </>
  );
};

const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100%;

  background-color: var(--color-cream);
`;

export default App;
