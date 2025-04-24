import { type FC, useRef, useState } from "react";

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
    <section>
      <h1>Area</h1>
      <div>
        <div>
          <input
            type="number"
            disabled={areInputsDisabled}
            placeholder="Length"
            ref={length}
          />
          <input
            type="number"
            disabled={areInputsDisabled}
            placeholder="Height"
            ref={height}
          />
        </div>
        <p>{areaResult}</p>
      </div>
      <div>
        <button onClick={handleResetValues} disabled={isDisabled.resetBtn}>
          Reset
        </button>
        <button onClick={handleSetValues} disabled={isDisabled.setBtn}>
          set
        </button>
      </div>
    </section>
  );
};

export default CalculateArea;
