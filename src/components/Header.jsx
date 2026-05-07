import "../styles/header.css";
import { useMediaQuery } from "react-responsive";
import logoMobile from "/logo_mobile.png";
import logoPC from "/logo.svg";

function Header() {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <nav className="header-container">
      <div className="header-left-section">
        <a href="/">
          <img src={isMobile ? logoMobile : logoPC} alt="판다마켓 홈" />
        </a>
      </div>
      <a href="#" id="login-button" className="button">
        로그인
      </a>
    </nav>
  );
}

export default Header;
