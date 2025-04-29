import { type FC, type ReactNode } from "react";
import classes from "./CalculatorBtn.module.css";

type CalculatorBtnProps = {
  children: ReactNode;
  onClickFN: () => void;
  isDisabled: boolean;
};

const CalculatorBtn: FC<CalculatorBtnProps> = ({
  children,
  onClickFN,
  isDisabled,
}) => {
  return (
    <button
      className={classes.button}
      onClick={onClickFN}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default CalculatorBtn;
