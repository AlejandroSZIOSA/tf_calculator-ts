import { type FC, useRef, useState } from "react";
import CalculatorBtn from "../buttons/CalculatorBtn";
import classes from "./CalculateArea.module.css";

type Buttons = {
  setBtn: boolean;
  resetBtn: boolean;
};

type CalculateAreaProps = {
  useAreaResult: { areaResult: number; setAreaResult: (v: number) => void };
};

const CalculateArea: FC<CalculateAreaProps> = ({ useAreaResult }) => {
  const length = useRef<HTMLInputElement>(null);
  const height = useRef<HTMLInputElement>(null);

  const [isDisabled, setIsDisabled] = useState<Buttons>({
    setBtn: false,
    resetBtn: true,
  });
  const [areInputsDisabled, setAreInputsDisabled] = useState<boolean>(false);

  const { areaResult, setAreaResult } = useAreaResult;

  function handleSetValues() {
    const enteredLength = parseFloat(length.current!.value);
    const enteredHeight = parseFloat(height.current!.value);
    if (enteredHeight && enteredLength) {
      setAreaResult(enteredLength * enteredHeight);
      setIsDisabled({ setBtn: true, resetBtn: false });
      setAreInputsDisabled(true);
    }
  }

  function handleResetValues() {
    setAreaResult(0);
    length.current!.value = "";
    height.current!.value = "";
    setIsDisabled({ setBtn: false, resetBtn: true });
    setAreInputsDisabled(false);
  }

  return (
    <section className={classes.section}>
      <div className={classes.container}>
        <p className={classes.title}>Area</p>
        <div className={classes.innerInputsContainer}>
          <input
            type="number"
            disabled={areInputsDisabled}
            placeholder="Length (m)"
            ref={length}
          />
          <p>X</p>
          <input
            type="number"
            disabled={areInputsDisabled}
            placeholder="Height (m)"
            ref={height}
          />
        </div>
        <h2 style={{ fontSize: "35px" }}>
          {areaResult} <span>m²</span>
        </h2>
      </div>
      <div className={classes.buttonsContainer}>
        <CalculatorBtn
          onClickFN={handleResetValues}
          isDisabled={isDisabled.resetBtn}
        >
          Reset
        </CalculatorBtn>
        <CalculatorBtn
          onClickFN={handleSetValues}
          isDisabled={isDisabled.setBtn}
        >
          set
        </CalculatorBtn>
      </div>
    </section>
  );
};

export default CalculateArea;
