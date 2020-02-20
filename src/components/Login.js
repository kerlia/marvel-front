import React, { useState } from "react";

import { useHistory, Link } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// https://leboncoin-api.herokuapp.com/api/user/log_in
// POST
// {
//   "email": "farid@lereacteur.io",
//   "password": "azerty"
// }

function Login({ user, setUser, modal, setModal }) {
  const history = useHistory();
  const API = "https://leboncoin-api.herokuapp.com/api/user/log_in";

  if (user && !modal) {
    history.push("/");
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = e => {
    const value = e.target.value;
    setEmail(value);
  };
  const handlePasswordChange = e => {
    const value = e.target.value;
    setPassword(value);
  };
  const handleSubmit = async e => {
    e.preventDefault();
    console.log(email, password);

    if (email === "" || password === "") {
      alert("please fill in all fields");
    } else {
      console.log(" >>>> SUBMIT");
      const user = {
        email: email,
        password: password
      };
      const response = await axios.post(API, user);
      console.log("response>>>", response.data);
      Cookies.set("lbc-cook", response.data.token);
      setUser({ "lbc-cook": response.data.token });
      if (modal) {
        console.log(">>>>dans modal");
        setModal(false);
      } else {
        history.push("/");
      }
    }
  };

  return (
    <div className="login main-form">
      <span
        className="fa-stack close"
        onClick={e => {
          setModal(false);
        }}
      >
        <FontAwesomeIcon className="fa-stack-1x white" icon="circle" />
        <FontAwesomeIcon
          className="fa-stack-1x blue rotate"
          icon="times-circle"
        />
      </span>

      <h1>Connexion</h1>
      {/* onSubmit={props.handleSubmit} */}
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="form-email">Adresse email</label>
        <input
          placeholder=".........@............com"
          type="text"
          name="email"
          id="form-email"
          defaultValue=""
          onChange={handleEmailChange}
        />

        <label htmlFor="form-password">Mot de passe</label>
        <input
          placeholder="**********"
          type="password"
          name="password"
          id="form-password"
          defaultValue=""
          onChange={handlePasswordChange}
        />
        <input type="submit" value="Se connecter" className="btn btn-login" />
      </form>
      <h3>Vous n'avez pas de compte</h3>
      <Link to="/sign-up" className="btn btn-new-account">
        Créer un compte
      </Link>
    </div>
  );
}

export default Login;
