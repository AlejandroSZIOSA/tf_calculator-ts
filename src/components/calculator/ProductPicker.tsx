import { useState } from "react";
import Picker from "react-mobile-picker";

type SelectionsType = {
  [key: string]: string[];
};

const selections: SelectionsType = {
  title: ["turf 1", "turf 2", "turf 3", "turf 4"],
};

export default function ProductPicker() {
  const [pickerValue, setPickerValue] = useState({
    title: "",
  });

  return (
    <>
      <Picker
        value={pickerValue}
        onChange={setPickerValue}
        style={{
          fontSize: "xxx-large",
          background: "yellow",
          width: "100%",
        }}
      >
        {Object.keys(selections).map((name) => (
          <Picker.Column key={name} name={name}>
            {selections[name].map((option) => (
              <Picker.Item key={option} value={option}>
                {option}
              </Picker.Item>
            ))}
          </Picker.Column>
        ))}
      </Picker>
      <p>{pickerValue.title}</p>
    </>
  );
}
