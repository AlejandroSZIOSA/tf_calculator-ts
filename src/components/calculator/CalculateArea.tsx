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

  const { areaResult, setAreaResult } = useAreaResult;

  const [isDisabled, setIsDisabled] = useState<Buttons>({
    setBtn: false,
    resetBtn: true,
  });

  function handleSetValues() {
    const enteredLength = parseFloat(length.current!.value);
    const enteredHeight = parseFloat(height.current!.value);
    if (enteredHeight && enteredLength) {
      setAreaResult(enteredLength * enteredHeight);
      setIsDisabled({ setBtn: true, resetBtn: false });
    }
  }

  function handleResetValues() {
    setAreaResult(0);
    length.current!.value = "";
    height.current!.value = "";
    setIsDisabled({ setBtn: false, resetBtn: true });
  }

  return (
    <section>
      <h1>Area</h1>
      <div>
        <div>
          <input type="number" placeholder="L" ref={length}></input>
          <input type="number" placeholder="H" ref={height}></input>
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
