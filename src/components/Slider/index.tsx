import React, { useEffect, useState } from "react";
import { Fade } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";

import { Caption, Container, Details } from "./styles";
import { slideImages } from "../../data/slide-images";

import Image from "next/image";

type ImageToSlide = {
  url: string;
  caption: string;
};

export const Slideshow = () => {
  const [images, setImages] = useState<ImageToSlide[]>([]);

  useEffect(() => {
    setImages(slideImages);
  }, []);

  return (
    <Container>
      <div className="slide-container">
        <Fade>
          {images.map((item, index) => (
            <div className="each-fade" key={index}>
              <div>
                <Image
                  layout="responsive"
                  src={item.url}
                  width={"1000px"}
                  height={"600px"}
                  alt={item.caption}
                  priority
                />
              </div>
              <Caption>
                {item.caption} - <span>Photo by Davi Silva</span>
              </Caption>
            </div>
          ))}
        </Fade>
      </div>

      <Details>
        <h2>50mm photographer</h2>
        <p>
          Hello, welcome here, I am Davi Silva and I am a 50mm photographer.
          Most of what I have been shooting in the last 2 years has been done
          with a 50mm in my full frame 5D Mark II body. In this website you can
          see same pictures and I hope enjoy it.
        </p>
      </Details>
    </Container>
  );
};
