import { useState } from "react";

export default function LikeButton() {
  const [isLiked, setIsLiked] = useState(false);
  let [click, setClick] = useState(0);
  const toggleLike = () => {
    setIsLiked(!isLiked);
    setClick(click + 1);
  };
  let likeStyle = {color : "pink",};

  return (
    <div>
      <p>Clicks = {click}</p>
      <p onClick={toggleLike}>
        <i className={isLiked ? "fa-solid fa-heart" : "fa-regular fa-heart"}
           style={likeStyle}
        ></i>
      </p>
    </div>
  );
}