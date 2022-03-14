import styled from "styled-components";

export const Container = styled.nav`
  margin-left: auto;

  @media (max-width: 600px) {
    margin: 0 auto;
  }
`;

export const Link = styled.a`
  display: inline-block;
  position: relative;
  height: 5rem;
  line-height: 5rem;
  transition: color 0.3s;
  font-weight: bold;

  transition: color 0.3s;

  & + a {
    margin-left: 2rem;
  }

  &:hover::after {
    content: "";
    height: 3px;
    width: 100%;
    position: absolute;
    bottom: 20px;
    left: 0;
    background: var(--yellow-500);
  }

  @media (max-width: 600px) {
    /* a + a {
      margin: 1rem;
    } */
  }
`;
