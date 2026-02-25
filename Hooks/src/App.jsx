import React, { useState } from "react";

const App = () => {
  let [user, setUser] = useState({ name: "", password: "" });
  function handleSubmit(e) {
    e.preventDefault();
    console.log("form is submitted");
    console.log(user);
  }
  function changeIput(e) {
    let { name, value } = e.target;
    setUser({ ...user, [name]: value });
  }
  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          value={user.name}
          onChange={changeIput}
          name="name"
        />
        <input
          type="text"
          value={user.password}
          onChange={changeIput}
          name="password"
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
