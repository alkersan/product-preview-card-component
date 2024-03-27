import React from "react";
import styled from "styled-components";
import ProductPreview from "./ProductPreview.jsx";
import GlobalStyles from "../GlobalStyles.js";
import DesignOverlay from "./DesignOverlay.jsx";

const App = () => {
  return (
    <>
      <Main>
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
`;

export default App;
