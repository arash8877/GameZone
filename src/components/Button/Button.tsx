import styles from "./Button.module.css";

interface ButtonProps {
  children: string;
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  onClick?: () => void;
}

const Button = ({ children, onClick, color = "primary" }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={[styles.btn, styles["btn-" + color]].join(" ")}
    >
      {children}
    </button>
  );
};

export default Button;
