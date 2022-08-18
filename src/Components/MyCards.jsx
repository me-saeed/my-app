import React from "react";

function MyCards(props) {
  return (
    <>
      <div className="gallery">
        <div className="content">
          <img className="imagestyle" src={props.img} alt="" />
          <h3 className="namestyle">{props.desc}</h3>
          <p>{props.name}</p>
          <p>{props.name}</p>
          <h6>$100.00</h6>
          <ul className="list-style">
            <li>
              <i className="fa fa-star checked style"></i>
            </li>
            <li>
              <i className="fa fa-star checked style"></i>
            </li>
            <li>
              <i className="fa fa-star checked style"></i>
            </li>
            <li>
              <i className="">{props.startText}</i>
            </li>
            <li>
              <i className="fa fa-star-o "></i>
            </li>
          </ul>
          <button className="buy-4">{props.btnText}</button>
        </div>
      </div>
    </>
  );
}

export default MyCards;
