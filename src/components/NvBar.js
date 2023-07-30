import React from "react";
import ReactStars from "react-rating-stars-component";
const NvBar = ({ text, change, ratingChanged, star }) => {
  return (
    <div>
      <h1 style={{ color: "red" }}>Movie-App-Hooks</h1>
      <br />
      <hr style={{ color: "white" }} />
      <form action="">
        <input type="text" value={text} onChange={change} />
      </form>
      <div style={{ marginLeft: "625px" }}>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
          value={star}
        />
      </div>
      ,
    </div>
  );
};

export default NvBar;
