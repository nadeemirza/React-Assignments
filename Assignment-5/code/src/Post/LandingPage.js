import "./App.css";

const LandingPage = () => {
  return (
    <div className="LandingPage">
      <div className="img">
        <img src="LandingImage.jpg" alt="Cover" />
      </div>
      <div className="conatiner">
        <h1>
          InstaClone
          <button type="submit">
            <a href="http://localhost:3001/">Enter</a>
          </button>
        </h1>
      </div>
    </div>
  );
};
export default LandingPage;
