import { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface LikeProps {
  onClick: () => void;
}

const Like = ({onClick}: LikeProps) => {
  const [status, setStatus] = useState(false);

  const toggle = () => {
    setStatus(!status);
    onClick();
  }
  return status ? (
    <AiFillHeart color="#ff6b81" size={20} onClick={toggle} />
  ) : (
    <AiOutlineHeart size={20} onClick={toggle} />
  );
};

export default Like;
