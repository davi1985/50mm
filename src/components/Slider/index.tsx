import Image from "next/image";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { slideImages } from "../../data/slide-images";
import { Caption, Container, Details, Gallery } from "./styles";

export const Slideshow = () => {
  return (
    <Container>
      <div className="slide-container">
        <Fade>
          {slideImages.map((image, index) => (
            <div className="each-fade" key={index}>
              <Gallery>
                <Image
                  src={image.url}
                  width={1000}
                  height={600}
                  alt={image.caption}
                  objectFit="cover"
                  quality={75}
                  loading="lazy"
                />
              </Gallery>

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
