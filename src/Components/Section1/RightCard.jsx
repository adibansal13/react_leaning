import RightCardContent from "./RightCardContent";
const RightCard = props => {
  return (
    <div className="h-full shrink-0 overflow-hidden w-80 relative rounded-4xl">
      <img
        className="h-full w-full object-cover"
        src={props.user.img}
        alt="Image"
      />
      <RightCardContent user={props.user} id={props.id} />
    </div>
  );
};

export default RightCard;
