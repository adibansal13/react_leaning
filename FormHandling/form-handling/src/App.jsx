import React from "react";

const App = () => {
  const onSubmitHandler = e => {
    e.preventDefault();
    console.log("Form Submitted");
  };
  return (
    <div>
      <form onSubmit={onSubmitHandler}>
        <input type="text" name="" id="" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default App;
