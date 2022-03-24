import styled from "styled-components";

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem;

  .each-fade {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      background: #f6f7f8;
      background-image: linear-gradient(
        to right,
        #f6f7f8 0%,
        #edeef1 20%,
        #f6f7f8 40%,
        #f6f7f6f8 100%
      );
      background-size: 80rem 14rem;
      animation: placeholderShimmer 0.1s linear infinite forwards;

      @keyframes placeholderShimmer {
        0% {
          background-position: -40rem 0;
        }
        100% {
          background-position: 40rem 0;
        }
      }
    }
  }
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

export const Gallery = styled.div``;
