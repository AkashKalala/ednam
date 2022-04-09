import '../CSS/Header.css';

function Header() {
    return (
      <div className="Header">
        <div className="Header-Total">
          <p className="title">EDNAM</p>
          <div className="menu">
            <ul className="nav-list">
              <a href={"https://www.ednams.com/"}>
                <li>HOME</li>
              </a>
              
              <a href={"https://www.ednams.com/careers.html"}>
                <li>CAREERS</li>
              </a>
              <a href={"https://www.ednams.com/startup-diaries.html"}>
                <li>STARTUP DIARIES</li>
              </a>
              
            </ul>
          </div>
        </div>
      </div>
    );
  }
  
  export default Header;