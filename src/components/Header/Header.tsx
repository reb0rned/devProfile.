import { GitIcon } from "../../assets/icons/GitIcon";
import { LinkedInIcon } from "../../assets/icons/LinkedInIcon";
import { HeaderLogo } from "./ HeaderLogo/HeaderLogo";
import "./Header.scss";

export const Header = () => {
  return (
    <header className="header">
      <HeaderLogo />
      <nav className="header__navbar">
        <ul className="header__list">
          <li className="header__item">
            <a href="https://github.com/reb0rned" target="_blanc">
              <div className="header__linkLogo">
                <GitIcon />
              </div>
            </a>
          </li>
          <li className="header__item">
            <a
              href="https://www.linkedin.com/in/dmytro-kashchenko-1983981a9/"
              target="_blanc"
            >
              <div className="header__linkLogo">
                <LinkedInIcon />
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
