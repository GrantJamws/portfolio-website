import './styles.scss';

interface ButtonProps {
  className?: string;
  children: string;
  style?: "filled" | "ghost";
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const Button: React.FC<ButtonProps> = ({ className = '', style='filled', children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`button button-${style} ${className}`}>
      {children}
    </button>
  );
}

export default Button;
