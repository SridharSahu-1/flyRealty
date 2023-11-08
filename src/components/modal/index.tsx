import "./index.css";

type ModalProps = {
  children: React.ReactNode;
  isOpen: boolean;
  onClose(): void;
};

export default function Modal({ children, isOpen, onClose }: ModalProps) {
  return (
    <div
      className="overlay"
      onClick={onClose}
      style={{ display: isOpen ? "block" : "none" }}
    >
      <div className="modal">
        <div
          className="modalContainer"
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          {children}
          <button onClick={onClose} className="closeBtn">
            X
          </button>
        </div>
      </div>
    </div>
  );
}
