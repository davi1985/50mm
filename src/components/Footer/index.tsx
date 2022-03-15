import ReactAudioPlayer from "react-audio-player";

import { Container, ListContainer } from "./styles";

import { AiFillInstagram } from "react-icons/ai";
import Link from "next/link";
import { useEffect } from "react";

export const Footer = () => {
  useEffect(() => {}, []);
  return (
    <Container>
      <p>Copyright © All rights reserved</p>

      <ReactAudioPlayer
        src="/assets/audio/audio.mp3"
        autoPlay
        className="audio"
        volume={0.3}
        controls
        preload="auto"
      />

      <ListContainer>
        <li>
          <Link href="/">
            <a>
              <AiFillInstagram size={30} />
            </a>
          </Link>
        </li>
      </ListContainer>
    </Container>
  );
};
