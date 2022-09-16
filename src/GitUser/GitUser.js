import { useState } from "react";
import "./GitUser.css";
import axios from "axios";

const GitUser = () => {
  const [details, setDetails] = useState([]);

  const [userName, setUserName] = useState("");

  function handleChange(e) {
    setUserName(e.target.value);
  }

  function handleClick() {
    const APIURL = `https://api.github.com/users/${userName}`;
    axios
      .get(APIURL)
      .then((res) => setDetails(res.data))
      .catch((err) => setDetails(""));
  }

  return (
    <>
      <div className="container">
        <div className="search">
          <input
            placeholder="Enter the User Name"
            onChange={(e) => handleChange(e)}
          />
          <button onClick={() => handleClick()}>Search</button>
        </div>
        <>
          <div className="userdetails" key={details.id}>
            <div className="userprofile">
              <img src={details.avatar_url} />
              <h3>{details.login}</h3>
            </div>
          </div>
        </>
      </div>
    </>
  );
};

export default GitUser;
