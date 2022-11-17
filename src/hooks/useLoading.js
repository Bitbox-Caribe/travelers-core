import { useCallback, useState } from "react";

export const useLoading = (defaultLoadingState = false) => {
  const [isLoading, setIsLoading] = useState(defaultLoadingState);

  const startLoading = useCallback(() => {
    setIsLoading(true);
  }, []);

  const stopLoading = useCallback(() => {
    setIsLoading(false);
  }, []);

  return { isLoading, startLoading, stopLoading };
};
