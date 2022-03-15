import ReactAudioPlayer from "react-audio-player";

import { Container, ListContainer } from "./styles";

import { AiFillInstagram } from "react-icons/ai";

export const Footer = () => {
  return (
    <Container>
      <p>Copyright © All rights reserved</p>

      <ReactAudioPlayer
        src="/assets/audio/audio.mp3"
        autoPlay
        className="audio"
        volume={0.4}
        preload="auto"
      />

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
