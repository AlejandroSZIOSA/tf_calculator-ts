import SignupForm from "../../components/forms/SignupForm";
import classes from "./Signup.module.css";

export default function Signup() {
  return (
    <div className={classes.container}>
      <h1>Sign Up</h1>
      <div style={{ padding: "20px" }}>
        <img src="/src/assets/images/signup.png" width={220} height={220} />
      </div>
      <SignupForm />
    </div>
  );
}
