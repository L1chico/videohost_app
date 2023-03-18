
import "./Header.css"

function Header() {
    return (
        <div className="Header">
            <span className="Header_Name">ProtoTube</span>
            <input type="text" placeholder="Search"  className="Header_Search"/>
            <button className="Header_ChangeLang">ENG</button>
            <button className="Header_DownloadVideo">Download</button>
            <button className="Header_ChangeTheme">ChangeTheme</button>
            <button className="Header_SingIn">Sign in</button>
            <button className="Header_Register">Register</button>
        </div>
    );
}

export default Header;