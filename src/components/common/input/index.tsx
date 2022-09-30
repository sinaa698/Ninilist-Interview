import { CSSProperties } from "react";
import "./input.css";

const Input = ({
  label,
  name,
  style,
  onChange,
}: {
  label: string;
  name: string;
  style?: CSSProperties;
  onChange: (searchInput: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="input-container">
      <label htmlFor={name} className="input-container__label">
        {label}
      </label>
      <input
        className={"input-container__input"}
        type="text"
        dir="ltr"
        style={style}
        onChange={(searchInput) => onChange(searchInput)}
      />
    </div>
  );
};

export default Input;
