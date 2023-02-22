import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/card/Card";
import styles from "./auth.module.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import Loader from "../../components/loader/Loader";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();
    // console.log(email, password, cnfPassword);
    if (password !== cnfPassword) {
      toast.error("The passwords you entered do not match. Please try again.");
    }
    setIsLoading(true);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        // const user = userCredential.user;
        // console.log(user);
        setIsLoading(false);
        toast.success("Registration Success...");
        navigate("/login");
        // ...
      })
      .catch((error) => {
        toast.error(error.message);
        setIsLoading(false);
      });
    
  };

  return (
    <>
      <ToastContainer autoClose={1000} />
      {isLoading && <Loader />}
      <section className={`${styles.auth}`}>
        <Card>
          <div className={styles.form}>
            <h2>Register</h2>

            <form action="" onSubmit={registerUser}>
              <input
                type="text"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                required
                value={cnfPassword}
                onChange={(e) => setCnfPassword(e.target.value)}
              />
              <button type="submit" className="--btn --btn-primary --btn-block">
                Register
              </button>
              <p className={styles.para}>-- or --</p>
            </form>
            <span className={styles.register}>
              <p className={styles.para}>Already have an account?</p>
              <Link to="/login" id={styles.underlined}>
                Login
              </Link>
            </span>
          </div>
        </Card>
      </section>
    </>
  );
};

export default Register;
