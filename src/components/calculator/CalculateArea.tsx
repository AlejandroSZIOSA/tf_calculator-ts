import { type FC, useRef, useState } from "react";

type Buttons = {
  setBtn: boolean;
  resetBtn: boolean;
};
const CalculateArea: FC = () => {
  const length = useRef<HTMLInputElement>(null);
  const height = useRef<HTMLInputElement>(null);

  const [result, setResult] = useState<number>(0);
  const [isDisabled, setIsDisabled] = useState<Buttons>({
    setBtn: false,
    resetBtn: true,
  });

  function handleSetValues() {
    const enteredLength = parseFloat(length.current!.value);
    const enteredHeight = parseFloat(height.current!.value);
    if (enteredHeight && enteredLength) {
      setResult(enteredLength * enteredHeight);
      setIsDisabled({ setBtn: true, resetBtn: false });
    }
  }

  function handleResetValues() {
    setResult(0);
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
        <p>{result}</p>
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
