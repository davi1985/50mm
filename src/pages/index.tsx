import { useEffect } from "react";
import { Slideshow } from "../components/Slider";

export default function Home() {
  useEffect(() => {
    document.addEventListener("contextmenu", (event) => {
      event.preventDefault();
      const xPos = event.pageX + "px";
      const yPos = event.pageY + "px";
    });
  }, []);

  return <Slideshow />;
}
