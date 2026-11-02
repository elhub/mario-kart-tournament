import { useEffect, useState } from "react";

// Resolves once the image is cached, so it can be revealed without progressive painting.
export const useImageLoaded = (src: string) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.onload = () => setIsLoaded(true);
    image.onerror = () => setIsLoaded(true);
    image.src = src;
    return () => {
      image.onload = null;
      image.onerror = null;
    };
  }, [src]);

  return isLoaded;
};
