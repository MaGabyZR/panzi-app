import { ReactNode } from "react";

interface Props {
  children: ReactNode; //To pass HTML content in the <Alert> component in App.tsx
}

const Alert = ({ children }: Props) => {
  return <div className="alert alert-warning">{children}</div>;
};

export default Alert;
