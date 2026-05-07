import "../styles/header.css";
import { useMediaQuery } from "react-responsive";
import logoMobile from "/logo_mobile.png";
import logoPC from "/logo.svg";
import { Link } from "react-router";

function Header() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <nav className="header-container">
      <div className="header-left-section">
        <Link to="/">
          <img src={isMobile ? logoMobile : logoPC} alt="판다마켓 홈" />
        </Link>
      </div>
      <Link to="/login" id="login-button" className="button">
        로그인
      </Link>
    </nav>
  );
}

export default Header;
