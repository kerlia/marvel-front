import React, { useState, useEffect } from "react";

import { useHistory, Link } from "react-router-dom";
import Cookies from "js-cookie";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// https://leboncoin-api.herokuapp.com/api/user/sign_up
// POST
// {
//   "email": "farid@lereacteur.io",
//   "username": "Farid",
//   "password": "azerty"
// }

function SignUp({ user, setUser }) {
  const history = useHistory();
  const API = process.env.REACT_APP_API + "/user/sign_up";

  if (user) {
    history.push("/");
  }

  const [pseudo, setPseudo] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [cgv, setCgv] = useState(false);

  const handlePseudoChange = e => {
    const value = e.target.value;
    setPseudo(value);
  };
  const handleEmailChange = e => {
    const value = e.target.value;
    setEmail(value);
  };
  const handlePassword1Change = e => {
    const value = e.target.value;
    setPassword1(value);
  };
  const handlePassword2Change = e => {
    const value = e.target.value;
    setPassword2(value);
  };
  const handleCGVChange = e => {
    const checked = e.target.checked;
    setCgv(checked);
  };
  const handleSubmit = async e => {
    e.preventDefault();
    console.log(pseudo, email, password1);

    if (pseudo === "" || email === "" || password1 === "" || password2 === "") {
      alert("please fill in all fields");
    } else if (password1 !== password2) {
      alert("The two passwords are not identical");
    } else if (cgv !== true) {
    } else {
      console.log(" >>>> SUBMIT");
      const newUser = {
        email: email,
        username: pseudo,
        password: password1
      };
      const response = await axios.post(API, newUser);
      Cookies.set("lbc-cook", response.data.token);
      setUser({ "lbc-cook": response.data.token });
      history.push("/");
      console.log(response.data);
    }
  };

  return (
    <main className="container">
      <div className="signup">
        {/* <div className="col-left">
          <h2>Pourquoi créer un compte</h2>
          <div>
            <FontAwesomeIcon className="icon" icon="clock" />
            <div>
              <h3>Gagnez du temps</h3>
              <p>
                Publiez vos annonces rapidement, avec vos informations
                pré-remplies chaque fois que vous souhaitez déposer une nouvelle
                annonce.
              </p>
            </div>
          </div>
          <div>
            <FontAwesomeIcon className="icon" icon="bell" />
            <div>
              <h3>Soyez les premiers informés</h3>
              <p>
                Créez des alertes Immo ou Emploi et ne manquez jamais l’annonce
                qui vous intéresse.
              </p>
            </div>
          </div>
          <div>
            <FontAwesomeIcon className="icon" icon="eye" />
            <div>
              <h3>Visibilité</h3>
              <p>
                Suivez les statistiques de vos annonces (nombre de fois où votre
                annonce a été vue, nombre de contacts reçus)
              </p>
            </div>
          </div>
        </div> */}
        <div className="col-right">
          <h2>Créez un compte</h2>
          <form action="" onSubmit={handleSubmit}>
            <label htmlFor="form-pseudo">Pseudo</label>
            <input
              placeholder="Votre pseudo"
              type="text"
              name="pseudo"
              id="form-pseudo"
              defaultValue=""
              onChange={handlePseudoChange}
            />
            <label htmlFor="form-email">Adresse email</label>
            <input
              placeholder=".........@............com"
              type="text"
              name="email"
              id="form-email"
              defaultValue=""
              onChange={handleEmailChange}
            />
            <div>
              <div>
                <label htmlFor="form-password1">Mot de passe *</label>
                <input
                  placeholder="**********"
                  type="password"
                  name="password1"
                  id="form-password1"
                  defaultValue=""
                  onChange={handlePassword1Change}
                />
              </div>
              <div>
                <label htmlFor="form-password2">
                  Confirmer le mot de passe *
                </label>
                <input
                  placeholder="**********"
                  type="password"
                  name="password2"
                  id="form-password2"
                  defaultValue=""
                  onChange={handlePassword2Change}
                />
              </div>
            </div>
            <div>
              <input
                type="checkbox"
                id="form-cgv"
                name="cgv"
                onChange={handleCGVChange}
              />
              <label htmlFor="form-cgv" class="cgv">
                « J’accepte les{" "}
                <Link to="#">Conditions Générales de Vente</Link>
                &nbsp;et les{" "}
                <Link to="#">Conditions Générales d’Utilisation</Link> »
              </label>
            </div>
            <input
              type="submit"
              value="Créer mon Compte Personnel"
              className="btn btn-login"
            />
          </form>
        </div>
      </div>
    </main>
  );
}

export default SignUp;
