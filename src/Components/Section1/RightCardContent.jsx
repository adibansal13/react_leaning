import { MoveRight } from "lucide-react";

const RightCardContent = props => {
  return (
    <div className="absolute top-0 left-0 h-full w-full p-6 flex flex-col justify-between ">
      <h2 className="h-12 w-12 rounded-full bg-white flex justify-center items-center text-2xl font-semibold">
        {props.id + 1}
      </h2>
      <div>
        <p className="text-white mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
          laboriosam odit tempora nemo, eos doloremque impedit nobis voluptatum
          cum alias!
        </p>
        <div className="flex justify-between items-center">
          <button className="bg-blue-500 px-4 py-2 rounded-full">
            {props.user.tag}
          </button>
          <button className="bg-blue-500 px-2 py-1 rounded-full">
            <MoveRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightCardContent;
