import "./navigation-styles.css";

export const GlobalNavigationBar = () => {
  return (
    <>
      <div className="header-wrap margin-auto">
        <div id="logo-wrap">
          <a href="/">
            <div className="logo-img float-left">
              <img src="/imgs/logo60.png" alt="로고" />
            </div>
            <div className="logo-title">33GO</div>
          </a>
        </div>
        <nav className="gnb">
          <ul id="navi">
            <li>
              <a href="#">Q&A</a>
            </li>
            <li>
              <a href="#">커뮤니티</a>
            </li>
            <li>
              <a href="#">지식</a>
            </li>
            <li>
              <a href="#">공지사항</a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};
