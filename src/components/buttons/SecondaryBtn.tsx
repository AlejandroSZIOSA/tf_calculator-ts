import { type FC, type ReactNode, MouseEvent } from "react";
import classes from "./SecondaryBtn.module.css";

type SecondaryBtnProps = {
  children: ReactNode;
  type?: "submit" | "reset" | "button";
  variant: "rounded" | "not-rounded";
  onClickFN?: (event: MouseEvent<HTMLButtonElement>) => void;
  isDisabled?: boolean; // optional prop to add disabled functionality to the button. Default value is false.  // fix: use optional chaining here to prevent potential error when isDisabled prop is not provided.  This is because optional chaining is a feature in JavaScript that allows you to access properties of an object that may be undefined or null.  It provides a more concise and readable way to handle these situations.  // fix: use optional chaining here to prevent potential error when isDisabled prop is not
};

const SecondaryBtn: FC<SecondaryBtnProps> = ({
  children,
  type,
  variant,
  onClickFN,
  isDisabled,
}) => {
  return (
    <button
      /* Dynamic Css module */
      /*    className={
        variant === "rounded" ? classes.buttonRadius : classes.buttonRounded 
      } */
      className={`${classes.button} ${
        variant === "rounded" ? classes.buttonRounded : ""
      }`}
      type={type}
      onClick={onClickFN}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
export default SecondaryBtn;
