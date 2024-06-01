import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  return createPortal(
  <div className="modalContainer">
    {children}
    </div>,
    document.getElementById('modal')
    );
};

export { Modal };
