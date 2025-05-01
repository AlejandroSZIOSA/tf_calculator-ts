import { type FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useUser_Ctx } from "../store/user-Context";
import classes from "./Results.module.css";
import PrimaryBtn from "../components/buttons/PrimaryBtn";

type Convert = [converted: number, unit: string];

const ResultsPage: FC = () => {
  const location = useLocation();
  const { subTotalArea, productSelected } = location.state;
  const { user_data } = useUser_Ctx();
  const [converted, unit] = calculateTotalProduct(
    subTotalArea,
    getWeightPerSquareMeter
  );

  const navigate = useNavigate();

  function getWeightPerSquareMeter(): number {
    const productData = user_data?.find((p) => p.name === productSelected);
    return productData?.weightPerSquareMeter as number;
  }

  function calculateTotalProduct(area: number, fn: () => number): Convert {
    const totalProduct = area * fn();
    return convertTotalProduct(totalProduct);
  }

  function convertTotalProduct(ts: number): Convert {
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
    <div className={classes.container}>
      <h1 className={classes.title}>Results</h1>
      <p className={classes.text}>For</p>
      <div className={classes.resultContainer}>
        <div className={classes.numberContainer}>
          <p>{subTotalArea}</p>
        </div>
        <div className={classes.unitContainer}>
          <p>m²</p>
        </div>
      </div>
      <p className={classes.text}>You will need</p>
      <div className={classes.resultContainer}>
        <div className={classes.numberContainer}>
          <p>{converted}</p>
        </div>
        <div className={classes.unitContainer}>
          <p>{unit}</p>
        </div>
      </div>
      <p className={classes.text}>Of</p>
      <div className={classes.productContainer}>
        <p>{productSelected}</p>
      </div>
      <div className={classes.imageContainer}>
        <img src="/src/assets/images/tf_logo.png" width={120} height={120} />
      </div>
      <div className={classes.homeBtnContainer}>
        <PrimaryBtn type="button" onClickFn={() => navigate("/")}>
          To home
        </PrimaryBtn>
      </div>
    </div>
  );
};

export default ResultsPage;
