import { type FC, type ReactNode } from "react";
import classes from "./PrimaryBtn.module.css";

type PrimaryBtnPros = {
  children: ReactNode;
  type?: "submit" | "reset" | "button";
  isDisabled?: boolean;
  onClickFn?: () => void;
};

const PrimaryBtn: FC<PrimaryBtnPros> = ({
  children,
  type,
  isDisabled,
  onClickFn,
}) => {
  return (
    <button
      className={classes.button}
      type={type}
      disabled={isDisabled}
      onClick={onClickFn}
    >
      {children}
    </button>
  );
};

export default PrimaryBtn;
