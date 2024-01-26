type UseToggle = {
  isShown: Ref<boolean>;
  show: () => void;
  hide: () => void;
  toggle: () => void;
};

export const useToggle = (): UseToggle => {
  const isShown = ref<boolean>(false);

  const show = (): void => {
    isShown.value = true;
  };

  const hide = (): void => {
    isShown.value = false;
  };

  const toggle = (): void => {
    isShown.value = !isShown.value;
  };

  return {
    isShown,
    show,
    hide,
    toggle,
  };
};
