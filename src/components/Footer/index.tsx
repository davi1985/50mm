import { Container, ListContainer } from "./styles";
import { AiFillInstagram } from "react-icons/ai";
export const Footer = () => {
  return (
    <Container>
      <p>Copyright © All rights reserved</p>

      <ListContainer>
        <li>
          <a href="">
            <AiFillInstagram size={30} />
          </a>
        </li>
      </ListContainer>
    </Container>
  );
};
