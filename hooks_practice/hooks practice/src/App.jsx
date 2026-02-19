import React, { useState } from "react";

const App = () => {
  let [num, setNum] = useState({ name: "Aditya" });
  function changeH2() {
    setNum(prev => ({ ...prev, age: "Anmol" }));
    console.log(num);
  }
  return (
    <div>
      <h2>
        {num.name} {num.age}
      </h2>
      <button onClick={changeH2}>Click</button>
    </div>
  );
};

export default App;
