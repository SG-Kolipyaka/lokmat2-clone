import React, { useState, useEffect, useRef } from 'react';
import { loginuser } from "../Redux/adminReducer/action";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from 'next/router';
import styles from "../styles/login.module.css"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const router = useRouter();
  const state1 = useSelector((store) => store.adminReducer);

  const ffcheck = useRef(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password
    };
    dispatch(loginuser(userData));
    ffcheck.current = true; 
  };

  useEffect(() => {
    if (ffcheck.current) {
      if (state1.isAuth) {
        alert("Login Successful!");
        router.push('/admin');
      } else if(state1.isAuth==false){
        alert("Invalid Credentials");
        ffcheck.current = false; 
      }
    }
  }, [state1.isAuth, router]);

  return (
    <>
      <div className={styles.container}>
        <form className={styles.better} onSubmit={handleSubmit}>
          <h1>Lokmat Admin Login</h1>

          <label htmlFor="email">Email:</label>
          <input type="text" id="email" placeholder='enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
          <br />
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" placeholder='enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    </>
  );
};

export default Login;
