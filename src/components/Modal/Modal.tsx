import React from "react";
import "@/styles/pages/Modal.scss";
import { IoMdClose } from "react-icons/io";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ onClose, children }) => {
  const handleOverlayClick = () => {
    onClose();
  };

  const handleContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div id={"modal-ast-quick"}>
      <div className={"modal-overlay"} onClick={handleOverlayClick}>
        <div className={"modal-content"} onClick={handleContentClick}>
          <div className={"modal-icon-close"} onClick={handleOverlayClick}>
            <IoMdClose size={24} />
          </div>
          <div className={"modal-body"}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
