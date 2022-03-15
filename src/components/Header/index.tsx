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
            <Image
              layout="fixed"
              src="/camera.svg"
              alt="My World in 50mm"
              width={40}
              height={40}
            />
          </Title>
        </Link>

        <Nav />
      </Content>
    </Container>
  );
};
