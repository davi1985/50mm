import Link from "next/link";
import { useEffect, useState } from "react";
import ReactAudioPlayer from "react-audio-player";
import { AiFillInstagram } from "react-icons/ai";
import { Container, ListContainer } from "./styles";

export const Footer = () => {
  const [volume, setVolume] = useState(0);

  useEffect(() => {
    setVolume(0.3);
  }, []);

  return (
    <Container>
      <p>Copyright © All rights reserved</p>

      <ReactAudioPlayer
        src="/assets/audio/audio.mp3"
        autoPlay
        className="audio"
        volume={volume}
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
