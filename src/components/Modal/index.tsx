import React from "react";
import { createPortal } from "react-dom";
import "./style.css";

interface PopupModalProps {
  isOpen: boolean;
  onClose: () => void;
  content: React.ReactNode;
}

function PopupModal({ isOpen, onClose, content }: PopupModalProps) {
  if (!isOpen) return null;

  return createPortal(
    <div className="modal">
      <div className="modal-content">
        {content}
        <button type="button" onClick={onClose}>
          닫기
        </button>
      </div>
    </div>,
    document.getElementById("modal-root") as HTMLElement,
  );
}

export default PopupModal;
