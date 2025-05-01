import { type FC } from "react";
import classes from "./HomeFooter.module.css";

const HomeFooter: FC = () => {
  return (
    <div className={classes.container}>
      <div className={classes.innerContainer}>
        <p>
          <img
            src="https://livewp.site/wp/md/agrosector/wp-content/uploads/sites/55/2019/01/icon-1.png"
            alt="Phone"
            data-lzl-src="https://livewp.site/wp/md/agrosector/wp-content/uploads/sites/55/2019/01/icon-1.png"
            width={20}
            height={20}
          ></img>
          +46 (08) 410 144 05
        </p>

        <p>
          <img
            src="https://livewp.site/wp/md/agrosector/wp-content/uploads/sites/55/2019/01/icon-2.png"
            alt="E-Mail"
            data-lzl-src="https://livewp.site/wp/md/agrosector/wp-content/uploads/sites/55/2019/01/icon-2.png"
            width={20}
            height={20}
          />
          info@turfquick.com
        </p>
      </div>
    </div>
  );
};

export default HomeFooter;
