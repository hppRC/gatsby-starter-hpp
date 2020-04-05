import { useState } from 'react';
import { createContainer } from 'unstated-next';

const Component = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen((open) => !open);
  };

  return { open, setOpen, toggle };
};

export default createContainer(Component);
