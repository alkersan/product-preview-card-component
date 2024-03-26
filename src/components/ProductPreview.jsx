import React from "react";
import styled from "styled-components";
import { QUERIES } from "../constants.js";

const ProductPreview = () => {
  return (
    <Wrapper>
      <ProductDisplay>
        <picture>
          <source srcSet="image-product-desktop.jpg" media={QUERIES.tabletAndUp} />
          <img src="image-product-mobile.jpg" alt="Photo of a perfume bottle" />
        </picture>
      </ProductDisplay>
      <Content>
        <Ribbon>Perfume</Ribbon>
        <Title>Gabrielle Essence Eau De Parfum</Title>
        <Description>
          A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator
          for the House of CHANEL.
        </Description>
        <Prices>
          <span>$149.99</span>
          <s>$169.99</s>
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
  width: 100%;
  max-width: ${375 / 16}rem;
  margin-inline: 1rem;

  background-color: var(--color-white);
  border-radius: 10px;
  overflow: clip;

  display: flex;
  flex-direction: column;

  @media ${QUERIES.tabletAndUp} {
    max-width: 37.5rem;
    flex-direction: row;
  }
`;

const ProductDisplay = styled.div`
  flex: 50%;
  img {
    display: block;
    height: 15rem;
    width: 100%;
    object-fit: cover;
    @media ${QUERIES.tabletAndUp} {
      height: 100%;
    }
  }
`;

const Content = styled.div`
  flex: 50%;
  padding: 24px;
  color: var(--color-grayish-blue);
  @media ${QUERIES.tabletAndUp} {
    padding: 32px;
  }
`;

const Ribbon = styled.p`
  text-transform: uppercase;
  font-size: ${12 / 16}rem;
  font-weight: var(--font-medium);
  letter-spacing: 5px;
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

const Prices = styled.p`
  margin-top: 24px;
  display: flex;
  align-items: center;
  gap: 20px;

  @media ${QUERIES.tabletAndUp} {
    margin-top: 30px;
  }

  span {
    color: var(--color-dark-cyan);
    font: var(--font-display);
  }
  s {
    font: var(--font-body);
    font-size: ${13 / 16}rem;
  }
`;

const Button = styled.button`
  margin-top: 20px;
  @media ${QUERIES.tabletAndUp} {
    margin-top: 30px;
  }

  width: 100%;
  border: none;
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
  gap: 1ch;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: var(--color-deep-cyan);
  }
`;

export default ProductPreview;
