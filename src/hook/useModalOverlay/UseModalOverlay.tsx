import { Dispatch, RefObject, SetStateAction, useEffect } from "react";

interface useModalOverlayProps {
  modalRef: RefObject<HTMLDivElement>;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

export const useModalOverlay = ({
  modalRef,
  setShowModal,
}: useModalOverlayProps) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current) {
        if (!modalRef.current.contains(event.target as Node)) {
          setShowModal(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [modalRef, setShowModal]);
};
