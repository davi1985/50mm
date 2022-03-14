import Image from "next/image";
import Link from "next/link";
import { Nav } from "../Nav";
import { Container, Content, Title } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Content>
        <Link href="/">
          <Title>
            My World in 50mm
            <Image src="/camera.svg" alt="" width="50" height="50" />
          </Title>
        </Link>

        <Nav />
      </Content>
    </Container>
  );
};
