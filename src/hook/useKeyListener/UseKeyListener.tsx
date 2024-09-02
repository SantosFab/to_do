import { useEffect } from "react";

interface UseKeyListenerProps {
  callback: () => void;
  key: string;
}

export const useKeyListener = ({ callback, key }: UseKeyListenerProps) => {
  useEffect(() => {
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === key) {
        callback();
      }
    };

    document.addEventListener("keyup", handleKeyUp);
    return () => document.removeEventListener("keyup", handleKeyUp);
  }, [callback, key]);
};
