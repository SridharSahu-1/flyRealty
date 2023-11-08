import { useState } from "react";

export function useDisclose(initial: boolean) {
  const [isOpen, setIsOpen] = useState(initial);
  function onClose() {
    setIsOpen(false);
  }
  function onOpen() {
    setIsOpen(true);
  }
  return { isOpen, onClose, onOpen };
}
