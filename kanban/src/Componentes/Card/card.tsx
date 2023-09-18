import React from "react";
import './style.css'
type ICard = {
  children?: React.ReactNode;
  title: string;
  desc: string;
};


const card = (props: ICard) => {
  return (
    <>
      <div className="card">
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
      </div>
    </>
  );
};

export default card;
