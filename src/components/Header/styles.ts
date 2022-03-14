import styled from "styled-components";

export const Container = styled.header`
  height: 5rem;
  border-bottom: 1px solid var(--gray-850);

  @media (max-width: 600px) {
    height: 8.5rem;
  }
`;

export const Content = styled.div`
  max-width: 1120px;
  height: 5rem;
  margin: 0 auto;
  padding: 0 2rem;

  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Title = styled.a`
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (max-width: 600px) {
    margin-top: 1rem;
  }
`;
