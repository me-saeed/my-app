///import logo from "./logo.svg";
import "./App.css";
import logo from "./logo.png";

function App() {
  return (
    <>
      <nav className="navbar background">
        <ul className="nav-list">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Services">Services</a>
          </li>
          <li>
            <a href="#About">About Us</a>
          </li>
          <li>
            <a href="#Contact">Contact Us</a>
          </li>
        </ul>
        <div className="rightNav">
          <input type="text" name="Search" id="Search" />
          <button className="btn btn-sm">Search</button>
        </div>
      </nav>
      <section className="background firstSection">
        <div className="box-main">
          <div className="firstHalf">
            <p className="text-big">The Future of Education is here !</p>
            <p className="text-small">
              In this World of 7 Billion People, We need to educate all of
              them.This is the future of an educated world and we are proud to
              say that the Future of Education is here.
            </p>
            <div className="buttons">
              <button className="btn">Subscribe</button>
              <button className="btn">Watch Video</button>
            </div>
          </div>
          <div className="secondHalf">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSylvxTbvEPQvWsj4A2G16dsAq92W0mZWihsQ&usqp=CAU"
              alt="logo"
            />
          </div>
        </div>
      </section>

      <section className="secRight">
        <div className="paras">
          <p className="sectionTag">The End of Your Search is here</p>
          <p className="sectionSubTag">
            Education brings a natural and lasting change in an individual’s
            reasoning and ability to achieve the targeted goal. It facilitates
            us to investigate our own considerations and thoughts and makes it
            ready to express it in various shapes.
          </p>
        </div>
      </section>
    </>
  );
}

export default App;
