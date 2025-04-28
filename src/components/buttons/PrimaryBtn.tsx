import { FC, type ReactNode } from "react";
import classes from "./PrimaryBtn.module.css";

type PrimaryBtnPros = {
  children: ReactNode;
  type?: "submit" | "reset" | "button";
};

const PrimaryBtn: FC<PrimaryBtnPros> = ({ children, type }) => {
  return (
    <div className={classes.container}>
      <button type={type}>{children}</button>
    </div>
  );
};

export default PrimaryBtn;
