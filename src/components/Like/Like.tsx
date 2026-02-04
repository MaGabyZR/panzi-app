import { useState } from "react";
import { FcLike } from "react-icons/fc";
import { IoHeartDislikeOutline } from "react-icons/io5";

//Notify the consumer of this component that the user has clicked on this icon.
interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  //Is it full or not.
  const [status, setStatus] = useState(true);

  //Encapsulate the logic to pass onClick after setStatus.
  const toggle = () => {
    setStatus(!status); //whatever status, you pass the inverted status.
    onClick(); //Notify the consumer of this component.
  };

  if (status) return <FcLike size={40} onClick={toggle} />;
  return <IoHeartDislikeOutline size={40} onClick={toggle} />;
};

export default Like;
