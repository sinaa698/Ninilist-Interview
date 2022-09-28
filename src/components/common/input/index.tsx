import { CSSProperties } from "react";
import "./input.css";

const Input = ({
  label,
  value,
  name,
  style,
  onChange,
}: {
  label: string;
  value?: string;
  name: string;
  style?: CSSProperties;
  onChange: (value: string) => void;
}) => {
  return (
    <div className="input-container">
      <label htmlFor={name} className="input-container__label">
        {label}
      </label>
      <input
        className={"input-container__input"}
        type="text"
        value={value}
        dir="ltr"
        style={style}
      />
    </div>
  );
};

export default Input;
