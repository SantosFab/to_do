"use client";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type IResponse<T> = [T, Dispatch<SetStateAction<T>>];

export function usePersistedState<T>(
  key: string,
  initialState: T
): IResponse<T> {
  const [storedValue, setStoredValue] = useState(initialState);
  const [firstLoadDone, setFirstLoadDone] = useState(false);

  useEffect(() => {
    const fromLocal = () => {
      if (typeof window === "undefined") {
        return initialState;
      }
      try {
        const item = window.localStorage.getItem(key);
        return item ? (JSON.parse(item) as T) : initialState;
      } catch (error) {
        console.error(error);
        return initialState;
      }
    };

    setStoredValue(fromLocal);
    setFirstLoadDone(true);
  }, [initialState, key]);

  useEffect(() => {
    if (!firstLoadDone) {
      return;
    }

    try {
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(storedValue));
      }
    } catch (error) {
      console.log(error);
    }
  }, [storedValue, firstLoadDone, key]);

  return [storedValue, setStoredValue];
}
