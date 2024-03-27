import React from "react";
import styled from "styled-components";
import { QUERIES } from "../constants.js";
import VisuallyHidden from "./VisuallyHidden.jsx";

const ProductPreview = () => {
  return (
    <Wrapper>
      <picture>
        <source srcSet="image-product-desktop.jpg" media={QUERIES.tabletAndUp} />
        <ProductImage src="image-product-mobile.jpg" alt="Photo of a perfume bottle" />
      </picture>
      <Content>
        <Ribbon>Perfume</Ribbon>
        <Title>Gabrielle Essence Eau De Parfum</Title>
        <Description>
          A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator
          for the House of CHANEL.
        </Description>
        <Prices>
          <CurrentPrice>
            <VisuallyHidden>Current price:</VisuallyHidden>
            $149.99
          </CurrentPrice>
          <OriginalPrice>
            <VisuallyHidden>Original price:</VisuallyHidden>
            <s>$169.99</s>
          </OriginalPrice>
        </Prices>
        <Button>
          <img src="icon-cart.svg" alt="" width="16" height="16" />
          <span>Add to Cart</span>
        </Button>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: ${600 / 16}rem;
  margin: 1rem;

  background-color: var(--color-white);
  border-radius: 10px;
  overflow: clip;

  display: grid;
  grid-template-columns: minmax(0, 1fr);
  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: 1fr 1fr;
  }
`;

const ProductImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1.5rem;
  @media ${QUERIES.tabletAndUp} {
    padding: 2rem;
  }
`;

const Ribbon = styled.p`
  font-size: ${12 / 16}rem;
  letter-spacing: 5px;
  text-transform: uppercase;
  line-height: normal;
`;

const Title = styled.h2`
  margin-top: 12px;
  color: var(--color-very-dark-blue);
  font: var(--font-display);
  @media ${QUERIES.tabletAndUp} {
    margin-top: 20px;
  }
`;

const Description = styled.p`
  margin-top: 16px;
  font: var(--font-body);
  @media ${QUERIES.tabletAndUp} {
    margin-top: 24px;
  }
`;

const Prices = styled.div`
  margin-top: 24px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 30px;
  }
`;

const CurrentPrice = styled.p`
  color: var(--color-dark-cyan);
  font: var(--font-display);
`;

const OriginalPrice = styled.p`
  font: var(--font-body);
  font-size: ${13 / 16}rem;
`;

const Button = styled.button`
  margin-top: 20px;
  @media ${QUERIES.tabletAndUp} {
    margin-top: 30px;
  }

  width: 100%;
  border: 0;
  cursor: pointer;
  border-radius: 8px;
  padding-block: 16px;
  padding-inline: 0;

  color: var(--color-white);
  background-color: var(--color-dark-cyan);

  font: var(--font-body);
  font-weight: var(--font-bold);
  line-height: revert;

  display: flex;
  gap: 0.5rem;
  justify-content: center;
  align-items: center;

  &:is(:hover, :focus) {
    background-color: var(--color-deep-cyan);
  }
`;

export default ProductPreview;
