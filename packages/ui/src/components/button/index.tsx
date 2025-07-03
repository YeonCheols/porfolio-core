import type { BasicButtonProps } from "../../types/button";

export function BasicButton({
  children,
  ...other
}: BasicButtonProps): JSX.Element {
  return (
    <button type="button" {...other}>
      {children}
    </button>
  );
}

BasicButton.displayName = "Button";

export default BasicButton;
