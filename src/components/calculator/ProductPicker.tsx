import { useState } from "react";
import Picker from "react-mobile-picker";
import classes from "./ProductPicker.module.css";

import { CATEGORIES } from "../../data/dummy-data";

type CategoriesType = {
  [key: string]: string[];
};

const categories: CategoriesType = {
  category: ["turf 1", "turf 2", "turf 3", "turf 4"],
};

export default function ProductPicker() {
  const [pickerValue, setPickerValue] = useState({
    category: "",
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
        {Object.keys(categories).map((name) => (
          <Picker.Column key={name} name={name}>
            {categories[name].map((option) => (
              <Picker.Item key={option} value={option}>
                {option}
              </Picker.Item>
            ))}
          </Picker.Column>
        ))}
      </Picker>
      <p>{pickerValue.category}</p>
    </>
  );
}
