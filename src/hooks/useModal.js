import { useCallback, useState } from "react";

import { toggleScrolling } from "../shared/utils";

export const useModal = (defaultVisibilityState = false) => {
  const [isVisible, setIsVisible] = useState(defaultVisibilityState);

  const openModal = useCallback(() => {
    toggleScrolling();
    setIsVisible(true);
  }, []);

  const closeModal = useCallback(() => {
    toggleScrolling();
    setIsVisible(false);
  }, []);

  return { isVisible, openModal, closeModal };
};
