import { useState } from 'react';
import { createContainer } from 'unstated-next';

const useSwitchContainer = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(open => !open);
  };

  return { open, setOpen, toggle };
};

export const SwitchContainer = createContainer(useSwitchContainer);

export default SwitchContainer;
