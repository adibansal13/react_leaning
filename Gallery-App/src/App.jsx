import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./compnents/Card";

const App = () => {
  let [userData, setUserData] = useState([]);
  let [index, setIndex] = useState(1);
  async function getData() {
    let response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=15`,
    );
    setUserData(response.data);
  }
  useEffect(() => {
    getData();
  }, [index]);
  let printImage = <h1 className="text-3xl absolute top-1/2">Loading......</h1>;
  if (userData.length > 0) {
    printImage = userData.map((user, idx) => {
      return <Card user={user} key={idx} />;
    });
  }
  return (
    <div className="bg-black h-screen overflow-auto text-white">
      <div className="flex flex-wrap gap-4 px-5 mt-3 justify-center h-[90%]">
        {printImage}
      </div>
      <div className="flex w-full justify-center">
        <button
          className="bg-yellow-600 px-3 py-1 rounded-2xl text-2xl cursor-pointer active:scale-95"
          onClick={() => {
            if (index > 1) {
              setIndex(index - 1);
              setUserData([]);
            }
          }}
        >
          Prev
        </button>
        <h2 className="text-2xl mx-3">{index}</h2>
        <button
          className="bg-yellow-600 px-3 py-1 rounded-2xl text-2xl cursor-pointer active:scale-95"
          onClick={() => {
            setIndex(index + 1);
            setUserData([]);
          }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
