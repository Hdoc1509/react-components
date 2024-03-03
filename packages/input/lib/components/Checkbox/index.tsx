import { clsx } from "clsx";
import { Label } from "../Label";
import { CheckboxIcon, CheckboxIconChecked } from "../Icons";
import { ComponentProps, ReactNode } from "react";
import { Simplify } from "@hdoc-react/type-utils";
import { InputProps } from "../Input";
import "./style.scss";

type Props = Simplify<
  Partial<{
    icon: ReactNode;
    iconChecked: ReactNode;
    size: "small" | "large";
    color: "primary" | "secondary" | "info" | "success" | "warning" | "error";
  }> &
    Pick<InputProps, "label" | "labelClassName"> &
    Omit<ComponentProps<"input">, "size" | "color" | "type">
>;

export const Checkbox = ({
  label,
  labelClassName,
  icon,
  iconChecked,
  size,
  color,
  className,
  disabled,
  required,
  ...restProps
}: Props): JSX.Element => {
  const wrapperClass = clsx(
    "checkbox",
    {
      [`checkbox--${size}`]: size,
      "checkbox--disabled": disabled,
      [`checkbox--${color}`]: color,
    },
    className,
  );

  return (
    <Label disabled={disabled} className={labelClassName} checkbox>
      <div className={wrapperClass}>
        <input
          className="checkbox__inner"
          type="checkbox"
          disabled={disabled}
          required={required}
          {...restProps}
        />
        <span className="checkbox__icon">
          {icon ?? <CheckboxIcon />}
          {iconChecked ?? <CheckboxIconChecked />}
        </span>
      </div>
      {required && label ? `${label} *` : label}
    </Label>
  );
};