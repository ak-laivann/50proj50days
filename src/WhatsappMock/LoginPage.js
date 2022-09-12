import { useEffect, useState } from "react";
import axios from "axios";
import "./LoginPage.css";
import WhatsappPage from "./WhatsappPage";

const LoginPage = () => {
  const [apiUser, setApiUser] = useState("");

  const [apiPass, setApiPass] = useState("");

  const [userName, setUserName] = useState("");

  const [userPass, setUserPass] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function handleUserName(e) {
    setUserName(e.target.value);
  }

  function handlePassword(e) {
    setUserPass(e.target.value);
  }
  useEffect(() => {
    const API = "./UserNameApi.json";

    axios
      .get(API)
      .then((res) => {
        setApiUser(res.data[0].username), setApiPass(res.data[0].password);
      })
      .catch((err) => err);
  }, []);

  function handleSubmit() {
    if (userName === apiUser && userPass === apiPass) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
      alert("Combination Incorrect");
      setUserName("");
      setUserPass("");
    }
  }

  return (
    <>
      {!isLoggedIn ? (
        <>
          <div className="loggedout">
            <div className="App-Name">
              <h3>WHATSAPP WEB</h3>
            </div>
            <div className="LoginForm">
              <p>Enter Your UserName :</p>
              <input
                type="text"
                required
                onChange={(e) => handleUserName(e)}
                value={userName}
              />
              <p>Enter Your Secret Phrase :</p>
              <input
                type="password"
                required
                onChange={(e) => handlePassword(e)}
                value={userPass}
              />
              <button onClick={() => handleSubmit()}>GO IN</button>
            </div>
          </div>
        </>
      ) : (
        <>
          <WhatsappPage />
        </>
      )}
    </>
  );
};

export default LoginPage;
