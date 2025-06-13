import { Particals } from "../BacksideAnimation/Particals";
import "../Welcome/Welcome.scss";

export const Welcome = () => {
  return (
    <div className="welcome">
      <div className="welcome__leftside">
        <Particals />

        <h2>
          <span className="welcome__leftside-aqua">Just a chill guy</span> with
          some code experience...
        </h2>
      </div>
      <div className="welcome__container">
        <div className="welcome__container__info">
          <div className="welcome__container__info-innerBlock">
            <div className="welcome__container__infoPhoto"></div>
            <h2 className="welcome__container__infoName">Dmytro Kashchenko</h2>
            <h5 className="welcome__container__infoPostition">
              🚀 Full Stack Developer | Frontend Enthusiast
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
