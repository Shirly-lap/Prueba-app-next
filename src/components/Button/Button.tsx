
type ButtonType = "button" | "submit" | "reset";

interface ButtonProps {
  type?: ButtonType;
  children?: React.ReactNode;
  disabled?: boolean; 
  label?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; 
}

const Button: React.FC<ButtonProps> = ({ children, disabled = false, onClick, label, type = "button" }) => {
  return (
    <Button disabled={disabled} onClick={onClick} type={type}>
      {label}
      {children}
    </Button>
  );
};

export default Button;