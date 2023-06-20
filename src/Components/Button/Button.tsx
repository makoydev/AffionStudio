import style from "./Button.module.scss";

interface ButtonProps {
  size: "small" | "medium" | "large";
  children: string;
}

const Button: React.FC<ButtonProps> = ({ size, children }) => {
  return <div className={`${style.container} ${style[size]}`}>{children}</div>;
};

export default Button;
