import { IoMdClose } from "react-icons/io";
import useOutsideClik from "../hooks/useOutsideClick";
import { useEffect } from "react";

function Modal({ onClose, children }) {
  const ref = useOutsideClik(onClose);

  useEffect(() => {
    const body = document.getElementsByTagName("body")[0];
    body.style.overflow = "hidden";

    return () => {
      body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="modal-backdrop">
      <div ref={ref} className="modal">
        <div className="modal__header">
          <h2>سبد خرید</h2>
          <IoMdClose className="modal__close" onMouseDown={onClose} />
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
