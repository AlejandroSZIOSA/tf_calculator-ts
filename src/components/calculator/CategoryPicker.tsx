import Picker from "react-mobile-picker";
import classes from "./CategoryPicker.module.css";
import { CATEGORIES } from "../../data/static-data";

type CategoriesType = {
  [key: string]: string[];
};

type UsePicker = {
  pickerCategoryValue: { category: string };
  setPickerCategoryValue: (v: { category: string }) => void;
};

type ParentProps = {
  usePicker: UsePicker;
};

const [cat1, cat2, cat3] = CATEGORIES; //Destructuring [{}]

const categories: CategoriesType = {
  category: [cat1.name, cat2.name, cat3.name],
};

export default function CategoryPicker({ usePicker }: ParentProps) {
  const { pickerCategoryValue, setPickerCategoryValue } = usePicker;
  return (
    <>
      <Picker
        value={pickerCategoryValue}
        onChange={setPickerCategoryValue}
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
      <p>{pickerCategoryValue.category}</p>
    </>
  );
}
