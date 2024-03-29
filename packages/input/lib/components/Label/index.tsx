import { clsx } from "clsx";
import "./style.scss";

type Props = {
  className?: string;
  error?: boolean;
  fullwidth?: boolean;
  checkbox?: boolean;
  disabled?: boolean;
};

export const Label = ({
  className,
  error,
  fullwidth,
  checkbox,
  disabled,
  children,
}: React.PropsWithChildren<Props>) => {
  const labelClass = clsx(
    "label",
    {
      "label--error": error,
      "label--fullwidth": fullwidth,
      "label--checkbox": checkbox,
      "label--disabled": disabled,
    },
    className,
  );

  return <label className={labelClass}>{children}</label>;
};
