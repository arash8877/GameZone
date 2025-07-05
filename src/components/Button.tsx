interface ButtonProps {
  children: string;
  color?: "primary" | "secondary" | "success" | "danger" | "warning" | "info";
  onClick?: () => void;
}

const Button = ({ children, onClick, color = "primary" }: ButtonProps) => {
  return (
    <button type="button" onClick={onClick} className={`btn btn-${color}`}>
      {children}
    </button>
  );
};

export default Button;
