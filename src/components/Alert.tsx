import { ReactNode } from "react";

interface Props {
  children: ReactNode; //To pass HTML content in the <Alert> component in App.tsx
  onClose: () => void; //To notify App.tsx that the close button has been clicked.
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-warning alert-dismissible">
      {children}
      <button
        type="button"
        className="btn-close"
        onClick={onClose}
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
