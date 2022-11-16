import { useState, useEffect } from "react";

export const useHttp = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([{ id: "0", title: "Learn Storybook" }]);
  }, []);

  return [items];
};
