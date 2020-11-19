import "./App.css";
import lettucePlate from "./images/lettuceplate_sml.png";

function App() {
  return (
    <div className="App">
      <nav className="nav-container">
        <div className="brand-logo">LOGO</div>

        <div className="links-container">
          <h5>Green Team</h5>
          <h5>Start Smart</h5>
          <h5>Community</h5>
          <h5 className="contact-container">Contact Us</h5>
        </div>
      </nav>

      <div className="intro-container">
        <div className="headline-container">
          <h1 className="headline-txt">
            We're growing the UAE's food system and the way you eat.
          </h1>{" "}
          <h4>
            Our food system is in dire need of help and now's our chance to fix
            it.
          </h4>
          <button className="tell-me-more"> TELL ME MORE!</button>
        </div>
        <img src={lettucePlate} alt="Lettuce"></img>
      </div>

      <div className="think-container">
        <div className="left-think-box think-flex-item">
          <h5>
            {" "}
            <span className="txt-underline">THI</span>NK OUTSIDE THE BOX, THINK
            INSIDE THE CROPS
          </h5>
          <h2>The Evolution of Agriculture</h2>
        </div>
        <div className="right-think-box think-flex-item">
          <p>
            Hello, lettuce lovers! You're here because just like us your
            passionate about high-quality local foods that are healthy,
            sustainable and long-term economical.
            <br />
            <br />
            We're constantly think of ways to provide you with the happiest
            experience while enjoying our crisp and super-fresh greens!.
          </p>
        </div>
      </div>

      <div className="grid-callout-1">
        <div className="green-background"></div>
        <div className="white-background"></div>
        <div className="white-background"></div>
        <div className="green-background"></div>
      </div>
    </div>
  );
}

export default App;
