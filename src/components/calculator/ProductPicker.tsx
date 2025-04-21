import Picker from "react-mobile-picker";
import classes from "./ProductPicker.module.css";

import { CATEGORIES } from "../../data/dummy-data";

type CategoriesType = {
  [key: string]: string[];
};

type Picker = {
  pickerValue: { category: string };
  setPickerValue: (v: { category: string }) => void;
};

type ParentProps = {
  usePicker: Picker;
};

const [cat1, cat2, cat3] = CATEGORIES; //Destructuring [{}]

const categories: CategoriesType = {
  category: [cat1.name, cat2.name, cat3.name],
};

export default function ProductPicker(usePicker: ParentProps) {
  const { pickerValue, setPickerValue } = usePicker.usePicker;
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
