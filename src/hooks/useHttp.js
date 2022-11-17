import { useState, useEffect } from "react";
import { useLoading } from "./useLoading";

export const useHttp = (requestFunction) => {
  const [data, setData] = useState([]);
  const { isLoading, startLoading, stopLoading } = useLoading(true);

  useEffect(() => {
    startLoading();
    requestFunction().then((result) => {
      setData(result.data);
      stopLoading();
    });
  }, [requestFunction, startLoading, stopLoading]);

  return [data, isLoading];
};
