import { useState, useEffect } from "react";

interface ScreenSize {
  width: number;
  height: number;
}

export function useScreenSize(): ScreenSize {
  const getScreenSize = (): ScreenSize => ({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  const [screenSize, setScreenSize] = useState<ScreenSize>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updateScreenSize = () => {
      setScreenSize(getScreenSize());
    };

    updateScreenSize();

    window.addEventListener("resize", updateScreenSize);

    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return screenSize;
}