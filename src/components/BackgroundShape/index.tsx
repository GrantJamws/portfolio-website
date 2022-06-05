import './styles.scss';

interface BackgroundShapeProps {
  className?: string;
  color?: "dark" | "light";
}

const BackgroundShape: React.FC<BackgroundShapeProps> = ({ className = '', color = "dark" }) => {
  return (
    <span
      className={`background-shape background-shape-${color} ${className}`} />
  );
}

export default BackgroundShape;
