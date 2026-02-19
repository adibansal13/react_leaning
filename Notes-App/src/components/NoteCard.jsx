import React from "react";

const NoteCard = props => {
  let task = props.task;
  function onDelete(key) {
    console.log(key);
  }
  return (
    <div className=" flex flex-col justify-between w-55 h-60 bg-[url('https://static.vecteezy.com/system/resources/previews/037/152/677/non_2x/sticky-note-paper-background-free-png.png')] p-4 pt-5 bg-cover  rounded-2xl">
      <div>
        <h1 className="text-2xl font-bold">{task.title}</h1>
        <p>{task.detail}</p>
      </div>
      <button
        onClick={() => {
          onDelete(props.id);
        }}
        className=" w-full py-1 text-white active:scale-90 bg-red-500 rounded-2xl"
      >
        Delete
      </button>
    </div>
  );
};

export default NoteCard;
