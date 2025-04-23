import { type FC, useState, useEffect } from "react";
import Picker from "react-mobile-picker";
import { useUser_Ctx } from "../../store/user-Context";
import { CATEGORIES } from "../../data/static-data";

type Product = {
  [key: string]: string[];
};

type UsePicker = {
  pickerProductValue: { product: string };
  setPickerProductValue: (v: { product: string }) => void;
};

type ParentProps = {
  categorySelected: string;
  usePicker: UsePicker;
};

const ProductPicker: FC<ParentProps> = ({ categorySelected, usePicker }) => {
  /* const [pickerValue, setPickerValue] = useState({
    product: "",
  }); */

  const { pickerProductValue, setPickerProductValue } = usePicker;

  const [names, setNames] = useState<string[] | undefined>([]);

  const { user_data } = useUser_Ctx();

  useEffect(() => {
    const test = extractProductsIds();

    const getProductNames = () => {
      const names: string[] = [];
      if (test) {
        for (let i = 0; i < test.length; i++) {
          for (let j = 0; j < user_data!.length; j++) {
            if (test[i] === user_data![j].id) {
              names.push(user_data![j].name);
              break;
            }
          }
        }
        console.log(names);
        return names;
      }
    };
    setNames(getProductNames());
  }, [categorySelected]);

  const extractProductsIds = () => {
    const categoryData = CATEGORIES.find((c) => c.name === categorySelected);
    if (categoryData) {
      const { productsIds } = categoryData;
      return productsIds;
    }
  };
  console.log(extractProductsIds());

  const products2: Product = {
    product: names || [],
  };

  return (
    <>
      <Picker
        value={pickerProductValue}
        onChange={setPickerProductValue}
        style={{
          fontSize: "x-large",
          background: "yellow",
          width: "100%",
        }}
      >
        {Object.keys(products2).map((name) => (
          <Picker.Column key={name} name={name}>
            {products2[name].map((option) => (
              <Picker.Item key={option} value={option}>
                {option}
              </Picker.Item>
            ))}
          </Picker.Column>
        ))}
      </Picker>
      {/*  <p>{pickerValue.product}</p> */}
    </>
  );
};

export default ProductPicker;
