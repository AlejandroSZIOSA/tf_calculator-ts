import { type FC } from "react";
import { useUser_Ctx } from "../store/user-Context";
import HomeHeader from "../components/navigation/HomeHeader";
import HomeFooter from "../components/HomeFooter";
import classes from "./Home.module.css";

const HomePage: FC = () => {
  const { user_Token } = useUser_Ctx();
  console.log(user_Token);

  return (
    <>
      <HomeHeader />
      <div className={classes.container}>
        <main className={classes.main}>
          <h1>About Us</h1>
          <section className={classes.section}>
            {/*  <p className={classes.paragraph}>About us .......</p> */}
            <img
              src="/src/assets/images/LogoTF.png"
              width={300}
              height={100}
              alt="login_img"
            />
            <a style={{ color: "blue" }} href="https://turfquick.com/">
              <span>Homepage</span>
            </a>
            <p>Grass Calculator</p>
          </section>
        </main>
        <HomeFooter />
      </div>
    </>
  );
};

export default HomePage;
