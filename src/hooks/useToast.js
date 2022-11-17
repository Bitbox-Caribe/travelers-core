import { useSnackbar } from "notistack";

export const anchorOrigin = {
  vertical: "top",
  horizontal: "right",
};

export const defaulToastConfig = {};

export function useToast() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const open = (message = "EMPTY", toastConfig = {}) => {
    return enqueueSnackbar(message, { ...defaulToastConfig, ...toastConfig });
  };
  const close = (key) => {
    closeSnackbar(key);
  };

  return { openToast: open, closeToast: close };
}
