import React, { useState, useEffect } from "react";
import axios from "axios";

function UseEffectHookApi() {
  const [post, setPost] = useState([]);
  const [id, setId] = useState(1);
  const [idButton, setIdButton] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${idButton}`)
      .then((res) => {
        setPost(res.data);
      });
    console.log("data");
  }, [idButton]);

  function handleClick() {
    setIdButton(id);
  }

  return (
    <div>
      <input value={id} type="text" onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>
      <p>{post.title}</p>
    </div>
  );
}

export default UseEffectHookApi;
