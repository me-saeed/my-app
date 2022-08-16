import React from "react";

function MyCards() {
  return (
    <>
      <div className="gallery">
        <div className="content">
          <img
            className="imagestyle"
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <h3 className="namestyle">Shoes</h3>
          <p>No Pains , No Gains</p>
          <p>We provide the best</p>
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
              <i className="fa fa-star checked style"></i>
            </li>
            <li>
              <i className="fa fa-star checked "></i>
            </li>
          </ul>
          <button className="buy-1">Buy Now</button>
        </div>
      </div>
      <div className="gallery">
        <div className="content">
          <img
            className="imagestyle"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkw0w7sv4aTlHyxzukxezi60sERLEis3KiWA&usqp=CAU"
            alt=""
          />
          <h3 className="namestyle">Bag</h3>
          <p>No Pains , No Gains</p>
          <p>We provide the best</p>
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
              <i className="fa fa-star checked style"></i>
            </li>
            <li>
              <i className="fa fa-star checked "></i>
            </li>
          </ul>
          <button className="buy-2">Buy Now</button>
        </div>
      </div>
      <div className="gallery">
        <div className="content">
          <img
            className="imagestyle"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwhuOiqyKcIEIhSb8jujdtvsUMVlQzgBoZGw&usqp=CAU"
            alt=""
          />
          <h3 className="namestyle">Dollar Marker</h3>
          <p>No Pains , No Gains</p>
          <p>We provide the best</p>
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
              <i className="fa fa-star checked style"></i>
            </li>
            <li>
              <i className="fa fa-star checked "></i>
            </li>
          </ul>
          <button className="buy-3">Buy Now</button>
        </div>
      </div>
      <div className="gallery">
        <div className="content">
          <img
            className="imagestyle"
            src="data:image/jpeg;base64,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"
            alt=""
          />
          <h3 className="namestyle"> Harry Poter Novel</h3>
          <p>No Pains , No Gains</p>
          <p>We provide the best</p>
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
              <i className="fa fa-star checked style"></i>
            </li>
            <li>
              <i className="fa fa-star checked "></i>
            </li>
          </ul>
          <button className="buy-4">Buy Now</button>
        </div>
      </div>
    </>
  );
}

export default MyCards;
