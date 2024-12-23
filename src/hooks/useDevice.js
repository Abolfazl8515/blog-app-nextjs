import { useEffect, useState } from "react";

const useDevice = (query) => {
  const [isMobileDevice, setIsMobileDevice] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia(query);
    const handleChange = (e) => setIsMobileDevice(e.matches);
    setIsMobileDevice(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, [query]);

  return { isMobileDevice };
};

export default useDevice;
