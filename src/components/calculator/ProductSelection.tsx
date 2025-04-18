import { FC, useState } from "react";
import { PRODUCTS } from "../../data/dummy-data";
import classes from "./ProductSelection.module.css";

type Country = "Sweden" | "Norway" | "Finland";

const ProductSelection: FC = () => {
  const [country, setCountry] = useState<Country>("Sweden");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCountry(e.target.value as Country);
  };
  return (
    <div>
      <p>Choose the right Grass</p>
      <div className={classes.selectorContainer}>
        <label htmlFor="country">Select a country:</label>
        <select
          id="country"
          value={country}
          onChange={handleChange}
          className={classes.select}
        >
          {PRODUCTS.map((p) => (
            <option key={p.id} value={p.name} className={classes.option}>
              {p.name}
            </option>
          ))}
        </select>
      </div>
      <p>Selected country: {country}</p>
    </div>
  );
};

export default ProductSelection;
