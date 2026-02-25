import React from "react";

const Card = props => {
  return (
    <div className="userCard  h-45 w-60 rounded-2xl overflow-hidden">
      <img
        src={props.user.download_url}
        alt="Image"
        className="h-full object-cover"
      />
    </div>
  );
};

export default Card;
