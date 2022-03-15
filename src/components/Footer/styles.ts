import styled from "styled-components";

export const Container = styled.footer`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 2rem;
  color: var(--gray-500);
  display: flex;
  justify-content: space-around;
  align-items: center;

  border-top: 1px solid var(--gray-850);

  .audio {
    height: 30px;
    /* margin-top: 0.5rem; */
  }
`;

export const ListContainer = styled.ol`
  list-style: none;
  margin-top: 1rem;
`;
export const AudioContainer = styled.span``;
