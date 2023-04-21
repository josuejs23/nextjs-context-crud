import { useEffect, useState } from "react";

export function useLocalStorage(key, initialState) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const item = localStorage.getItem(key);
    console.log("Typeof", typeof item);
    const tasks = JSON.parse(item);
    if (tasks) setState(tasks);
  }, []);

  useEffect(() => {
    if (state.length > 0) {
      localStorage.setItem(key, JSON.stringify(state));
    }
  }, [state]);

  return [state, setState];
}
