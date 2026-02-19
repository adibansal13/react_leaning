import { useState } from "react";
import NoteCard from "./NoteCard";

const Notes = () => {
  let [title, setTitle] = useState("");
  let [detail, setDetail] = useState("");
  let [task, setTask] = useState([]);
  function submitHandler(e) {
    e.preventDefault();
    setTask([...task, { title: title, detail: detail }]);
    setTitle("");
    setDetail("");
  }
  return (
    <div className="p-4 flex flex-wrap ">
      <div className=" flex w-full sm:w-1/2 justify-center p-2">
        <form
          className="flex flex-col"
          onSubmit={e => {
            submitHandler(e);
          }}
        >
          <input
            type="text"
            placeholder="Enter your Heading.."
            className="bg-gray-200 w-xs sm:w-lg h-10 p-2 rounded-2xl"
            value={title}
            onChange={e => {
              setTitle(e.target.value);
            }}
          />
          <textarea
            name=""
            id=""
            placeholder="Enter oyur notes"
            className="bg-gray-200 w-xs p-3 sm:w-lg rounded-2xl my-4 h-32"
            value={detail}
            onChange={e => {
              setDetail(e.target.value);
            }}
          ></textarea>
          <br />

          <button className="bg-blue-400 text-white px-3 py-2 rounded-xl">
            Submit
          </button>
        </form>
      </div>
      <div className="w-full sm:w-1/2">
        <h1 className="text-3xl text-white">Your Notes</h1>
        <div className="flex mt-3 flex-wrap gap-5 overflow-auto">
          {task.map((el, idx) => {
            return <NoteCard id={idx} key={idx} task={el} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Notes;
