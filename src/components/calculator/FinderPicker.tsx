import { FC, useState, useEffect } from "react";
import Picker from "react-mobile-picker";
import { useUser_Ctx } from "../../store/user-Context";
import { CATEGORIES } from "../../data/dummy-data";

type Product = {
  [key: string]: string[];
};

type ParentProps = {
  categorySelected: string;
};

const FinderPicker: FC<ParentProps> = ({ categorySelected }) => {
  const [pickerValue, setPickerValue] = useState({
    product: "",
  });

  const [names, setNames] = useState<string[] | undefined>(["hola"]);

  const { user_data } = useUser_Ctx();

  useEffect(() => {
    const test = extractProductsIds();

    const getProductNames = () => {
      const names: string[] = [];
      if (test) {
        for (let i = 0; i < test.length; i++) {
          for (let j = 0; j < user_data!.length; j++) {
            console.log(user_data![j].id);
            console.log(test[i]);
            if (test[i] == user_data![j].id) {
              names.push(user_data![j].name);
              break;
            }
          }
        }
        console.log(names);
        return names;
      }
    };

    getProductNames();
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
    product: ["cat1", "cat2", "cat3"],
  };

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
      <p>{pickerValue.product}</p>
    </>
  );
};

export default FinderPicker;
