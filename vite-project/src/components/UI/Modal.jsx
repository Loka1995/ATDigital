import { useEffect, useRef } from "react";

/* eslint-disable react/prop-types */
export default function Modal({ children, modalIsOpen, closeModal }) {
  const modal = useRef();
  useEffect(() => {
    const currentModal = modal.current;
    if (modalIsOpen) currentModal.showModal();
    return () => {
      currentModal.close();
    };
  }, [modalIsOpen]);
  return (
    <dialog ref={modal} className="w-full h-full p-2 fixed ml-0">
      {children}
      <button
        onClick={closeModal}
        className="absolute top-0 right-0 text-[3rem] h-[3rem] w-[3rem]"
      >
        &times;
      </button>
    </dialog>
  );
}
