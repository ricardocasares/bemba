import { useState, useEffect } from "react";

const modeMap = {
  true: "dark",
  false: "light",
};

export function useDarkMode() {
  const [initialMode, setInitialMode] = useState(false);
  const [currentMode, setCurrentMode] = useState(!initialMode);

  useEffect(() => {
    setInitialMode(window.matchMedia("(prefers-color-scheme: dark)").matches);
  }, []);

  const toggle = () => {
    document.body.classList.toggle(modeMap[(!initialMode).toString()]);
    setCurrentMode(!currentMode);
  };

  return { isDarkMode: currentMode === initialMode, toggle };
}
