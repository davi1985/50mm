import { useEffect, useLayoutEffect, useState } from "react";
import Link from "next/link";
import ReactAudioPlayer from "react-audio-player";

import { AiFillInstagram } from "react-icons/ai";

import { Container, ListContainer } from "./styles";

export const Footer = () => {
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
