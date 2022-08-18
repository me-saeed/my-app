import React from "react";
import MyCards from "./Components/MyCards";

function Services() {
  const novel = [
    //array
    // json
    {
      id: "1",
      name: "Harry Potter",
      desc: "no Gained",
      btnText: "Go Live",
      startText: "",
      img: "https://img.freepik.com/free-psd/book-hardcover-mockup_125540-225.jpg?w=996&t=st=1660737399~exp=1660737999~hmac=c608047f500488b126f0c8682a80f7cca44033a0e8436219dff5ef6946c96beb",
    },
    {
      id: "2",
      name: "Laptop",
      desc: "Laptop",
      btnText: "Go Now",
      startText: "",
      img: "https://img.freepik.com/free-psd/digital-device-screen-mockup-vector-with-laptop-smartphone-with-gradient-wallpapers_53876-129214.jpg?w=1060&t=st=1660817483~exp=1660818083~hmac=c9415b512eae0a8707391bbba2796a7bc87efe3fe147a99c5cf6aac47965b23d",
    },

    {
      id: "3",
      name: "ENCODER",
      desc: "developer",
      btnText: "Live",
      startText: "",
      img: "https://img.freepik.com/free-psd/hard-cover-book-mockup_358694-12.jpg?w=1060&t=st=1660738004~exp=1660738604~hmac=da862ed81a5d5bac42573610feaec88d9a32e2151c905fdeef583ef45d11873b",
    },
  ];

  // for (var n = 0; n <= 2; n = n + 1) {
  //   console.log(novel[n].name);
  // }

  return (
    <>
      {novel.map((item) => (
        <MyCards
          id={item.id}
          name={item.name}
          desc={item.desc}
          btnText={item.btnText}
          startText={item.startText}
          img={item.img}
        />
      ))}
    </>
  );
}

export default Services;
