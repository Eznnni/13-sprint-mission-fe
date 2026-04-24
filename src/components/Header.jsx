import "../styles/components/header.css";

function Header() {
  return (
    <nav className="header-container">
      <div className="header-left-section">
        <a href="/">
          <img src="/logo.svg" alt="판다마켓 홈" />
        </a>
        <div className="header-left-nav">
          <a href="#" className="header-menu-item">
            <span className="header-menu-item-tag">자유게시판</span>
          </a>
          <a href="#" className="header-menu-item">
            <span className="header-menu-item-tag">중고마켓</span>
          </a>
        </div>
      </div>
      <a href="#" className="button">
        로그인
      </a>
    </nav>
  );
}

export default Header;
