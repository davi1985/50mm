import Image from "next/image";
import { useRef, useState } from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { slideImages } from "../../data/slide-images";
import { Caption, Container, Details, Loading } from "./styles";

export const Slideshow = () => {
  const [loading, setLoading] = useState<boolean>(true);

  const counter = useRef(0);

  const imageLoaded = () => {
    counter.current += 1;

    if (counter.current >= slideImages.length) {
      setLoading(false);
    }
  };
  return (
    <Container>
      <div className="slide-container">
        <Fade>
          {loading && (
            <div className="each-fade">
              <div>
                <Loading>Loading images...</Loading>
              </div>
            </div>
          )}

          {slideImages.map((image, index) => (
            <div className="each-fade" key={index}>
              <div>
                <Image
                  src={image.url}
                  layout="responsive"
                  alt={image.caption}
                  priority
                  objectFit="cover"
                  quality={70}
                  onLoad={imageLoaded}
                />
              </div>
              <Caption>
                {image.caption} - <span>Photo by Davi Silva</span>
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
