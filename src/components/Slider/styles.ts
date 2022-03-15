import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem;
`;

export const Caption = styled.p`
  font-size: 0.9rem;
  text-align: center;
  margin-top: 1rem;
  color: var(--gray-300);

  span {
    margin-left: 0.5rem;
    font-style: italic;
  }
`;

export const Details = styled.div`
  margin-top: 2rem;
  line-height: 2rem;

  h2 {
    margin-bottom: 1.2rem;
  }
`;

export const Loading = styled.div`
  width: 1000px;
  height: 600px;

  display: flex;
  justify-content: center;
  align-self: center;
`;
