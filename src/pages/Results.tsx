import { type FC } from "react";
import { useLocation } from "react-router-dom";
import { useUser_Ctx } from "../store/user-Context";

type Extract = [converted: number, unit: string];

const ResultsPage: FC = () => {
  const location = useLocation();
  const { subTotalArea, productSelected } = location.state;
  const { user_data } = useUser_Ctx();
  const [converted, unit] = calculateTotalProduct(
    subTotalArea,
    getWeightPerSquareMeter
  );

  function getWeightPerSquareMeter(): number {
    const productData = user_data?.find((p) => p.name === productSelected);
    return productData?.weightPerSquareMeter as number;
  }

  function calculateTotalProduct(area: number, fn: () => number): Extract {
    const totalProduct = area * fn();
    return convertTotalSeeds(totalProduct);
  }

  function convertTotalSeeds(ts: number): Extract {
    let converted: number = 0;
    let unit: string = "";
    if (ts > 0 && ts < 1000) {
      unit = "g";
      converted = ts;
    } else if (ts >= 1000 && ts < 10000) {
      unit = "kg";
      converted = ts / 1000;
    } else if (ts >= 10000) {
      unit = "Ton";
      converted = ts / 10000;
    } else if (ts >= 100000) {
      unit = "(Ton*10)";
      converted = ts / 10000;
    }
    return [converted, unit];
  }

  return (
    <>
      <h1>RESULTS PAGE</h1>
      <p>{subTotalArea}</p>
      {/*  <p>{calculateTotalProduct(subTotalArea, getWeightPerSquareMeter)}</p> */}

      <p>
        {converted} -{unit}
      </p>
      <p>{productSelected}</p>
    </>
  );
};

export default ResultsPage;
