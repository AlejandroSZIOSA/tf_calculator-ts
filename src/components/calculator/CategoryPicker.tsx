import Picker from "react-mobile-picker";
import { CATEGORIES } from "../../data/static-data";

//NOTE: IMPLEMENTATION OF "React Mobile Picker" LIBRARY
//https://www.npmjs.com/package/react-mobile-picker

//OBJECTIVE: PASS AN OBJECT (name + id) INSTEAD ONE ARRAY OF STRINGS
//TODO: CRETE A "TYPE OBJECT" INSTEAD AN STRING AS KEY VALUE

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

const [cat1, cat2, cat3, cat4] = CATEGORIES; //Destructuring category objects

//Add categories to the object as picker needed
const categories: CategoriesType = {
  category: [cat1.name, cat2.name, cat3.name, cat4.name],
};

export default function CategoryPicker({ usePicker }: ParentProps) {
  const { pickerCategoryValue, setPickerCategoryValue } = usePicker;
  return (
    <>
      <Picker
        value={pickerCategoryValue}
        onChange={setPickerCategoryValue}
        style={{
          fontSize: "xx-large",
          background: "#aad4a9",
          width: "93%",
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
    </>
  );
}
